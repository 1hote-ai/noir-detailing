import { useState, useRef, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const content = {
  EN: {
    eyebrow: 'Transformations',
    title1: 'Before & ',
    title2: 'After',
    desc: 'See the incredible transformations across different surfaces and vehicle types.',
    cat1: 'Exterior Polish',
    cat2: 'Paint Correction',
    before: 'Before',
    after: 'After'
  },
  RU: {
    eyebrow: 'Преображения',
    title1: 'До и ',
    title2: 'После',
    desc: 'Посмотрите на невероятные преображения автомобилей.',
    cat1: 'Полировка кузова',
    cat2: 'Коррекция ЛКП',
    before: 'До',
    after: 'После'
  }
};

export const BeforeAfter = () => {
  const { lang } = useLanguage();
  const t = content[lang];

  const examples = [
    {
      id: "porsche",
      name: "Porsche Panamera",
      category: t.cat1,
      before: "/images/panamera_before_v2.jpg",
      after: "/images/panamera_after_v2.jpg"
    },
    {
      id: "mercedes",
      name: "Mercedes-AMG GT",
      category: t.cat2,
      before: "/images/car_before_studio.jpg",
      after: "/images/car_after_studio.jpg"
    }
  ];

  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);

  const updateDimensions = useCallback(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [updateDimensions]);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleClick = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? examples.length - 1 : prev - 1));
    setSliderPosition(50);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === examples.length - 1 ? 0 : prev + 1));
    setSliderPosition(50);
  };

  const current = examples[activeIndex];

  return (
    <section className="bg-bg py-28 md:py-36 px-6 md:px-12 overflow-hidden relative" id="transformation">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          <div className="lg:col-span-4 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-accent uppercase tracking-[0.25em] text-[11px] font-semibold mb-4 block">
                {t.eyebrow}
              </span>
              
              <h2 className="text-4xl md:text-5xl font-display uppercase leading-[1.05] tracking-tight mb-6">
                {t.title1} <br />
                <span className="text-ink/85">{t.title2}</span>
              </h2>
              
              <p className="text-ink/60 text-sm md:text-base font-body mb-8 max-w-sm leading-relaxed">
                {t.desc}
              </p>
              
              <div className="flex flex-col gap-4 mb-12">
                {examples.map((ex, idx) => (
                  <button 
                    key={ex.id}
                    onClick={() => { setActiveIndex(idx); setSliderPosition(50); }}
                    className={`flex items-center justify-between p-4 border transition-all duration-300 rounded-sm cursor-pointer ${activeIndex === idx ? 'border-accent bg-accent/5' : 'border-ink/10 hover:border-ink/30 bg-black/50'}`}
                  >
                    <div className="flex flex-col items-start text-left">
                      <span className={`text-sm font-semibold tracking-wide uppercase ${activeIndex === idx ? 'text-accent' : 'text-ink/80'}`}>{ex.name}</span>
                      <span className="text-[10px] uppercase tracking-widest text-ink/50 mt-1">{ex.category}</span>
                    </div>
                    {activeIndex === idx && <span className="text-accent text-lg">→</span>}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-4 hidden lg:flex">
                <button 
                  onClick={handlePrev}
                  className="w-11 h-11 rounded-full border border-ink/20 hover:border-accent hover:text-accent flex items-center justify-center text-ink transition-all duration-300 backdrop-blur-sm cursor-pointer"
                >
                  <span className="text-sm">←</span>
                </button>
                <button 
                  onClick={handleNext}
                  className="w-11 h-11 rounded-full border border-ink/20 hover:border-accent hover:text-accent flex items-center justify-center text-ink transition-all duration-300 backdrop-blur-sm cursor-pointer"
                >
                  <span className="text-sm">→</span>
                </button>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative rounded-sm border border-ink/10 bg-black overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)] group"
            >
              <div 
                ref={containerRef}
                className="relative w-full aspect-[16/9] md:aspect-[4/3] lg:aspect-[16/9] overflow-hidden select-none cursor-ew-resize"
                onClick={handleClick}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={handleMouseMove}
                onTouchStart={() => setIsDragging(true)}
                onTouchEnd={() => setIsDragging(false)}
                onTouchMove={handleTouchMove}
              >
                <div className="absolute inset-0 w-full h-full pointer-events-none">
                  <img 
                    src={current.after} 
                    alt={`${current.name} After`} 
                    className="w-full h-full object-cover object-center"
                    draggable={false}
                  />
                  <div className="absolute bottom-6 right-8 text-[11px] font-semibold tracking-[0.2em] uppercase text-white drop-shadow-md bg-black/40 px-3 py-1 rounded backdrop-blur-sm">
                    {t.after}
                  </div>
                </div>

                <div 
                  className="absolute inset-0 z-10 overflow-hidden pointer-events-none"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img 
                    src={current.before} 
                    alt={`${current.name} Before`} 
                    className="h-full object-cover object-center max-w-none grayscale-[30%]" 
                    style={{ 
                      width: containerWidth > 0 ? `${containerWidth}px` : '100%',
                      minWidth: containerWidth > 0 ? `${containerWidth}px` : '100%' 
                    }}
                    draggable={false}
                  />
                  <div className="absolute bottom-6 left-8 text-[11px] font-semibold tracking-[0.2em] uppercase text-white drop-shadow-md bg-black/40 px-3 py-1 rounded backdrop-blur-sm">
                    {t.before}
                  </div>
                </div>

                <div 
                  className="absolute top-0 bottom-0 z-20 w-[1.5px] bg-accent/80 pointer-events-none shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-accent text-bg flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)] text-xs font-bold tracking-tighter transition-all duration-300 ${isDragging ? 'scale-90 bg-white' : 'scale-100 hover:scale-110'}`}>
                    <span>&lsaquo;&rsaquo;</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

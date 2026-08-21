import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const getGalleryItems = (lang: string) => [

  {
    src: "/images/black_porsche_992.jpg",
    fallback: "/images/black_porsche_992.jpg",
    alt: "BMW M4 Ceramic Coating",
    title: "BMW M4",
    service: lang === 'RU' ? "Керамика" : "Ceramic Protection",
    colSpan: "md:col-span-1 lg:col-span-2",
    rowSpan: "md:row-span-2",
    description: lang === 'RU' ? "Тщательная полировка кузова с последующим нанесением керамического состава для восстановления блеска и долговечной защиты." : "Meticulous paint correction followed by our flagship ceramic coating to restore ultimate gloss, depth, and years of durable protection.",
    servicesList: [lang === 'RU' ? "Коррекция ЛКП" : "Paint Correction", lang === 'RU' ? "Керамическое покрытие" : "Ceramic Coating", lang === 'RU' ? "Детейлинг экстерьера" : "Exterior Detailing"]
  },
  {
    src: "/images/porsche_taycan_side.jpg",
    fallback: "/images/porsche_taycan_side.jpg",
    alt: "Mercedes AMG GT Paint Correction",
    title: "AMG GT",
    service: lang === 'RU' ? "Коррекция ЛКП" : "Paint Correction",
    colSpan: "md:col-span-1 lg:col-span-2",
    rowSpan: "md:row-span-1",
    objectPosition: "object-[center_78%]",
    description: lang === 'RU' ? "Комплексная многоэтапная полировка для устранения царапин и дефектов, обеспечивающая безупречный зеркальный блеск." : "Comprehensive multi-stage polishing to eliminate swirl marks and imperfections, revealing a flawless, mirror-like finish.",
    servicesList: [lang === 'RU' ? "Коррекция ЛКП" : "Paint Correction", lang === 'RU' ? "Керамическое покрытие" : "Ceramic Coating", lang === 'RU' ? "Детейлинг экстерьера" : "Exterior Detailing"]
  },
  {
    src: "/images/mercedes_black_studio_side.jpg",
    fallback: "/images/mercedes_black_studio_side.jpg",
    alt: "Range Rover Full Detail",
    title: "RANGE ROVER SVR",
    service: lang === 'RU' ? "Полный детейлинг" : "Full Detail",
    colSpan: "md:col-span-1 lg:col-span-1",
    rowSpan: "md:row-span-1",
    description: lang === 'RU' ? "Полное преображение внутри и снаружи: восстановление роскошного интерьера и защита экстерьера от агрессивной среды." : "A complete transformation inside and out, reviving the luxury interior and protecting the exterior against harsh environments.",
    servicesList: [lang === 'RU' ? "Полный детейлинг" : "Full Detail", lang === 'RU' ? "Детейлинг интерьера" : "Interior Detailing", lang === 'RU' ? "Защита ЛКП" : "Paint Protection"]
  },
  {
    src: "/images/dark_porsche_studio_side.jpg",
    fallback: "/images/dark_porsche_studio_side.jpg",
    alt: "Audi S5 Deep Cleaning",
    title: "AUDI S5",
    service: lang === 'RU' ? "Глубокая очистка" : "Deep Cleaning",
    colSpan: "md:col-span-1 lg:col-span-1",
    rowSpan: "md:row-span-2",
    description: lang === 'RU' ? "Интенсивная глубокая очистка салона и премиальный уход за кожей, возвращающие интерьеру идеальное заводское состояние." : "Intensive interior deep cleaning and premium leather treatment, restoring the cabin to a pristine, factory-fresh state.",
    servicesList: [lang === 'RU' ? "Глубокая очистка" : "Deep Cleaning", lang === 'RU' ? "Детейлинг интерьера" : "Interior Detailing", lang === 'RU' ? "Уход за кожей" : "Leather Treatment"]
  },
  {
    src: "/images/mclaren_dark_studio.jpg",
    fallback: "/images/mclaren_dark_studio.jpg",
    alt: "Ferrari LaFerrari Nano Coating",
    title: "FERRARI LAFERRARI",
    service: lang === 'RU' ? "Нанокерамика" : "Nano Coating",
    colSpan: "md:col-span-1 lg:col-span-2",
    rowSpan: "md:row-span-1",
    description: lang === 'RU' ? "Передовое нанокерамическое покрытие, созданное для гиперкаров: экстремальные гидрофобные свойства и потрясающий блеск." : "Advanced nano-ceramic application tailored for hypercars, ensuring extreme hydrophobic properties and a breathtaking shine.",
    servicesList: [lang === 'RU' ? "Нанокерамика" : "Nano Coating", lang === 'RU' ? "Коррекция ЛКП" : "Paint Correction", lang === 'RU' ? "Детейлинг экстерьера" : "Exterior Detailing"]
  },
  {
    src: "/images/dark_studio_supercar.jpg",
    fallback: "/images/dark_studio_supercar.jpg",
    alt: "Lamborghini Huracan Full Restoration",
    title: "LAMBORGHINI HURACAN",
    service: lang === 'RU' ? "Полное восстановление" : "Full Restoration",
    colSpan: "md:col-span-1 lg:col-span-1",
    rowSpan: "md:row-span-1",
    description: lang === 'RU' ? "Тщательный процесс восстановления, призванный вернуть агрессивным линиям и яркому цвету кузова идеальный выставочный вид." : "An exhaustive restorative process designed to bring the aggressive lines and vibrant paintwork back to showroom perfection.",
    servicesList: [lang === 'RU' ? "Полное восстановление" : "Full Restoration", lang === 'RU' ? "Коррекция ЛКП" : "Paint Correction", lang === 'RU' ? "Керамика" : "Ceramic Protection"]
  }
];

const CaseModal = ({ 
  item, 
  onClose, 
  onNext, 
  onPrev 
}: { 
  item: ReturnType<typeof getGalleryItems>[0]; 
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) => {
  const { lang } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, onNext, onPrev]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
    >
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={(_, { offset }) => {
          if (offset.x < -50) onNext();
          else if (offset.x > 50) onPrev();
        }}
        className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
      >
        <motion.div 
          key={item.title} 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={item.src}
            alt={item.alt}
            onError={(e) => (e.currentTarget.src = item.fallback)}
            className={`w-full h-full object-cover ${item.objectPosition || 'object-center'}`}
            draggable={false}
          />
          {/* Soft Dark Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent sm:via-black/40 sm:from-black/90 pointer-events-none"></div>
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 lg:p-24 pb-20 md:pb-24 pointer-events-none">
        <motion.div
          key={`content-${item.title}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl pointer-events-auto"
        >
          <div className="flex items-center gap-4 mb-4 md:mb-6">
            <span className="w-8 md:w-12 h-[1px] bg-accent block"></span>
            <span className="text-accent text-[10px] md:text-xs tracking-[0.3em] uppercase font-semibold">{item.service}</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display uppercase text-white tracking-tight mb-4 md:mb-6">
            {item.title}
          </h2>
          
          <p className="text-white/70 text-sm md:text-lg font-body leading-relaxed mb-8 md:mb-10 max-w-2xl">
            {item.description}
          </p>
          
          {/* Services List */}
          <ul className="flex flex-col gap-3 mb-10 md:mb-12">
            {item.servicesList?.map((service, i) => (
              <li key={i} className="flex items-center gap-3 text-white/90 text-xs md:text-sm tracking-wider uppercase font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                {service}
              </li>
            ))}
          </ul>
          
          <a
            href="#contact"
            onClick={onClose}
            className="inline-flex items-center justify-center border border-accent text-accent px-8 py-4 text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase hover:bg-accent hover:text-black transition-colors duration-500"
          >
            {lang === 'RU' ? 'Заказать эту услугу \u00A0 →' : 'Book This Service \u00A0 →'}
          </a>
        </motion.div>
      </div>

      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 md:top-10 md:right-10 z-50 w-11 h-11 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/40 hover:scale-105 transition-all duration-300 pointer-events-auto"
        aria-label="Close"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      {/* Navigation Arrows */}
      <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 z-50 flex items-center gap-4 pointer-events-auto">
        <button 
          onClick={onPrev}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-accent hover:border-accent transition-all duration-300 backdrop-blur-sm group"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:-translate-x-1 transition-transform duration-300">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button 
          onClick={onNext}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-accent hover:border-accent transition-all duration-300 backdrop-blur-sm group"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:translate-x-1 transition-transform duration-300">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

const GalleryImage = ({ item, index, onClick }: { item: ReturnType<typeof getGalleryItems>[0]; index: number; onClick: () => void }) => {
  const [imgSrc, setImgSrc] = useState(item.src);

  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`${item.colSpan} ${item.rowSpan} relative overflow-hidden group cursor-pointer`}
    >
      {/* Image */}
      <img
        src={imgSrc}
        alt={item.alt}
        onError={() => setImgSrc(item.fallback)}
        className={`w-full h-full object-cover ${item.objectPosition || 'object-center'} transition-all duration-700 ease-out group-hover:scale-110 brightness-[0.7] group-hover:brightness-100`}
      />

      {/* Permanent dark gradient overlay from bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 pointer-events-none"></div>

      {/* Gold accent line on hover */}
      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-500 group-hover:w-full"></div>

      {/* Caption - always visible at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 transform transition-all duration-500 pointer-events-none">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-6 h-[1px] bg-accent block transition-all duration-500 group-hover:w-10"></span>
          <span className="text-accent text-[10px] tracking-[0.2em] uppercase font-semibold">{item.service}</span>
        </div>
        <h3 className="text-white text-sm md:text-base font-display tracking-wider uppercase">{item.title}</h3>
      </div>

      {/* Corner accent on hover */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </div>
    </motion.div>
  );
};

export const Gallery = () => {
  const { lang } = useLanguage();
  const [selectedCaseIndex, setSelectedCaseIndex] = useState<number | null>(null);

  const handleClose = useCallback(() => setSelectedCaseIndex(null), []);
  
  const handleNext = useCallback(() => {
    setSelectedCaseIndex(prev => prev === null ? null : (prev + 1) % getGalleryItems(lang).length);
  }, []);
  
  const handlePrev = useCallback(() => {
    setSelectedCaseIndex(prev => prev === null ? null : (prev - 1 + getGalleryItems(lang).length) % getGalleryItems(lang).length);
  }, []);

  return (
    <section className="bg-black py-32 px-4 md:px-8" id="gallery">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent uppercase tracking-[0.3em] text-[10px] font-semibold mb-4 block flex items-center gap-4">
              <span className="w-12 h-[1px] bg-accent/50 block"></span>
              {lang === 'RU' ? 'Портфолио' : 'Portfolio'}
            </span>
            <h2 className="text-4xl md:text-5xl font-display uppercase leading-[1.1] tracking-tight text-white">
              {lang === 'RU' ? 'Наши ' : 'Featured '}<span className="text-white/50">{lang === 'RU' ? 'Работы' : 'Work'}</span>
            </h2>
            <p className="text-white/40 text-sm mt-4 max-w-md font-body leading-relaxed">
              {lang === 'RU' ? 'Каждый автомобиль получает наш фирменный уход — пристальное внимание к деталям, превращающее краску в искусство.' : 'Every vehicle receives our signature treatment — meticulous attention to detail that transforms paint into art.'}
            </p>
          </motion.div>
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-white/15 px-6 py-3 text-[10px] font-semibold tracking-widest uppercase text-white/60 hover:text-accent hover:border-accent/40 transition-all duration-300 flex items-center gap-3"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
            {lang === 'RU' ? 'Мы в Instagram' : 'Follow on Instagram'}
          </motion.a>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[280px] md:auto-rows-[300px]">
          {getGalleryItems(lang).map((item, idx) => (
            <GalleryImage key={idx} item={item} index={idx} onClick={() => setSelectedCaseIndex(idx)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCaseIndex !== null && (
          <CaseModal 
            item={getGalleryItems(lang)[selectedCaseIndex]} 
            onClose={handleClose} 
            onNext={handleNext} 
            onPrev={handlePrev} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const content = {
  EN: {
    eyebrow: 'Premium Automotive Care',
    title1: 'Perfection',
    title2: 'In Every Detail',
    desc: 'Noir Detailing delivers an unmatched level of precision, protection, and perfection for your vehicle.',
    book: 'Book Appointment',
    viewWork: 'View Our Work',
    stat1_val: '500+',
    stat1_label: 'Vehicles Perfected',
    stat2_val: '5 YRS',
    stat2_label: 'Ceramic Warranty',
    stat3_val: '10+',
    stat3_label: 'Years Experience'
  },
  RU: {
    eyebrow: 'Премиальный уход за авто',
    title1: 'Идеально',
    title2: 'В каждой детали',
    desc: 'Noir Detailing обеспечивает непревзойденный уровень точности, защиты и совершенства для вашего автомобиля.',
    book: 'Записаться',
    viewWork: 'Наши Работы',
    stat1_val: '500+',
    stat1_label: 'Сделанных авто',
    stat2_val: '5 ЛЕТ',
    stat2_label: 'Гарантия на керамику',
    stat3_val: '10+',
    stat3_label: 'Лет опыта'
  }
};

export const Hero = () => {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden" id="home">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_new_cinematic.jpg"
          alt="Luxury car detailing"
          className="w-full h-full object-cover object-[70%_center] md:object-[80%_center] lg:object-center opacity-100 brightness-[108%] contrast-[102%]"
        />
        {/* Left overlay to keep text ultra-clean, fading smoothly before the car body */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, #050505 0%, #050505 36%, rgba(5, 5, 5, 0.75) 46%, rgba(5, 5, 5, 0.18) 58%, rgba(5, 5, 5, 0) 72%)'
          }}
        />
        {/* Subtle bottom vignette to blend with stats/divider */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, #050505 0%, rgba(5, 5, 5, 0.5) 10%, rgba(5, 5, 5, 0) 25%)'
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-6 block flex items-center gap-4">
              <span className="w-12 h-[1px] bg-accent"></span>
              {t.eyebrow}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-light uppercase leading-[0.95] tracking-tighter mb-8">
              {t.title1} <br />
              <span className="text-ink/60 font-normal">{t.title2}</span>
            </h1>
            <p className="text-ink/70 text-base md:text-lg max-w-xl font-body leading-relaxed mb-12">
              {t.desc}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#booking" className="bg-accent text-bg px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-white transition-colors text-center flex items-center justify-center gap-3 group">
                {t.book}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a href="#gallery" className="border border-ink/20 px-8 py-4 text-xs font-semibold tracking-widest uppercase hover:border-accent hover:text-accent transition-colors text-center">
                {t.viewWork}
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 mt-24 pt-12 border-t border-ink/10"
          >
            <div>
              <div className="text-3xl font-display font-medium mb-1">{t.stat1_val}</div>
              <div className="text-[10px] text-ink/50 uppercase tracking-[0.2em]">{t.stat1_label}</div>
            </div>
            <div>
              <div className="text-3xl font-display font-medium mb-1">{t.stat2_val}</div>
              <div className="text-[10px] text-ink/50 uppercase tracking-[0.2em]">{t.stat2_label}</div>
            </div>
            <div className="hidden md:block">
              <div className="text-3xl font-display font-medium mb-1">{t.stat3_val}</div>
              <div className="text-[10px] text-ink/50 uppercase tracking-[0.2em]">{t.stat3_label}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

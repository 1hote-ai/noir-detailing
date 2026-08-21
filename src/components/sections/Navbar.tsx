import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const content = {
  EN: {
    home: 'Home',
    services: 'Services',
    process: 'Process',
    gallery: 'Gallery',
    about: 'About',
    contact: 'Contact',
    book: 'Book Appointment'
  },
  RU: {
    home: 'Главная',
    services: 'Услуги',
    process: 'Процесс',
    gallery: 'Галерея',
    about: 'О нас',
    contact: 'Контакты',
    book: 'Записаться'
  }
};

export const Navbar = () => {
  const { lang, setLang } = useLanguage();
  const t = content[lang];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-6 mix-blend-difference text-ink"
    >
      <div className="flex items-center gap-6 md:gap-12">
        <div className="flex flex-col tracking-[0.2em] leading-tight font-display font-medium text-lg uppercase">
          <span>Noir</span>
          <span className="text-[0.55em] text-ink/70">Detailing</span>
        </div>
        
        {/* Language Switcher */}
        <div className="flex items-center gap-3 text-[11px] font-semibold tracking-widest font-display">
          <button 
            onClick={() => setLang('RU')}
            className={`transition-all duration-300 hover:text-accent relative ${lang === 'RU' ? 'text-accent' : 'text-ink/50'}`}
          >
            RU
            {lang === 'RU' && (
              <motion.div layoutId="langIndicator" className="absolute -bottom-1 left-0 right-0 h-[1px] bg-accent" />
            )}
          </button>
          <span className="text-ink/20 text-[10px]">|</span>
          <button 
            onClick={() => setLang('EN')}
            className={`transition-all duration-300 hover:text-accent relative ${lang === 'EN' ? 'text-accent' : 'text-ink/50'}`}
          >
            EN
            {lang === 'EN' && (
              <motion.div layoutId="langIndicator" className="absolute -bottom-1 left-0 right-0 h-[1px] bg-accent" />
            )}
          </button>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide">
        <a href="#home" className="hover:text-accent transition-colors">{t.home}</a>
        <a href="#services" className="hover:text-accent transition-colors">{t.services}</a>
        <a href="#process" className="hover:text-accent transition-colors">{t.process}</a>
        <a href="#gallery" className="hover:text-accent transition-colors">{t.gallery}</a>
        <a href="#about" className="hover:text-accent transition-colors">{t.about}</a>
        <a href="#contact" className="hover:text-accent transition-colors">{t.contact}</a>
      </div>

      <button className="hidden md:flex border border-ink/20 px-6 py-2.5 text-xs font-semibold tracking-widest uppercase hover:bg-ink hover:text-bg transition-colors items-center gap-2">
        {t.book}
        <span className="text-[10px]">↗</span>
      </button>
    </motion.nav>
  );
};

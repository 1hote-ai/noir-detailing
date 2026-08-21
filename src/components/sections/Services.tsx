import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const content = {
  EN: {
    eyebrow: 'Signature Services',
    title: 'What We Do',
    s1_title: 'Paint Correction',
    s1_desc: 'Removing swirl marks and scratches to restore a flawless, mirror-like finish to your clear coat.',
    s2_title: 'Ceramic Coating',
    s2_desc: 'Multi-year nano-ceramic protection that repels water, dirt, and UV rays while enhancing gloss.',
    s3_title: 'Interior Detailing',
    s3_desc: 'Deep cleaning, leather conditioning, and steam sterilization for a pristine cabin environment.',
    s4_title: 'Paint Protection Film',
    s4_desc: 'Self-healing clear bra application to defend against rock chips, scratches, and road debris.'
  },
  RU: {
    eyebrow: 'Наши услуги',
    title: 'Что мы делаем',
    s1_title: 'Коррекция ЛКП',
    s1_desc: 'Удаление паутинки и царапин для восстановления безупречного зеркального блеска вашего кузова.',
    s2_title: 'Керамика',
    s2_desc: 'Многолетняя нанокерамическая защита, которая отталкивает воду, грязь и УФ-лучи, усиливая блеск.',
    s3_title: 'Детейлинг салона',
    s3_desc: 'Глубокая очистка, уход за кожей и паровая стерилизация для идеальной чистоты интерьера.',
    s4_title: 'Антигравийная пленка',
    s4_desc: 'Нанесение полиуретановой пленки для защиты от сколов, царапин и дорожного мусора.'
  }
};

export const Services = () => {
  const { lang } = useLanguage();
  const t = content[lang];

  const services = [
    {
      title: t.s1_title,
      description: t.s1_desc,
      image: "/images/service_paint.jpg",
    },
    {
      title: t.s2_title,
      description: t.s2_desc,
      image: "/images/service_ceramic.jpg",
    },
    {
      title: t.s3_title,
      description: t.s3_desc,
      image: "/images/service_interior.jpg",
    },
    {
      title: t.s4_title,
      description: t.s4_desc,
      image: "/images/service_ppf.jpg",
    }
  ];

  return (
    <section className="bg-bg py-32 px-4 md:px-8" id="services">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent uppercase tracking-[0.3em] text-[10px] font-semibold mb-4 block flex items-center gap-4">
              <span className="w-12 h-[1px] bg-accent/50 block"></span>
              {t.eyebrow}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase leading-[1.1] tracking-tight">
              {t.title}
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group relative overflow-hidden h-[400px] md:h-[500px] cursor-pointer bg-black"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-100"
              />
              
              {/* Gradient from bottom for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                <div className="overflow-hidden">
                  <h3 className="text-2xl md:text-3xl font-display uppercase tracking-wider mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-white">
                    {service.title}
                  </h3>
                </div>
                <div className="overflow-hidden h-0 group-hover:h-[80px] transition-all duration-500 ease-in-out">
                  <p className="text-white/70 font-body text-sm leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

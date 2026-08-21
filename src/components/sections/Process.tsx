import { motion } from 'framer-motion';
import { Search, Droplet, Sparkles, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const content = {
  EN: {
    eyebrow: 'Methodology',
    title1: 'The Noir ',
    title2: 'Process',
    desc: 'Every vehicle that enters our studio undergoes a rigorous, multi-stage transformation process engineered for perfection.',
    step1_title: 'Consultation',
    step1_desc: 'We assess your vehicle’s condition and discuss your goals to recommend the perfect care package.',
    step2_title: 'Decontamination',
    step2_desc: 'A meticulous multi-stage wash to remove embedded iron, tar, and environmental fallout.',
    step3_title: 'Correction',
    step3_desc: 'Precision machine polishing removes swirl marks, scratches, and oxidation, restoring clarity.',
    step4_title: 'Protection',
    step4_desc: 'Application of professional-grade ceramic coatings or PPF to lock in the finish.'
  },
  RU: {
    eyebrow: 'Методология',
    title1: 'Процесс ',
    title2: 'Noir',
    desc: 'Каждый автомобиль, поступающий в нашу студию, проходит строгий многоэтапный процесс преображения.',
    step1_title: 'Консультация',
    step1_desc: 'Мы оцениваем состояние автомобиля и обсуждаем ваши цели, чтобы подобрать идеальный комплекс ухода.',
    step2_title: 'Деконтаминация',
    step2_desc: 'Тщательная многоэтапная мойка для удаления въевшихся частиц металла, битума и других загрязнений.',
    step3_title: 'Полировка',
    step3_desc: 'Точная машинная полировка устраняет царапины и голограммы, восстанавливая абсолютную прозрачность лака.',
    step4_title: 'Защита',
    step4_desc: 'Нанесение профессиональных керамических составов или полиуретановой пленки для фиксации результата.'
  }
};

export const Process = () => {
  const { lang } = useLanguage();
  const t = content[lang];

  const steps = [
    {
      number: '01',
      title: t.step1_title,
      description: t.step1_desc,
      icon: <Search size={24} className="text-accent" />
    },
    {
      number: '02',
      title: t.step2_title,
      description: t.step2_desc,
      icon: <Droplet size={24} className="text-accent" />
    },
    {
      number: '03',
      title: t.step3_title,
      description: t.step3_desc,
      icon: <Sparkles size={24} className="text-accent" />
    },
    {
      number: '04',
      title: t.step4_title,
      description: t.step4_desc,
      icon: <ShieldCheck size={24} className="text-accent" />
    }
  ];

  return (
    <section className="bg-black py-32 px-4 md:px-8 border-t border-white/5 overflow-hidden" id="process">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <span className="text-accent uppercase tracking-[0.2em] text-[11px] font-semibold mb-4 block">
            {t.eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase leading-[1.1] tracking-tight text-white">
            {t.title1} <span className="text-white/40">{t.title2}</span>
          </h2>
          <p className="mt-6 text-white/50 max-w-lg mx-auto font-body text-sm md:text-base leading-relaxed">
            {t.desc}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
              className="group flex flex-col items-center text-center p-8 md:p-10 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500"
            >
              <div className="text-accent/80 font-display font-semibold tracking-[0.2em] text-xs mb-6 uppercase">
                {lang === 'RU' ? 'Шаг' : 'Step'} {step.number}
              </div>
              
              <div className="w-20 h-20 rounded-full border border-white/10 bg-black flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-accent/50 transition-all duration-500 shadow-xl">
                {step.icon}
              </div>
              
              <h3 className="text-lg md:text-xl font-display uppercase tracking-wider font-semibold mb-4 text-white group-hover:text-accent transition-colors">
                {step.title}
              </h3>
              
              <p className="text-white/50 text-sm font-body leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

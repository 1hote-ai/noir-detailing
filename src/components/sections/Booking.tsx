import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const content = {
  EN: {
    eyebrow: 'Reserve Your Slot',
    title1: 'Book An ',
    title2: 'Appointment',
    desc: "Experience the pinnacle of automotive care. Fill out the form below and our team will contact you to discuss your vehicle's needs.",
    name: 'Full Name',
    email: 'Email Address',
    phone: 'Phone Number',
    service: 'Interested Service',
    vehicle: 'Vehicle Make & Model',
    submit: 'Submit Request',
    ph_vehicle: 'e.g. 2024 Porsche 911 GT3 RS',
    opt1: 'Paint Correction',
    opt2: 'Ceramic Coating',
    opt3: 'Paint Protection Film',
    opt4: 'Interior Detailing'
  },
  RU: {
    eyebrow: 'Бронь',
    title1: 'Запись на ',
    title2: 'Детейлинг',
    desc: 'Испытайте вершину автомобильного ухода. Заполните форму, и наша команда свяжется с вами.',
    name: 'Ваше Имя',
    email: 'Email адрес',
    phone: 'Номер телефона',
    service: 'Интересующая услуга',
    vehicle: 'Марка и модель авто',
    submit: 'Оставить заявку',
    ph_vehicle: 'напр. 2024 Porsche 911 GT3 RS',
    opt1: 'Коррекция ЛКП',
    opt2: 'Керамическое покрытие',
    opt3: 'Антигравийная пленка',
    opt4: 'Детейлинг интерьера'
  }
};

export const Booking = () => {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section className="bg-surface py-32 px-4 md:px-8 relative overflow-hidden" id="booking">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] mix-blend-screen"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <span className="text-accent uppercase tracking-[0.2em] text-[11px] font-semibold mb-6 block">
              {t.eyebrow}
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display uppercase leading-[1.05] tracking-tight mb-8">
              {t.title1} <br />
              <span className="text-ink/60">{t.title2}</span>
            </h2>
            <p className="text-ink/60 font-body text-base leading-relaxed max-w-md">
              {t.desc}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-bg/50 backdrop-blur-md border border-ink/10 p-8 md:p-12"
          >
            <form className="flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-ink/40 font-semibold">{t.name}</label>
                  <input type="text" className="bg-transparent border-b border-ink/20 py-3 text-sm focus:outline-none focus:border-accent transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-ink/40 font-semibold">{t.email}</label>
                  <input type="email" className="bg-transparent border-b border-ink/20 py-3 text-sm focus:outline-none focus:border-accent transition-colors" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-ink/40 font-semibold">{t.phone}</label>
                  <input type="tel" className="bg-transparent border-b border-ink/20 py-3 text-sm focus:outline-none focus:border-accent transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-ink/40 font-semibold">{t.service}</label>
                  <select className="bg-transparent border-b border-ink/20 py-3 text-sm focus:outline-none focus:border-accent transition-colors appearance-none">
                    <option value="" className="bg-bg text-ink/50"></option>
                    <option value="paint-correction" className="bg-bg">{t.opt1}</option>
                    <option value="ceramic" className="bg-bg">{t.opt2}</option>
                    <option value="ppf" className="bg-bg">{t.opt3}</option>
                    <option value="interior" className="bg-bg">{t.opt4}</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-ink/40 font-semibold">{t.vehicle}</label>
                <input type="text" className="bg-transparent border-b border-ink/20 py-3 text-sm focus:outline-none focus:border-accent transition-colors" placeholder={t.ph_vehicle} />
              </div>

              <button type="button" className="mt-8 bg-accent text-bg py-5 text-xs font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors">
                {t.submit}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

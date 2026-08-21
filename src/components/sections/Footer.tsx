import { useLanguage } from '../../context/LanguageContext';

const content = {
  EN: {
    desc: 'Premium automotive detailing studio specializing in paint correction, ceramic coatings, and paint protection film.',
    services: 'Services',
    company: 'Company',
    social: 'Social',
    rights: '© 2024 Noir Detailing. All rights reserved.',
    s1: 'Paint Correction',
    s2: 'Ceramic Coating',
    s3: 'PPF Installation',
    s4: 'Interior Restoration',
    c1: 'About Us',
    c2: 'Our Process',
    c3: 'Portfolio',
    c4: 'Contact',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service'
  },
  RU: {
    desc: 'Премиальная студия детейлинга, специализирующаяся на коррекции краски, керамике и антигравийных пленках.',
    services: 'Услуги',
    company: 'Компания',
    social: 'Соцсети',
    rights: '© 2024 Noir Detailing. Все права защищены.',
    s1: 'Коррекция ЛКП',
    s2: 'Керамическое покрытие',
    s3: 'Антигравийная пленка',
    s4: 'Реставрация салона',
    c1: 'О нас',
    c2: 'Наш процесс',
    c3: 'Портфолио',
    c4: 'Контакты',
    privacy: 'Политика конфиденциальности',
    terms: 'Условия использования'
  }
};

export const Footer = () => {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <footer className="bg-bg py-16 px-4 md:px-8 border-t border-ink/10">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex flex-col tracking-[0.2em] leading-tight font-display font-medium text-xl uppercase mb-6">
              <span>Noir</span>
              <span className="text-[0.55em] text-ink/70">Detailing</span>
            </div>
            <p className="text-ink/50 text-sm leading-relaxed max-w-xs font-body">
              {t.desc}
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-6">{t.services}</h4>
            <ul className="flex flex-col gap-4 text-sm text-ink/60 font-body">
              <li><a href="#" className="hover:text-accent transition-colors">{t.s1}</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">{t.s2}</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">{t.s3}</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">{t.s4}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-6">{t.company}</h4>
            <ul className="flex flex-col gap-4 text-sm text-ink/60 font-body">
              <li><a href="#" className="hover:text-accent transition-colors">{t.c1}</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">{t.c2}</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">{t.c3}</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">{t.c4}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-6">{t.social}</h4>
            <ul className="flex flex-col gap-4 text-sm text-ink/60 font-body">
              <li><a href="#" className="hover:text-accent transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">YouTube</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">TikTok</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-ink/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-ink/40 font-body">
          <p>{t.rights}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ink transition-colors">{t.privacy}</a>
            <a href="#" className="hover:text-ink transition-colors">{t.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

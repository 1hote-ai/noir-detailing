const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Footer.tsx', 'utf-8');

const contentObj = `
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
`;

content = content.replace(/const content = {[\s\S]*?};/, contentObj.trim());

content = content.replace('Paint Correction', '{t.s1}');
content = content.replace('Ceramic Coating', '{t.s2}');
content = content.replace('PPF Installation', '{t.s3}');
content = content.replace('Interior Restoration', '{t.s4}');

content = content.replace('>About Us<', '>{t.c1}<');
content = content.replace('>Our Process<', '>{t.c2}<');
content = content.replace('>Portfolio<', '>{t.c3}<');
content = content.replace('>Contact<', '>{t.c4}<');

content = content.replace('>Privacy Policy<', '>{t.privacy}<');
content = content.replace('>Terms of Service<', '>{t.terms}<');

fs.writeFileSync('src/components/sections/Footer.tsx', content);

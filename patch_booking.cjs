const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Booking.tsx', 'utf-8');

const contentObj = `
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
`;

content = content.replace(/const content = {[\s\S]*?};/, contentObj.trim());

content = content.replace('placeholder="e.g. 2024 Porsche 911 GT3 RS"', 'placeholder={t.ph_vehicle}');
content = content.replace('>Paint Correction<', '>{t.opt1}<');
content = content.replace('>Ceramic Coating<', '>{t.opt2}<');
content = content.replace('>Paint Protection Film<', '>{t.opt3}<');
content = content.replace('>Interior Detailing<', '>{t.opt4}<');

fs.writeFileSync('src/components/sections/Booking.tsx', content);

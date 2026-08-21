const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Gallery.tsx', 'utf-8');

// Replace array with function returning array
content = content.replace('const galleryItems = [', 'const getGalleryItems = (lang: string) => [\n');

// Replace usages
content = content.replace(/typeof galleryItems\[0\]/g, 'ReturnType<typeof getGalleryItems>[0]');
content = content.replace(/galleryItems\.map/g, 'getGalleryItems(lang).map');
content = content.replace(/galleryItems\.length/g, 'getGalleryItems(lang).length');
content = content.replace(/galleryItems\[selectedCaseIndex\]/g, 'getGalleryItems(lang)[selectedCaseIndex]');
content = content.replace(/galleryItems\[currentIndex\]/g, 'getGalleryItems(lang)[currentIndex]');
content = content.replace(/galleryItems\[index\]/g, 'getGalleryItems(lang)[index]');

// Now we need to translate the services and descriptions
const translations = {
  "Ceramic Protection": "Керамика",
  "Paint Correction": "Коррекция ЛКП",
  "Full Detail": "Полный детейлинг",
  "Deep Cleaning": "Глубокая очистка",
  "Nano Coating": "Нанокерамика",
  "Full Restoration": "Полное восстановление",
  "Ceramic Coating": "Керамическое покрытие",
  "Exterior Detailing": "Детейлинг экстерьера",
  "Interior Detailing": "Детейлинг интерьера",
  "Paint Protection": "Защита ЛКП",
  "Leather Treatment": "Уход за кожей",
  
  "Meticulous paint correction followed by our flagship ceramic coating to restore ultimate gloss, depth, and years of durable protection.": "Тщательная полировка кузова с последующим нанесением керамического состава для восстановления блеска и долговечной защиты.",
  "Comprehensive multi-stage polishing to eliminate swirl marks and imperfections, revealing a flawless, mirror-like finish.": "Комплексная многоэтапная полировка для устранения царапин и дефектов, обеспечивающая безупречный зеркальный блеск.",
  "A complete transformation inside and out, reviving the luxury interior and protecting the exterior against harsh environments.": "Полное преображение внутри и снаружи: восстановление роскошного интерьера и защита экстерьера от агрессивной среды.",
  "Intensive interior deep cleaning and premium leather treatment, restoring the cabin to a pristine, factory-fresh state.": "Интенсивная глубокая очистка салона и премиальный уход за кожей, возвращающие интерьеру идеальное заводское состояние.",
  "Advanced nano-ceramic application tailored for hypercars, ensuring extreme hydrophobic properties and a breathtaking shine.": "Передовое нанокерамическое покрытие, созданное для гиперкаров: экстремальные гидрофобные свойства и потрясающий блеск.",
  "An exhaustive restorative process designed to bring the aggressive lines and vibrant paintwork back to showroom perfection.": "Тщательный процесс восстановления, призванный вернуть агрессивным линиям и яркому цвету кузова идеальный выставочный вид."
};

for (const [en, ru] of Object.entries(translations)) {
  content = content.split(`"${en}"`).join(`lang === 'RU' ? "${ru}" : "${en}"`);
}

fs.writeFileSync('src/components/sections/Gallery.tsx', content);

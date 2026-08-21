const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Gallery.tsx', 'utf-8');

// Replace array with function
content = content.replace('const galleryItems = [', 'const getGalleryItems = (lang: string) => [');
content = content.replace('Ceramic Protection', '${lang === "RU" ? "Керамика" : "Ceramic Protection"}');
content = content.replace('Paint Correction', '${lang === "RU" ? "Коррекция ЛКП" : "Paint Correction"}');
content = content.replace('Paint Protection Film', '${lang === "RU" ? "Антигравийная пленка" : "Paint Protection Film"}');
content = content.replace('Full Restoration', '${lang === "RU" ? "Полное восстановление" : "Full Restoration"}');
content = content.replace('Exterior Detailing', '${lang === "RU" ? "Детейлинг экстерьера" : "Exterior Detailing"}');
content = content.replace('Meticulous paint correction followed by our flagship ceramic coating to restore ultimate gloss, depth, and years of durable protection.', '${lang === "RU" ? "Тщательная полировка кузова с последующим нанесением керамического состава." : "Meticulous paint correction followed by our flagship ceramic coating to restore ultimate gloss, depth, and years of durable protection."}');

// Replace usages
content = content.replace(/typeof galleryItems\[0\]/g, 'ReturnType<typeof getGalleryItems>[0]');
content = content.replace(/galleryItems\.map/g, 'getGalleryItems(lang).map');
content = content.replace(/galleryItems\.length/g, 'getGalleryItems(lang).length');
content = content.replace(/galleryItems\[selectedCaseIndex\]/g, 'getGalleryItems(lang)[selectedCaseIndex]');

// Replace hardcoded quotes with backticks inside the array
// It's a bit complex with regex, maybe I just replace all `service: "..."` with `service: lang === 'RU' ? ...`

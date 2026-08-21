const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Gallery.tsx', 'utf-8');
content = content.replace("const CaseModal = ({ \n  item, \n  onClose, \n  onNext, \n  onPrev \n}: { \n  item: typeof galleryItems[0]; \n  onClose: () => void; \n  onNext: () => void; \n  onPrev: () => void; \n}) => {", 
"const CaseModal = ({ \n  item, \n  onClose, \n  onNext, \n  onPrev \n}: { \n  item: typeof galleryItems[0]; \n  onClose: () => void; \n  onNext: () => void; \n  onPrev: () => void; \n}) => {\n  const { lang } = useLanguage();");
// Actually, let me just find `const CaseModal = ` block.

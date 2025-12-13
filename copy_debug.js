
import fs from 'fs';
import path from 'path';

const src = String.raw`C:\Users\HP\.gemini\antigravity\brain\f86a3a24-9e9b-4e04-a030-48f682f0ce69\uploaded_image_1765598351037.png`;
const dest = path.resolve('public/favicon.png');

console.log(`Source: ${src}`);
console.log(`Dest: ${dest}`);

if (!fs.existsSync(src)) {
    console.error('Source file does not exist!');
    process.exit(1);
}

try {
    const data = fs.readFileSync(src);
    fs.writeFileSync(dest, data);
    console.log(`File copied. Size: ${data.length}`);
} catch (error) {
    console.error('Copy failed:', error);
}

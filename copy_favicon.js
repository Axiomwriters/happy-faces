
import fs from 'fs';
import path from 'path';

const src = 'C:\\Users\\HP\\.gemini\\antigravity\\brain\\f86a3a24-9e9b-4e04-a030-48f682f0ce69\\uploaded_image_1765598351037.png';
const dest = 'c:\\Users\\HP\\.gemini\\antigravity\\scratch\\Happy-faces-refab\\public\\favicon.png';

try {
  fs.copyFileSync(src, dest);
  console.log('File copied successfully.');
} catch (err) {
  console.error('Error copying file:', err);
}

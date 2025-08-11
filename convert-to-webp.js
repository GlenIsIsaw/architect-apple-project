import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputFolder = path.join(process.cwd(), "src/assets");
const outputFolder = path.join(process.cwd(), "src/assets-webp");

// Make sure output folder exists
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder, { recursive: true });
}

fs.readdirSync(inputFolder).forEach(file => {
  const ext = path.extname(file).toLowerCase();
  const baseName = path.basename(file, ext);

  // Convert only JPG, JPEG, PNG
  if ([".jpg", ".jpeg", ".png"].includes(ext)) {
    const inputFile = path.join(inputFolder, file);
    const outputFile = path.join(outputFolder, baseName + ".webp");

    // Skip if .webp already exists
    if (fs.existsSync(outputFile)) {
      console.log(`⏩ Skipped (already exists): ${baseName}.webp`);
      return;
    }

    // Convert to webp
    sharp(inputFile)
      .webp({ quality: 80 })
      .toFile(outputFile)
      .then(() => console.log(`✅ Converted: ${file} → ${baseName}.webp`))
      .catch(err => console.error(`❌ Error converting ${file}:`, err));
  }
});

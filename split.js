const sharp = require('sharp');
const fs = require('fs');

async function splitImage() {
  try {
    const image = sharp('public/RBCC.png');
    const metadata = await image.metadata();
    const width = metadata.width / 4;
    const height = metadata.height;

    for (let i = 0; i < 4; i++) {
      await sharp('public/RBCC.png')
        .extract({ left: Math.round(i * width), top: 0, width: Math.round(width), height: height })
        .toFile(`public/RBCC_slide_${i + 1}.png`);
      console.log(`Created public/RBCC_slide_${i + 1}.png`);
    }
    console.log("Done splitting images.");
  } catch (err) {
    console.error(err);
  }
}

splitImage();

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// Lightweight PNG generator in pure Node.js
function generatePng(size, filename) {
  const width = size;
  const height = size;
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  function chunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const typeBuf = Buffer.from(type);
    const crcVal = zlib.crc32(Buffer.concat([typeBuf, data]));
    const crc = Buffer.alloc(4);
    crc.writeUInt32BE(crcVal, 0);
    return Buffer.concat([len, typeBuf, data, crc]);
  }

  // IHDR (RGBA)
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr.writeUInt8(8, 8); // 8-bit
  ihdr.writeUInt8(6, 9); // RGBA color type
  ihdr.writeUInt8(0, 10);
  ihdr.writeUInt8(0, 11);
  ihdr.writeUInt8(0, 12);
  const ihdrChunk = chunk('IHDR', ihdr);

  const rowSize = 1 + width * 4;
  const rawData = Buffer.alloc(height * rowSize);
  const cx = width / 2;
  const cy = height / 2;
  const maxR = width * 0.46;

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize;
    rawData[rowOffset] = 0; // Filter: None
    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4;
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Corner rounding
      const cornerR = width * 0.22;
      const inBoxX = Math.abs(dx) <= cx - cornerR;
      const inBoxY = Math.abs(dy) <= cy - cornerR;
      let inCard = false;
      if (inBoxX || inBoxY) {
        inCard = Math.abs(dx) <= cx && Math.abs(dy) <= cy;
      } else {
        const cdx = Math.abs(dx) - (cx - cornerR);
        const cdy = Math.abs(dy) - (cy - cornerR);
        inCard = (cdx * cdx + cdy * cdy) <= cornerR * cornerR;
      }

      if (!inCard) {
        // Transparent
        rawData[pxOffset] = 0;
        rawData[pxOffset + 1] = 0;
        rawData[pxOffset + 2] = 0;
        rawData[pxOffset + 3] = 0;
        continue;
      }

      // Inside app icon card - Dark polar navy background with radial lighting
      let r = 4, g = 13, b = 26, a = 255;
      const radial = dist / maxR;
      if (radial < 1.0) {
        r = Math.round(7 + (1 - radial) * 15);
        g = Math.round(20 + (1 - radial) * 35);
        b = Math.round(45 + (1 - radial) * 55);
      }

      // Compass Ring
      const ringOuter = width * 0.38;
      const ringInner = width * 0.36;
      if (dist >= ringInner && dist <= ringOuter) {
        r = 56; g = 189; b = 248; // Cyan 400
      }

      // 4 Compass Star Points
      const absDx = Math.abs(dx);
      const absDy = Math.abs(dy);
      const starLen = width * 0.34;
      const starThick = width * 0.05;

      // North point (Pointing up)
      if (dy < 0 && dy > -starLen && absDx < starThick * (1 - absDy / starLen)) {
        if (dx >= 0) {
          r = 255; g = 255; b = 255; // White/Ice
        } else {
          r = 56; g = 189; b = 248; // Cyan
        }
      }
      // South point (Pointing down)
      else if (dy > 0 && dy < starLen && absDx < starThick * (1 - absDy / starLen)) {
        r = 2; g = 132; b = 199;
      }
      // East point
      else if (dx > 0 && dx < starLen && absDy < starThick * (1 - absDx / starLen)) {
        r = 125; g = 211; b = 252;
      }
      // West point
      else if (dx < 0 && dx > -starLen && absDy < starThick * (1 - absDx / starLen)) {
        r = 3; g = 105; b = 161;
      }

      // Center Core
      if (dist < width * 0.08) {
        r = 8; g = 47; b = 73;
        if (dist < width * 0.04) {
          r = 255; g = 255; b = 255;
        }
        if (dist < width * 0.018) {
          r = 56; g = 189; b = 248;
        }
      }

      // Amber polaris star dot at top
      const dotDy = dy - (-width * 0.31);
      if (dx * dx + dotDy * dotDy <= (width * 0.02) * (width * 0.02)) {
        r = 245; g = 158; b = 11; // Amber
      }

      rawData[pxOffset] = r;
      rawData[pxOffset + 1] = g;
      rawData[pxOffset + 2] = b;
      rawData[pxOffset + 3] = a;
    }
  }

  const compressed = zlib.deflateSync(rawData);
  const idatChunk = chunk('IDAT', compressed);
  const iendChunk = chunk('IEND', Buffer.alloc(0));
  const fullPng = Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);

  fs.writeFileSync(filename, fullPng);
  console.log(`Generated: ${filename} (${width}x${height}, ${fullPng.length} bytes)`);
}

const outDir = path.join(__dirname, '..', 'public', 'icons');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

generatePng(192, path.join(outDir, 'icon-192x192.png'));
generatePng(512, path.join(outDir, 'icon-512x512.png'));
generatePng(180, path.join(outDir, 'apple-touch-icon.png'));
console.log('All icons generated successfully!');

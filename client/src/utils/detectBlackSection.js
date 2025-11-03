// src/utils/detectBlackSection.js
// Detects the bounding box of BLACK pixels (opening) in a rendered SVG frame
// Renders at target display size to match object-contain, returns pixel values.

export const detectBlackSection = (imgUrl, targetWidth, targetHeight) => {
  return new Promise((resolve) => {
    if (targetWidth <= 0 || targetHeight <= 0) {
      resolve(null);
      return;
    }

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imgUrl;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = targetWidth;
      canvas.height = targetHeight;

      // Replicate object-contain: scale to fit, center
      const scaleX = targetWidth / img.naturalWidth;
      const scaleY = targetHeight / img.naturalHeight;
      const scale = Math.min(scaleX, scaleY);
      const destW = img.naturalWidth * scale;
      const destH = img.naturalHeight * scale;
      const dx = (targetWidth - destW) / 2;
      const dy = (targetHeight - destH) / 2;

      ctx.drawImage(img, dx, dy, destW, destH);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

      let minX = canvas.width, minY = canvas.height, maxX = 0, maxY = 0;
      let blackCount = 0;

      for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
          const idx = (y * canvas.width + x) * 4;
          const r = imageData[idx];
          const g = imageData[idx + 1];
          const b = imageData[idx + 2];
          const a = imageData[idx + 3];

          // Detect near-black opaque pixels (your original logic)
          if (a > 10 && r < 40 && g < 40 && b < 40) {
            blackCount++;
            minX = Math.min(minX, x);
            minY = Math.min(minY, y);
            maxX = Math.max(maxX, x);
            maxY = Math.max(maxY, y);
          }
        }
      }

      // Validate: require significant black area (tune if your rect is small)
      if (blackCount < 100 || maxX <= minX || maxY <= minY) {
        resolve(null);
        return;
      }

      resolve({
        leftPx: minX ,
        topPx: minY ,
        widthPx: maxX - minX - 1,  // +1 for inclusive bounds
        heightPx: maxY - minY - 1,
      });
    };

    img.onerror = () => resolve(null);
  });
};
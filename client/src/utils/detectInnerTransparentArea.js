// utils/detectInnerTransparentArea.js
export async function detectTransparentArea(svgUrl, targetW, targetH) {
  try {
    // Load SVG as an image
    const img = await new Promise((resolve, reject) => {
      const image = new Image();
      image.crossOrigin = "anonymous";
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = svgUrl;
    });

    // Draw SVG to canvas at target size
    const canvas = document.createElement("canvas");
    canvas.width = targetW;
    canvas.height = targetH;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, targetW, targetH);

    // Get pixel data
    const imageData = ctx.getImageData(0, 0, targetW, targetH).data;

    // Detect transparent region bounds
    let top = targetH, left = targetW, bottom = 0, right = 0;
    let found = false;

    for (let y = 0; y < targetH; y++) {
      for (let x = 0; x < targetW; x++) {
        const alpha = imageData[(y * targetW + x) * 4 + 3];
        if (alpha < 10) { // transparent
          top = Math.min(top, y);
          left = Math.min(left, x);
          bottom = Math.max(bottom, y);
          right = Math.max(right, x);
          found = true;
        }
      }
    }

    if (!found) return null;

    return {
      leftPx: left,
      topPx: top,
      widthPx: right - left,
      heightPx: bottom - top,
    };
  } catch (e) {
    console.error("detectTransparentArea error:", e);
    return null;
  }
}

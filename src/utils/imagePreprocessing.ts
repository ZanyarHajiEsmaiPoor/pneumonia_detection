export const preprocessImage = async (imageFile: File): Promise<Float32Array> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      reject(new Error('Could not get canvas context'));
      return;
    }

    img.onload = () => {
      canvas.width = 224;
      canvas.height = 224;

      ctx.drawImage(img, 0, 0, 224, 224);

      const imageData = ctx.getImageData(0, 0, 224, 224);
      const { data } = imageData;

      const float32Data = new Float32Array(3 * 224 * 224);

      const mean = [0.485, 0.456, 0.406];
      const std = [0.229, 0.224, 0.225];

      for (let i = 0; i < 224 * 224; i++) {
        const r = data[i * 4] / 255.0;
        const g = data[i * 4 + 1] / 255.0;
        const b = data[i * 4 + 2] / 255.0;

        float32Data[i] = (r - mean[0]) / std[0];
        float32Data[224 * 224 + i] = (g - mean[1]) / std[1];
        float32Data[2 * 224 * 224 + i] = (b - mean[2]) / std[2];
      }

      resolve(float32Data);
    };

    img.onerror = () => {
      reject(new Error('Failed to load image'));
    };

    img.src = URL.createObjectURL(imageFile);
  });
};

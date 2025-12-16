# Pneumonia Detection Setup Instructions

## Model File Setup

Before using the application, you need to place your ONNX model file in the correct location:

1. Place your `pneumonia_model.onnx` file in the `public` folder at the root of the project
2. The file path should be: `public/pneumonia_model.onnx`

## Project Structure

```
project-root/
├── public/
│   └── pneumonia_model.onnx  <- Place your model here
├── src/
│   ├── components/
│   │   ├── ImageUpload.tsx
│   │   └── ResultsDisplay.tsx
│   ├── services/
│   │   └── onnxInference.ts
│   ├── utils/
│   │   └── imagePreprocessing.ts
│   └── App.tsx
└── ...
```

## How It Works

1. **Image Upload**: Drag and drop or click to upload a chest X-ray image
2. **Preprocessing**: The image is automatically resized to 224x224 and normalized using ImageNet statistics:
   - Mean: [0.485, 0.456, 0.406]
   - Standard Deviation: [0.229, 0.224, 0.225]
3. **Inference**: ONNX Runtime Web runs the model in the browser
4. **Results**: Displays whether the X-ray shows signs of pneumonia with a confidence percentage

## Model Requirements

Your ONNX model should:
- Accept input shape: [1, 3, 224, 224] (batch, channels, height, width)
- Output 2 classes: [Normal, Pneumonia]
- Use float32 data type

## Important Notes

- The model runs entirely in the browser
- No data is sent to any server
- First load may take a moment to initialize the model
- This is for educational purposes only and should not replace professional medical diagnosis

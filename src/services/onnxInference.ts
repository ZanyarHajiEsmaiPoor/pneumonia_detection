import * as ort from 'onnxruntime-web';

// Configure WASM paths for ONNX Runtime
ort.env.wasm.wasmPaths = import.meta.env.BASE_URL;

let session: ort.InferenceSession | null = null;

export const loadModel = async () => {
  if (session) return session;

  try {
    // Use BASE_URL - automatically handles both dev and production
    const modelPath = `${import.meta.env.BASE_URL}pneumonia_model.onnx`;
    
    console.log('Loading model from:', modelPath);
    
    session = await ort.InferenceSession.create(modelPath, {
      executionProviders: ['wasm'],
    });
    
    console.log('✓ Model loaded successfully!');
    console.log('Input names:', session.inputNames);
    console.log('Output names:', session.outputNames);
    
    return session;
  } catch (error) {
    console.error('Failed to load ONNX model:', error);
    throw new Error('Failed to load the pneumonia detection model. Please ensure pneumonia_model.onnx is in the public folder.');
  }
};

export const runInference = async (preprocessedData: Float32Array): Promise<{ label: string; confidence: number }> => {
  if (!session) {
    await loadModel();
  }

  if (!session) {
    throw new Error('Model not loaded');
  }

  const tensor = new ort.Tensor('float32', preprocessedData, [1, 3, 224, 224]);

  const feeds: Record<string, ort.Tensor> = {};
  feeds[session.inputNames[0]] = tensor;

  console.log('Running inference...');
  const results = await session.run(feeds);
  const output = results[session.outputNames[0]];

  const outputData = output.data as Float32Array;
  console.log('Raw model output:', outputData);

  // Apply softmax to get probabilities
  const probabilities = softmax(Array.from(outputData));
  console.log('Probabilities after softmax:', probabilities);

  // Assuming class 0 is Normal, class 1 is Pneumonia
  const pneumoniaIndex = probabilities[1] > probabilities[0] ? 1 : 0;
  const finalConfidence = probabilities[pneumoniaIndex];

  return {
    label: pneumoniaIndex === 1 ? 'Pneumonia' : 'Normal',
    confidence: finalConfidence * 100
  };
};

const softmax = (arr: number[]): number[] => {
  const max = Math.max(...arr);
  const exps = arr.map(x => Math.exp(x - max));
  const sumExps = exps.reduce((a, b) => a + b, 0);
  return exps.map(exp => exp / sumExps);
};

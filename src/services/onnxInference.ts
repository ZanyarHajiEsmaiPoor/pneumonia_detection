import * as ort from 'onnxruntime-web';

let session: ort.InferenceSession | null = null;

export const loadModel = async () => {
  if (session) return session;

  try {
    session = await ort.InferenceSession.create('/pneumonia_model.onnx');
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

  const results = await session.run(feeds);
  const output = results[session.outputNames[0]];

  const outputData = output.data as Float32Array;

  const pneumoniaIndex = outputData[1] > outputData[0] ? 1 : 0;
  const confidence = pneumoniaIndex === 1 ? outputData[1] : outputData[0];

  const probabilities = softmax(Array.from(outputData));
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

import { useState } from 'react';
import { Activity, Loader2 } from 'lucide-react';
import { ImageUpload } from './components/ImageUpload';
import { ResultsDisplay } from './components/ResultsDisplay';
import { preprocessImage } from './utils/imagePreprocessing';
import { loadModel, runInference } from './services/onnxInference';

interface PredictionResult {
  label: string;
  confidence: number;
}

function App() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [modelLoaded, setModelLoaded] = useState(false);

  const handleImageSelect = async (file: File) => {
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
    setResult(null);
    setError(null);

    if (!modelLoaded) {
      try {
        await loadModel();
        setModelLoaded(true);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load model');
        return;
      }
    }
  };

  const handleClear = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setSelectedFile(null);
    setPreviewUrl(null);
    setResult(null);
    setError(null);
  };

  const handleAnalyze = async () => {
    if (!selectedFile) return;

    setIsProcessing(true);
    setError(null);

    try {
      const preprocessedData = await preprocessImage(selectedFile);
      const prediction = await runInference(preprocessedData);
      setResult(prediction);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to analyze image');
      console.error('Analysis error:', err);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Activity size={40} className="text-blue-600" />
              <h1 className="text-4xl font-bold text-gray-800">
                Pneumonia Detection
              </h1>
            </div>
            <p className="text-gray-600 text-lg">
              Upload a chest X-ray image to detect pneumonia using AI
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
            <ImageUpload
              onImageSelect={handleImageSelect}
              previewUrl={previewUrl}
              onClear={handleClear}
            />

            {previewUrl && !result && (
              <div className="mt-6">
                <button
                  onClick={handleAnalyze}
                  disabled={isProcessing}
                  className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    'Analyze X-ray'
                  )}
                </button>
              </div>
            )}

            {error && (
              <div className="mt-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                <p className="text-red-700 font-medium">{error}</p>
              </div>
            )}
          </div>

          {result && (
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Analysis Results
              </h2>
              <ResultsDisplay label={result.label} confidence={result.confidence} />
              <button
                onClick={handleClear}
                className="w-full mt-6 py-3 px-6 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
              >
                Analyze Another Image
              </button>
            </div>
          )}

          <div className="mt-8 bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800 font-medium">
              <strong>Important:</strong> This tool is for educational purposes only.
              Always consult qualified healthcare professionals for medical diagnosis and treatment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import { AlertCircle, CheckCircle } from 'lucide-react';

interface ResultsDisplayProps {
  label: string;
  confidence: number;
}

export const ResultsDisplay = ({ label, confidence }: ResultsDisplayProps) => {
  const isPneumonia = label === 'Pneumonia';

  return (
    <div className={`p-6 rounded-lg border-2 ${
      isPneumonia ? 'bg-red-50 border-red-200' : 'bg-green-50 border-green-200'
    }`}>
      <div className="flex items-center gap-3 mb-4">
        {isPneumonia ? (
          <AlertCircle size={32} className="text-red-600" />
        ) : (
          <CheckCircle size={32} className="text-green-600" />
        )}
        <h3 className={`text-2xl font-bold ${
          isPneumonia ? 'text-red-700' : 'text-green-700'
        }`}>
          {label}
        </h3>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-gray-700 font-medium">Confidence:</span>
          <span className={`text-xl font-bold ${
            isPneumonia ? 'text-red-700' : 'text-green-700'
          }`}>
            {confidence.toFixed(2)}%
          </span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              isPneumonia ? 'bg-red-600' : 'bg-green-600'
            }`}
            style={{ width: `${confidence}%` }}
          />
        </div>
      </div>

      <p className="mt-4 text-sm text-gray-600">
        {isPneumonia
          ? 'This X-ray shows signs consistent with pneumonia. Please consult a healthcare professional for proper diagnosis.'
          : 'This X-ray appears normal. However, always consult with a healthcare professional for accurate diagnosis.'}
      </p>
    </div>
  );
};

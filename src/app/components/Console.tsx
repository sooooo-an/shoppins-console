interface ConsoleProps {
  onBackToLanding: () => void;
}

export function Console({ onBackToLanding }: ConsoleProps) {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={onBackToLanding}
          className="mb-8 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
        >
          ← Back to Landing
        </button>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-4">Console</h1>
          <p className="text-gray-600">Console content goes here...</p>
        </div>
      </div>
    </div>
  );
}


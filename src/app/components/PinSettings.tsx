import { Palette, Maximize2, MousePointer } from "lucide-react";

interface PinSettingsProps {
  settings: {
    color: string;
    size: "small" | "medium" | "large";
    activeMode: "click" | "hover";
  };
  onChange: (settings: any) => void;
}

const colorOptions = [
  { value: "#f472b6", label: "핑크", bg: "bg-pink-400" },
  { value: "#0d9488", label: "틸", bg: "bg-teal-600" },
  { value: "#9333ea", label: "퍼플", bg: "bg-purple-600" },
  { value: "#f59e0b", label: "오렌지", bg: "bg-amber-500" },
  { value: "#ef4444", label: "레드", bg: "bg-red-500" },
  { value: "#3b82f6", label: "블루", bg: "bg-blue-500" },
];

export function PinSettings({ settings, onChange }: PinSettingsProps) {
  return (
    <div className="bg-white rounded-2xl p-4 border border-gray-200">
      <h3 className="text-gray-900 mb-4 flex items-center gap-2">
        <Palette className="w-4 h-4" />
        전역 핀 스타일
      </h3>

      <div className="grid md:grid-cols-3 gap-4">
        {/* Color */}
        <div>
          <label className="block text-sm text-gray-700 mb-2">핀 색상</label>
          <div className="flex flex-wrap gap-2">
            {colorOptions.map((color) => (
              <button
                key={color.value}
                onClick={() => onChange({ ...settings, color: color.value })}
                className={`w-8 h-8 rounded-full ${color.bg} transition-all ${
                  settings.color === color.value
                    ? "ring-2 ring-offset-2 ring-gray-900 scale-110"
                    : "hover:scale-105"
                }`}
                title={color.label}
              />
            ))}
          </div>
        </div>

        {/* Size */}
        <div>
          <label className="block text-sm text-gray-700 mb-2">핀 크기</label>
          <div className="flex gap-2">
            {(["small", "medium", "large"] as const).map((size) => (
              <button
                key={size}
                onClick={() => onChange({ ...settings, size })}
                className={`flex-1 py-2 px-3 rounded-lg text-sm transition-colors ${
                  settings.size === size
                    ? "bg-teal-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {size === "small"
                  ? "작게"
                  : size === "medium"
                  ? "보통"
                  : "크게"}
              </button>
            ))}
          </div>
        </div>

        {/* Active Mode */}
        <div>
          <label className="block text-sm text-gray-700 mb-2">
            활성화 방식
          </label>
          <div className="flex gap-2">
            {(["click", "hover"] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => onChange({ ...settings, activeMode: mode })}
                className={`flex-1 py-2 px-3 rounded-lg text-sm transition-colors ${
                  settings.activeMode === mode
                    ? "bg-teal-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {mode === "click" ? "클릭" : "호버"}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

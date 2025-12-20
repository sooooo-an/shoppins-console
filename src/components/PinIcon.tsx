import { Pin } from "lucide-react";

const PinIcon = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-pink-400 rounded-full animate-ping opacity-75" />

      <div className="relative bg-pink-400 p-2.5 rounded-full shadow-lg">
        <Pin className="w-5 h-5 text-white" fill="currentColor" />
      </div>
    </div>
  );
};

export default PinIcon;

import { Pin } from "lucide-react";

const Logo = () => {
  return (
    <h1 className="text-white text-2xl font-bold flex items-center gap-2">
      <div className="bg-pink-400 p-2 rounded-xl">
        <Pin className="w-6 h-6 text-white" fill="currentColor" />
      </div>
      Shoppins
    </h1>
  );
};

export default Logo;

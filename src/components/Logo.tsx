import { Pin } from "lucide-react";

type Props = {
  size?: "small" | "medium" | "large";
  color?: "white" | "black";
};

const COLOR_CLASS = {
  white: "text-white",
  black: "text-black",
};

const SIZE_CLASS = {
  small: "text-base",
  medium: "text-xl",
  large: "text-2xl",
};

const SIZE_LOGO_CLASS = {
  small: "w-4 h-4",
  medium: "w-6 h-6",
  large: "w-8 h-8",
};

const Logo = ({ size = "medium", color = "white" }: Props) => {
  return (
    <h1
      className={`${COLOR_CLASS[color]} ${SIZE_CLASS[size]} font-bold flex items-center gap-2`}
    >
      <div className="bg-pink-400 p-2 rounded-xl">
        <Pin
          className={`${SIZE_LOGO_CLASS[size]} text-white`}
          fill="currentColor"
        />
      </div>
      Shoppins
    </h1>
  );
};

export default Logo;

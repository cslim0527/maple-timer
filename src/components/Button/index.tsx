import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<Element> {
  color: "blue" | "gray" | "lime";
}

const Button = ({ color, ...props }: ButtonProps) => {
  if (color === "blue") {
    return (
      <button
        className="w-full ext-sm bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        {...props}
      ></button>
    );
  }

  if (color === "gray") {
    return (
      <button
        className="w-full ext-sm bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded"
        {...props}
      ></button>
    );
  }

  if (color === "lime")
    return (
      <button
        className="w-full ext-sm bg-lime-500 hover:bg-lime-400 text-white font-bold py-2 px-4 border-b-4 border-lime-700 hover:border-lime-500 rounded"
        {...props}
      ></button>
    );
};

export default Button;

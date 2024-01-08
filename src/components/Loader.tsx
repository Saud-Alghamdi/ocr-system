import { LoaderProps } from "../types/types";

export default function Loader({ text }: LoaderProps) {
  const loaderClasses = "w-16 h-16 mb-4 ease-linear rounded-full loader"; // Added 'loader' class here

  return (
    <div className="flex items-center justify-center mt-4">
      <div className={`${loaderClasses} border-8 border-t-8 border-gray-200 border-t-blue-600`}></div> {/* Adjusted border colors */}
      <div className="mx-2 text-center text-gray-700">{text}</div>
    </div>
  );
}

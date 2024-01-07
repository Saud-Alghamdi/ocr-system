import { Link } from "react-router-dom";
import OcrMockVideo from "../components/OcrMockVideo";
import LargeButton from "../components/LargeButton";

export default function HomePage() {
  return (
    <section className="h-screen bg-slate-300">
      {/* Flex Container */}
      <div className="flex flex-col items-center justify-center h-full max-w-screen-xl gap-16 px-4 py-8 mx-auto lg:flex-row lg:py-16">
        {/* Flex Child 1 */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">Transform Your Text Handling with Our OCR Technology</h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Experience lightning-fast text recognition and document conversion with our cutting-edge OCR system. Transform printed or handwritten text into editable digital content effortlessly.
          </p>
          <Link to="/ocr">
            <LargeButton text="Try it Now!" />
          </Link>
        </div>
        {/* Flex Child 2 */}
        <div className="max-w-xl w-fit h-fit lg:w-1/2 lg:mt-0">
          <OcrMockVideo />
        </div>
      </div>
    </section>
  );
}

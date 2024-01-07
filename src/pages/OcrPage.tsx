import { useRef, ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOcr } from "../hooks/useOcr";
import { Link } from "react-router-dom";
import LargeButton from "../components/LargeButton";
import Loader from "../components/Loader";

export default function OcrPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { processFile, isLoading } = useOcr(navigate);
  const [error, setError] = useState<string | null>(null);

  // Checks file extension, and reset error on new upload attempt
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const supportedFormats = [".jpg", ".png", ".jpeg"];
      const fileExtension = file.name.toLowerCase().split(".").pop();

      if (!supportedFormats.includes(`.${fileExtension}`)) {
        setError("Unsupported file format. Please upload a .jpg, .png, or .jpeg file.");
        return;
      }

      setError(null);
      processFile(file);
    }
  };

  return (
    <section className="relative flex items-center justify-center h-screen p-4 bg-slate-300 md:p-10">
      {/* Back to Home Button */}
      <Link
        to="/"
        className="absolute text-blue-700 top-4 left-4 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500"
      >
        Back to Home
      </Link>

      {/* Flex */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Flex Child 1 */}
        <div className="text-center">
          <h1 className="max-w-3xl mb-4 text-3xl font-semibold leading-none tracking-tight md:text-4xl lg:text-5xl xl:text-6xl dark:text-white">Ready to Simplify Your Life?</h1>
          <p className="max-w-2xl mb-6 text-lg text-gray-600 dark:text-gray-400 md:text-xl lg:text-2xl">
            Experience the magic of instant text recognition! Whether it's an ID, passport, or an invoice, our OCR technology turns your documents into editable digital files in a snap. Say goodbye to manual typing and hello to efficiency!
          </p>
        </div>
        {/* Flex Child 2 */}
        <div>
          <LargeButton
            text="Upload Document"
            additionalTwStyles="block mx-auto"
            onClick={() => fileInputRef.current?.click()}
          />

          {/* Hidden File Input to grab file */}
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            accept=".jpg, .png, .jpeg"
            onChange={handleFileChange}
            disabled={isLoading}
          />

          {/* Error msg */}
          {error && <p className="mt-4 text-red-600">{error}</p>}

          {/* Loader */}
          {isLoading && <Loader text="Processing..." />}

          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 md:text-base lg:text-lg">Supported formats: .jpg, .png, .jpeg</p>
        </div>
      </div>
    </section>
  );
}

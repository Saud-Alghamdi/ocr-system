import { useLocation, useNavigate, Link } from "react-router-dom";
import LargeButton from "../components/LargeButton";
import { LocationState } from "../types/types";

export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { extractedText } = (location.state as LocationState) || {};

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-4 bg-slate-300">
      {/* Back to Home Button */}
      <Link
        to="/"
        className="absolute text-blue-700 top-4 left-4 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500"
      >
        Back to Home
      </Link>

      <div className="w-full max-w-3xl p-5 bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-2xl font-semibold text-gray-800">Extracted Text</h1>
        <div className="p-4 rounded-lg bg-gray-50">
          <p className="text-sm text-gray-700 whitespace-pre-wrap md:text-base">{extractedText || "No text extracted"}</p>
        </div>
        <LargeButton
          text="Try Again"
          onClick={handleGoBack}
        />
      </div>
    </section>
  );
}

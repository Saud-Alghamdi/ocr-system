import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OcrPage from "./pages/OcrPage";
import ResultPage from "./pages/ResultPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/ocr"
          element={<OcrPage />}
        />
        <Route
          path="/result"
          element={<ResultPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

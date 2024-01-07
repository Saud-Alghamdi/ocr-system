import { useState } from "react";
import { createWorker } from "tesseract.js";
import { NavigateFunction } from "react-router-dom";

export function useOcr(navigate: NavigateFunction) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const processFile = async (file: File) => {
    setIsLoading(true);
    const worker = await createWorker("eng");
    try {
      const {
        data: { text },
      } = await worker.recognize(file);
      navigate("/result", { state: { extractedText: text } });
    } catch (error) {
      console.error("OCR processing failed", error);
    } finally {
      await worker.terminate();
      setIsLoading(false);
    }
  };

  return { processFile, isLoading };
}

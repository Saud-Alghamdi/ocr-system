import { useState } from "react";
import { createWorker } from "tesseract.js";
import { NavigateFunction } from "react-router-dom";

export function useOcr(navigate: NavigateFunction) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const processFile = async (file: File) => {
    setIsLoading(true);

    // Initialize workers for English and Arabic
    const engWorker = await createWorker("eng");
    const araWorker = await createWorker("ara");

    try {
      // Process the file with both workers
      const [engResult, araResult] = await Promise.all([engWorker.recognize(file), araWorker.recognize(file)]);

      // Determine which result to use based on confidence or other metrics
      let finalText;
      if (engResult.data.confidence > araResult.data.confidence) {
        finalText = engResult.data.text;
      } else {
        finalText = araResult.data.text;
      }

      navigate("/result", { state: { extractedText: finalText } });
    } catch (error) {
      console.error("OCR processing failed", error);
    } finally {
      await Promise.all([engWorker.terminate(), araWorker.terminate()]);
      setIsLoading(false);
    }
  };

  return { processFile, isLoading };
}

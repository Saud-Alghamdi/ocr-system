import ocrMockVideoSource from "../assets/ocr-mock.mp4";

export default function OcrMockVideo() {
  return (
    <video
      autoPlay
      muted
      loop
    >
      <source
        src={ocrMockVideoSource}
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
}

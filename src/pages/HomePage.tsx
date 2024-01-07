import ocrMockVideo from "../assets/ocr-mock.mp4";

export default function HomePage() {
  return (
    <section className="h-screen bg-slate-300">
      {/* Grid Container */}
      <div className="grid items-center justify-center h-full max-w-screen-xl px-4 py-8 mx-auto lg:gap-0 lg:py-16 lg:grid-cols-12">
        {/* Grid Child 1 */}
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">Transform Your Text Handling with Our OCR Technology</h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Experience lightning-fast text recognition and document conversion with our cutting-edge OCR system. Transform printed or handwritten text into editable digital content effortlessly.
          </p>
          <a
            href="#"
            className="px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Try it Now!
          </a>
        </div>
        {/* Grid Child 2 */}
        <div className="w-fit h-fit lg:mt-0 lg:col-span-5 lg:flex">
          <video
            autoPlay
            muted
            loop
          >
            <source
              src={ocrMockVideo}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}

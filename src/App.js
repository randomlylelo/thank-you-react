export default function App() {
  return (
    // Container
    <div className="xl:bg-grayPc">
      {/* Skip, DESKTOP ONLY */}
      <div className="xl:h-13 xl:w-full" />
      {/* Title Bar */}
      <div className="bg-graySmall xl:bg-grayPc p-2.5">
        <a
          href="/"
          className="text-white block font-bold text-center no-underline text-xs"
        >
          California Institute of Technology
        </a>
      </div>

      {/* Content aka middle white part */}
    </div>
  );
}

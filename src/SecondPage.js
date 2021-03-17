import React from "react";
import ConfettiGenerator from "confetti-js";

export default function SecondPage() {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  // update state on resize so that the confetti always covers the whole screen
  React.useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }
    
    window.addEventListener('resize', handleResize);
    
    return _ => { window.removeEventListener('resize', handleResize) };
  });

  React.useEffect(() => {
    const confettiSettings = {target: 'canvas', colors: [[255,255,255], [255,108,12]]};
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  }, [])

  const canvasStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    width: dimensions.width,
    height: dimensions.height
  };

  return (
    <div className="p-40 mx-auto max-w-lh bg-blue-200">
      <canvas id="canvas" style={canvasStyle}></canvas>
      <img
        src="https://i.pinimg.com/originals/e7/43/27/e7432700100cf0f778bfbaf364947b91.png"
        alt=""
      />
    </div>
  );
}

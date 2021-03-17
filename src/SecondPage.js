import React from "react";
import confetti from "./confetti.js";

export default function SecondPage() {
  React.useEffect(() => {
      confetti({ colors: [ [ '#fe8c00', '#ffffff' ], [ '#fe8c00', '#ffffff' ] ], timeout: 25 });
  }, []);
  return (
    <div className="p-40 mx-auto max-w-lh bg-blue-200">
      <img
        src="https://i.pinimg.com/originals/e7/43/27/e7432700100cf0f778bfbaf364947b91.png"
        alt=""
      />
    </div>
  );
}

import React from "react";
<<<<<<< HEAD
import {TopBar, BottomBar} from "../src/layout";
=======
import confetti from "./confetti.js";
>>>>>>> d8dcd523f86cb1eef0a795ad04349aa7f5f20d5b

export default function SecondPage() {
  React.useEffect(() => {
      confetti({ colors: [ [ '#fe8c00', '#ffffff' ], [ '#fe8c00', '#ffffff' ] ], timeout: 25 });
  }, []);
  return (
    <div className="xl:w-1000 xl:block xl:m-auto xl:bg-grayPc xl:h-screen">
      {/* Skip, DESKTOP ONLY */}
      <div className="xl:h-12 xl:w-full" />
      <TopBar/>
      <div className="flex items-center justify-center">
      <img
          src="https://i.pinimg.com/originals/e7/43/27/e7432700100cf0f778bfbaf364947b91.png"
          alt=""
          className="w-56 h-auto"
        />
      </div>
        
      <BottomBar name="California Institute of Technology" address="1200 E California Blvd, Pasadena CA 91125"/>
    </div>
  );
}

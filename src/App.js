// import { useEffect, useState } from "react";
import React from "react";
import Main from "./main";

export default function App() {
  /* Ignore
  const greetings = [
    {id:1, title:"Thankyou"},
    {id:2, title:"For"},
    {id:3, title:"All Of Your Hard Work"}
  ];

  const [index, setIndexVal] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setIndexVal((prevIndex) => {
        if(prevIndex === 2) {
          return 0;
        } else {
          return prevIndex += 1;
        }
      })

    
    }, 3000);
  }, []);
  */

  //  We using xl for switch into responsive. XL is 1280px
  return (
    // Container
    // Remove "xl:h-screen" if you add more info and the background messes up or smthing not sure.
    <div>
      <Main />
    </div>
  );
}

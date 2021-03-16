//import { useEffect, useState } from "react";


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
    <div className="xl:w-1000 xl:block xl:m-auto xl:bg-grayPc xl:h-screen">
      {/* Skip, DESKTOP ONLY */}
      <div className="xl:h-13 xl:w-full" />
      {/* Title Bar */}
      <div class="xl:h-25 block xl:bg-grayPc ">
        <div className="xl:float-left">
          <div className="bg-graySmall xl:bg-grayPc p-2.5 xl:p-0">
            <a
              href="/"
              className="text-white block font-bold text-center no-underline text-xs xl:font-headerPc xl:text-40px xl:float-left xl:inline-block xl:font-normal xl:pt-3.75 xl:bg-grayPc"
            >
              California Institute of Technology{' '}
              <span className="hidden xl:inline">(Caltech)</span>
            </a>
          </div>
        </div>
        {/* Hidden makes the thing hidden on mobile so afterwards no need for xl. Would probs be a good idea to do it but im lazy */}
        <div className="hidden xl:block float-right pt-3.75">
          {/* Home Links */}
          <div className=" text-right pb-2.5 uppercase font-bold text-sm pr-2 h-4.5 text-links">
              <a href="http://www.admissions.caltech.edu/">Caltech Admissions Home</a>
          </div>
          {/* "Header? Label for persons name" */}
          <div className="relative top-5">
            <div className="block">
              <ul className="">
                <li>
                  <span className="text-white text-xs">You :)</span>
                  <a href="https://youtu.be/dQw4w9WgXcQ" className="text-xxs pl-1.25 text-linkRed visited:text-linkBlue">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Content aka middle white part */}
      <div className="xl:w-1000 xl:m-auto p-2.5 xl:bg-white">
        <div>
          {/* I have to do xl bc website uses 1.5em, but I don't have default text saved so 1.25rem is clsoe enough. */}
          <h1 className="font-bold fontFamily-sans text-xl mb-2.5">Thank You Status for All Faculty</h1>
          
          <div className="flex flex-col items-center">
            <div className="xl:w-3/4 w-full h-56 bg-orange shadow-2xl my-3 flex justify-center items-center">
              <div className="xl:text-7xl text-4xl text-white">
                <h1 className="text-center">Caltech Prefrosh</h1>
              </div>
              <div className="text-2xl mx-3">
                <h3>Hopes you accept our offer of gratitude!</h3>
              </div>
            </div>
          </div>
            
        </div>

        <div className="text-md font-bold bg-greenHeader my-2.5">
          <h2 className="pl-1 xl:text-grayPc">CALTHANKS FACULTY PORTAL</h2>
        </div>

        <div>
          <h3 className="font-bold">Status Update</h3>
          <h4>An update to your application was last posted on March 20, 2021</h4>
          <a className="text-orange" href="/">View Update &gt;&gt; </a>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="hidden xl:block pt-2.5">
        <p className="pb-2.5 text-xxs uppercase text-lightGray">
          California Institute of Technology
          <br />
          1200 E California Blvd, Pasadena CA 91125
          <br />
          <br />
        </p>
      </footer>
      {/* Ignore
      <div id="my-canvas" className="xl:w-1000 bg-white flex flex-col items-center font-headerPc font-bold text-white">
        <div className="xl:h-60 xl:w-96 h-32 w-56 bg-orange xl:text-7xl text-3xl shadow-2xl rounded-lg my-3 flex justify-center items-center">
          <h1 className="text-center">{greetings[index].title}</h1>
        </div>

        <div className="xl:h-60 xl:w-96 h-32 w-56 bg-orange xl:text-7xl text-3xl shadow-2xl rounded-lg my-3 flex justify-center items-center">
          <h1 className="text-center">{greetings[index].title}</h1>
        </div>

        <div className="xl:h-60 xl:w-96 h-32 w-56 bg-orange xl:text-7xl text-3xl shadow-2xl rounded-lg my-3 flex justify-center items-center">
          <h1 className="text-center">{greetings[index].title}</h1>
        </div>        
      </div>
      */}
      
      
    </div>
  );

  




}

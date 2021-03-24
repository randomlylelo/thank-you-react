// import { useEffect, useState } from "react";
import React from "react";
import { TopBar, BottomBar, MidSection } from "../src/layout";
import ReactPlayer from 'react-player/youtube'

export default function Home() {
  /*Middle Section Banner Labels */
  let lbls = [
    {lbl:"Caltech Prefrosh", style:"xl:text-7xl text-4xl text-white w-1/2"},
    {lbl:"Hopes You Accept Our Offer Of Grattitude", style:"xl:text-3xl text-lg mx-2.5 text-black w-1/2"},
  ];

  /*Middle Section Information Info */
  let info = [
    {title:"CALTHANKS FACULTY PORTAL", header:"Welcome", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget mattis ex. Nulla a elit non nunc cursus sodales in vel nulla. Aenean fermentum ex pellentesque, gravida diam id, scelerisque mi. Duis rutrum iaculis tristique. Ut elementum velit vitae dolor pulvinar accumsan. Phasellus convallis ornare ornare. Proin gravida condimentum interdum. Nullam iaculis, mauris at gravida pharetra, enim erat maximus est, sed euismod orci sem at nulla. Mauris consequat nec eros a vestibulum. Vivamus metus justo, malesuada aliquet imperdiet id, volutpat eget tellus. Mauris lacus quam, auctor non lacus venenatis, sagittis scelerisque nibh. Nam lobortis nisl et mi suscipit pharetra. Nunc laoreet, nisi eu imperdiet ullamcorper, libero sem tempor metus, non dapibus dolor urna quis massa. Mauris pellentesque enim lectus, at venenatis neque ullamcorper nec. Vestibulum luctus velit sit amet dui letius, vitae ornare purus facilisis. Donec dictum magna neque, vestibulum eleifend sapien eleifend vel. Aenean accumsan leo at maximus viverra. Praesent id accumsan ipsum, ut tristique ligula."},
    {title:"WHAT'S NEXT", header:"Status Update", content:"An update to your application was last posted on March 20, 2021", page:"/thankyou", navTitle:"View Update >>"}
  ]

  /*Middle Section Checklist Details/Items */
  let checkItems = [
    {name:"One", status:"Recieved", date:"02/12/2021"},
    {name:"One", status:"Recieved", date:"02/12/2021"},
    {name:"One", status:"Recieved", date:"02/12/2021"},
    {name:"One", status:"Recieved", date:"02/12/2021"},
  ];

  let video =  <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' controls={true}/>

  //  We using xl for switch into responsive. XL is 1280px
  return (
    
    // Container
    // Remove "xl:h-screen" if you add more info and the background messes up or smthing not sure.
    
    <div className="xl:w-1000 xl:block xl:m-auto xl:gray-Pc xl:h-full">
      
      {/* Skip, DESKTOP ONLY */}
      <div className="xl:h-12 xl:w-full" />
      <TopBar/>
      <MidSection bannerLabels={lbls} infoArray={info} checkItems={checkItems} title="Application Status for All Faculty" video={video} />
      <BottomBar name="California Institute of Technology" address="1200 E California Blvd, Pasadena CA 91125"/>
    </div>
          
  );
}

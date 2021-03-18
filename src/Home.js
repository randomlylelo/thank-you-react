// import { useEffect, useState } from "react";
import React from "react";
import {TopBar, BottomBar, MidSection} from "../src/layout";
export default function Home() {

  /*Middle Section Banner Labels */
  var lbls = [
    {lbl:"Caltech Prefrosh", style:"xl:text-7xl text-4xl text-white"},
    {lbl:"Hopes You Accept Our Offer Of Grattitude", style:"xl:text-2xl text-lg mx-10 text-white"},
  ];

  /*Middle Section Information Info */
  var info = [
    {title:"CALTHANKS FACULTY PORTAL", header:"Status Update", content:"An update to your application was last posted on March 20, 2021", page:"/thankyou", navTitle:"View Update >>"},
    {title:"CALTHANKS FACULTY PORTAL", header:"Status Update", content:"An update to your application was last posted on March 20, 2021"}
  ]

  //  We using xl for switch into responsive. XL is 1280px
  return (
    
    // Container
    // Remove "xl:h-screen" if you add more info and the background messes up or smthing not sure.
    
    <div className="xl:w-1000 xl:block xl:m-auto xl:bg-grayPc xl:h-screen">
      
      {/* Skip, DESKTOP ONLY */}
      <div className="xl:h-12 xl:w-full" />
      <TopBar/>
      <MidSection bannerLabels={lbls} infoArray={info} title="Application Status for All Faculty"/>
      <BottomBar name="California Institute of Technology" address="1200 E California Blvd, Pasadena CA 91125"/>
    </div>
          
  );
}

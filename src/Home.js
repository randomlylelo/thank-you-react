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
    {title:"CALTHANKS FACULTY PORTAL", header:"Welcome", content:
    `Your Caltech Applicant Portal is your secure hub throughout your application process. Through this hub, you will:
    
    Help us keep our staff safe and remote by minimizing the materials sent by mail.
    
    Submit new/updated information
    Upload supplemental materials for your application
    Track our receipt of your required application materials
    View your admissions decision
     
The Caltech Admissions Office will not share information about your application by phone or email. Your Caltech Applicant Portal is your best and most accurate resource for updates about your application.`},
    {title:"WHAT'S NEXT", header:"Status Update", content:"An update to your application was last posted on March 20, 2021", page:"https://malmal.io/d/605e788bea8d7900090be3bd;x=1173;y=760;zoom=0.4774?invite=vL8oP-Ib_fPr1LyLh4TRR", navTitle:"View Update >>"}
  ]

  /*Middle Section Checklist Details/Items */
  let checkItems = [
    {name:"One", status:"Recieved", date:"02/12/2021"},
    {name:"One", status:"Recieved", date:"02/12/2021"},
    {name:"One", status:"Recieved", date:"02/12/2021"},
    {name:"One", status:"Recieved", date:"02/12/2021"},
  ];

  let video =  <ReactPlayer url='https://youtu.be/ID_L0aGI9bg' controls={true}/>

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

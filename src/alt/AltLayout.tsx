import AlternateRightBar from "@/components/AlternateRightBar";
import LandingImages from "@/components/LandingImages";
import PageFooter from "@/components/PageFooter";
import TopBar2 from "@/components/TopBar2";
import { useEffect, useState } from "react";

import { Outlet, useLocation } from "react-router-dom";

const AltLayout = () => {
  const {pathname} = useLocation()
  const [landingProps, setlandingProps] = useState({
    title:"",
    generalPage:"",
    currentPage:""
  })

  useEffect(() => {
    
  if (pathname.includes("checking")) {
    setlandingProps((prev) =>({
      ...prev,
      title:"Checking Account ",
      generalPage:"Pages",
      currentPage:"Checking Account"

    }))
  }else if (pathname.includes("savings")) {
      setlandingProps((prev) =>({
        ...prev,
        title:"Savings Account ",
        generalPage:"Pages",
        currentPage:"Savings Account"
  
      }))}else if (pathname.includes("contact-us")) {
        setlandingProps((prev) =>({
          ...prev,
          title:"Contactez -nous ",
          generalPage:"Pages",
          currentPage:"Contactez -nous"
    
        }))}else if (pathname.includes("about")) {
          setlandingProps((prev) =>({
            ...prev,
            title:"À propos de nous ",
            generalPage:"Pages",
            currentPage:"À propos de nous"
      
          }))}else if (pathname.includes("pension")) {
            setlandingProps((prev) =>({
              ...prev,
              title:"À propos de nous ",
              generalPage:"Pages",
              currentPage:"À propos de nous"
        
            }))}
   
  }, [pathname])
  
  return (
    <main className="flex h-screen w-full font-inter">
      <div className="relative py-36 px-2 w-full h-full">
        <TopBar2 />
        <LandingImages
          title={landingProps.title}
          general_page={landingProps.generalPage}
          current_page={landingProps.currentPage}
        />
        <div className={`flex pt-10  flex-row w-full items-start justify-center px-2 ${pathname.includes("home") || pathname.includes("about") ? "lg:px-2" : "lg:px-72" }`}>
          <AlternateRightBar />
          <div className="flex-1 pt-10 flex">
            <Outlet />
            
          </div>
        </div>
        <PageFooter/>
      </div>
    </main>
  );
};

export default AltLayout;

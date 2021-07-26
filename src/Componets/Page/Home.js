import React, { useEffect, useState } from "react";
import Header from "../Container/Header";
import Sidebar from "../Element/sidebar";
import Maincards from "../Element/Mincards";
import "../Assets/Css/Home.scss";

function Home() {
   const [open, setOpen] = useState(true);

   const getWindowDimensions = () => {
      const { innerWidth: width } = window;
      if (width <= 991) {
         setOpen(false);
      }
   };

   useEffect(() => {
      getWindowDimensions();
   }, []);

   const handleOpenHeader = (param) => {
      setOpen(param)
   }

   return (
      <div>
         <div className="container-fluid">
            <Header handleOpenHeader={handleOpenHeader} open={open} />
            <div className="row">
               <div className={open?"home-sidebar accordian":"home-sidebar sidebar-spaces"}>{<Sidebar />}</div>
               <div className={open ? "home-maincards overlay" : "home-maincards cardMobileSize"}>
                  <Maincards />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Home;

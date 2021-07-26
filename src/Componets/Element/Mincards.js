import React from "react";
import Coronaviruscases from "./Maincard/Coronaviruscases";
import Recovered from "./Maincard/Recovered";
import Deaths from "./Maincard/Deaths";
import Casesbycountry from "./Maincard/Casesbycountry";
import Chart from "../Element/Maincard/Chart";
import Symptoms from "./Maincard/Symptoms";
import Prevention from "./Maincard/Prevention";
import Qcoronaviruses from "./Maincard/Qcoronaviruses";
import "../Assets/Css/Maincards.scss";

function Mincards() {
   return (
      <div>
         <div className="dashboard-title">
            Dashboard /<span> COVID 19</span>
         </div>
         <div className="row">
            <div className="col-sm-4">
               <Coronaviruscases />
            </div>
            <div className="col-sm-4">
               <Recovered />
            </div>
            <div className="col-sm-4">
               <Deaths />
            </div>
         </div>
         <div className="row">
            <div className="col-12">
               <Casesbycountry />
            </div>
         </div>
         <div className="row">
            <div className="col-12">
               <Chart />
            </div>
         </div>
         <div className="row">
            <div className="col-md-6">
               <Symptoms />
            </div>
            <div className="col-md-6">
               <Prevention />
            </div>
         </div>
         <div className="row">
            <div className="col-12">
               <Qcoronaviruses />
            </div>
         </div>
      </div>
   );
}

export default Mincards;

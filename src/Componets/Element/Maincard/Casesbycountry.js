import React from "react";
import Map from "../../Assets/Images/Maindashboard/Map.png";
import "../../Assets/Css/Casesbycountry.scss";

function Casesbycountry() {
   return (
      <div>
         <div className="Casesbycountry-shaddow">
            <div className="row Casesbycountry-space">
               <div className="col-xl-4 col-lg-5 corona-Update">
                  <div className="Casesbycountry">
                     <h4>Cases by Country</h4>
                     <table width="100%">
                        <tr className="data-title">
                           <td>Country</td>
                           <td>Active Cases</td>
                           <td>Death</td>
                        </tr>
                        <tr className="tr-space"></tr>
                        <tr>
                           <td>USA</td>
                           <td>657,452</td>
                           <td>65,451</td>
                        </tr>
                        <tr className="tr-space"></tr>
                        <tr>
                           <td>Canada</td>
                           <td>31,010</td>
                           <td>4,043</td>
                        </tr>
                        <tr className="tr-space"></tr>
                        <tr>
                           <td>Mexico</td>
                           <td>6,708</td>
                           <td>2,507</td>
                        </tr>
                        <tr className="tr-space"></tr>
                        <tr>
                           <td>China</td>
                           <td>696,221</td>
                           <td>76,529</td>
                        </tr>
                        <tr className="tr-space"></tr>
                        <tr>
                           <td>India</td>
                           <td>133,741</td>
                           <td>9,123</td>
                        </tr>
                        <tr className="tr-space"></tr>
                        <tr>
                           <td>Panama</td>
                           <td>6,490</td>
                           <td>210</td>
                        </tr>
                        <tr className="tr-space"></tr>
                        <tr>
                           <td>Cuba</td>
                           <td>5,345</td>
                           <td>323</td>
                        </tr>
                        <tr className="tr-space"></tr>
                        <tr>
                           <td>Honduras</td>
                           <td>5,555</td>
                           <td>657</td>
                        </tr>
                        <tr className="tr-space"></tr>
                        <tr>
                           <td>Guatemala</td>
                           <td>6,490</td>
                           <td>234</td>
                        </tr>
                        <tr className="tr-space"></tr>
                        <tr>
                           <td>Costa Rica</td>
                           <td>3,477</td>
                           <td>123</td>
                        </tr>
                     </table>
                  </div>
               </div>
               <div className="col-xl-8 col-lg-7 Mapcountry-Wrap">
                  <div className="Mapcountry">
                     <img src={Map} />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Casesbycountry;

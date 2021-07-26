import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import "../../Assets/Css/Symptoms.scss";

function Symptoms() {
   return (
      <div>
         <div className="Symptoms-Wrapper">
            <div className="Symptoms-tittle">
               <h4>Symptoms of COVID-19</h4>
            </div>
            <Link className="Symptoms-Info">
               <p>Fever</p>
               <FontAwesomeIcon icon={faLongArrowAltRight} />
            </Link>
            <Link className="Symptoms-Info">
               <p>Tiredness </p>
               <FontAwesomeIcon icon={faLongArrowAltRight} />
            </Link>
            <Link className="Symptoms-Info">
               <p>Dry Cough </p>
               <FontAwesomeIcon icon={faLongArrowAltRight} />
            </Link>
            <Link className="Symptoms-Info">
               <p>Aches and Pains </p>
               <FontAwesomeIcon icon={faLongArrowAltRight} />
            </Link>
            <Link className="Symptoms-Info">
               <p>Nasal Congestion</p>
               <FontAwesomeIcon icon={faLongArrowAltRight} />
            </Link>

            <Link className="Symptoms-Info">
               <p>Runny Nose </p>
               <FontAwesomeIcon icon={faLongArrowAltRight} />
            </Link>
            <Link className="Symptoms-Info">
               <p>Sore Throat </p>
               <FontAwesomeIcon icon={faLongArrowAltRight} />
            </Link>
         </div>
      </div>
   );
}

export default Symptoms;

import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import "../../Assets/Css/Prevention.scss";

function Prevention() {
   return (
      <div>
         <div className="Prevention-Wrapper">
            <div className="Prevention-tittle">
               <h4>Prevention of COVID-19</h4>
            </div>
            <Link className="Prevention-Info">
               <p>Fever</p>
               <FontAwesomeIcon icon={faLongArrowAltRight} />
            </Link>
            <Link className="Prevention-Info">
               <p>Tiredness </p>
               <FontAwesomeIcon icon={faLongArrowAltRight} />
            </Link>
            <Link className="Prevention-Info">
               <p>Dry Cough </p>
               <FontAwesomeIcon icon={faLongArrowAltRight} />
            </Link>
            <Link className="Prevention-Info">
               <p>Aches and Pains </p>
               <FontAwesomeIcon icon={faLongArrowAltRight} />
            </Link>
            <Link className="Prevention-Info">
               <p>Nasal Congestion</p>
               <FontAwesomeIcon icon={faLongArrowAltRight} />
            </Link>

            <Link className="Prevention-Info">
               <p>Runny Nose </p>
               <FontAwesomeIcon icon={faLongArrowAltRight} />
            </Link>
            <Link className="Prevention-Info">
               <p>Sore Throat </p>
               <FontAwesomeIcon icon={faLongArrowAltRight} />
            </Link>
         </div>
      </div>
   );
}

export default Prevention;

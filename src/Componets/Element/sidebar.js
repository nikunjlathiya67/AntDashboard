import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../Assets/Css/sidebar.scss";
import { faChartBar, faUser } from "@fortawesome/free-regular-svg-icons";
import { faVirus } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Sidebar(props) {
   // console.log(props,"props")
   return (
      <>
         <div className="sidebar-warp">
            <div className="sidebar-spaching">
               <div className="sidebar-menu">
                  <div className="menu-title">
                     <FontAwesomeIcon icon={faChartLine} />
                     <span>Dashboard</span>
                  </div>
                  <ul className="slider-submenu">
                     <Link to="">
                        <li className="menu-submenu-title">
                           <span>
                              <FontAwesomeIcon icon={faChartLine} />
                           </span>
                           Dashboard
                        </li>
                     </Link>
                     <Link to="">
                        <li className="menu-submenu-title">
                           <span>
                              <FontAwesomeIcon icon={faUser} />
                           </span>
                           Account
                        </li>
                     </Link>
                     <Link to="">
                        <li className="menu-submenu-title">
                           <span>
                              <FontAwesomeIcon icon={faChartBar} />
                           </span>
                           Analytic
                        </li>
                     </Link>
                     <Link to="">
                        <li className="menu-submenu-title">
                           <span>
                              <FontAwesomeIcon icon={faVirus} />
                           </span>
                           Covid 19
                        </li>
                     </Link>
                     <Link to="">
                        <li className="menu-submenu-title">
                           <span>
                              <FontAwesomeIcon icon={faShoppingCart} />
                           </span>
                           Ecommerce
                        </li>
                     </Link>
                  </ul>
               </div>
               <div className="sidebar-menu">
                  <div className="menu-title">
                     <FontAwesomeIcon icon={faChartLine} />
                     <span>Layout</span>
                  </div>
                  <ul className="slider-submenu">
                     <Link to="">
                        <li className="menu-submenu-title">
                           <span>
                              <FontAwesomeIcon icon={faChartLine} />
                           </span>
                           Horizontal
                        </li>
                     </Link>
                     <Link to="">
                        <li className="menu-submenu-title">
                           <span>
                              <FontAwesomeIcon icon={faUser} />
                           </span>
                           Vertical
                        </li>
                     </Link>
                     <Link to="">
                        <li className="menu-submenu-title">
                           <span>
                              <FontAwesomeIcon icon={faChartBar} />
                           </span>
                           Compacts
                        </li>
                     </Link>
                  </ul>
               </div>
               <div className="sidebar-menu">
                  <div className="menu-title">
                     <FontAwesomeIcon icon={faChartLine} />
                     <span>Web Apps</span>
                  </div>
                  <ul className="slider-submenu">
                     <Link to="">
                        <li className="menu-submenu-title">
                           <span>
                              <FontAwesomeIcon icon={faChartLine} />
                           </span>
                           Calander
                        </li>
                     </Link>
                     <Link to="">
                        <li className="menu-submenu-title">
                           <span>
                              <FontAwesomeIcon icon={faUser} />
                           </span>
                           Chats
                        </li>
                     </Link>
                     <Link to="">
                        <li className="menu-submenu-title">
                           <span>
                              <FontAwesomeIcon icon={faChartBar} />
                           </span>
                           Mailapp
                        </li>
                     </Link>
                     <Link to="">
                        <li className="menu-submenu-title">
                           <span>
                              <FontAwesomeIcon icon={faVirus} />
                           </span>
                           File Manager
                        </li>
                     </Link>
                     <Link to="">
                        <li className="menu-submenu-title">
                           <span>
                              <FontAwesomeIcon icon={faShoppingCart} />
                           </span>
                           Invoices
                        </li>
                     </Link>
                  </ul>
               </div>
               <div className="sidebar-menu">
                  <div className="menu-title">
                     <FontAwesomeIcon icon={faChartLine} />
                     <span>Elements</span>
                  </div>
                  <ul className="slider-submenu">
                     <Link to="">
                        <li className="menu-submenu-title">
                           <span>
                              <FontAwesomeIcon icon={faChartLine} />
                           </span>
                           Chart
                        </li>
                     </Link>
                     <Link to="">
                        <li className="menu-submenu-title">
                           <span>
                              <FontAwesomeIcon icon={faUser} />
                           </span>
                           Form
                        </li>
                     </Link>
                     <Link to="">
                        <li className="menu-submenu-title">
                           <span>
                              <FontAwesomeIcon icon={faChartBar} />
                           </span>
                           Tables
                        </li>
                     </Link>
                  </ul>
               </div>
            </div>
         </div>
      </>
   );
}

export default Sidebar;

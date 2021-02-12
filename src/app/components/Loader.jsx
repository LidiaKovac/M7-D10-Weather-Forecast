// From https://freefrontend.com/css-loaders/
// https://codepen.io/ykadosh/pen/PxvbYQ
// Inspired by Vitaly Silkin's Dribbble shot:
// https://dribbble.com/shots/3907093-Escalade-loader

import React from 'react' 
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styling/Loader.scss";

const Loader = ()=> {
    return (<svg>
        <g>
          <path d="M 50,100 A 1,1 0 0 1 50,0"/>
        </g>
        <g>
          <path d="M 50,75 A 1,1 0 0 0 50,-25"/>
        </g>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{'stop-color':'#004fff', 'stop-opacity':1}} />
            <stop offset="100%" style={{"stop-color":"#f3452e", "stop-opacity":1}} />
          </linearGradient>
        </defs>
      </svg>)
    }
    export default Loader;

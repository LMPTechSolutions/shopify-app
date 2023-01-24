import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "20px",
  height = "20px",
  className = "",
  viewBox = "0 0 20 20"
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
         <path 
          d="M19.6637292,8.2522 L10.6637292,0.2522 C10.2847292,-0.0838 9.71472918,-0.0838 9.33572918,0.2522 L7.99972918,1.4402 L7.99972918,1.0002 C7.99972918,0.4482 7.55272918,0.0002 6.99972918,0.0002 L2.99972918,0.0002 C2.44672918,0.0002 1.99972918,0.4482 1.99972918,1.0002 L1.99972918,6.7732 L0.335729179,8.2522 C-0.0772708206,8.6202 -0.114270821,9.2512 0.252729179,9.6652 C0.618729179,10.0772 1.25072918,10.1122 1.66372918,9.7482 L1.99972918,9.4492 L1.99972918,19.0002 C1.99972918,19.5522 2.44672918,20.0002 2.99972918,20.0002 L16.9997292,20.0002 C17.5527292,20.0002 17.9997292,19.5522 17.9997292,19.0002 L17.9997292,9.4492 L18.3357292,9.7482 C18.5257292,9.9172 18.7637292,10.0002 18.9997292,10.0002 C19.2747292,10.0002 19.5497292,9.8872 19.7467292,9.6652 C20.1137292,9.2512 20.0767292,8.6202 19.6637292,8.2522 L19.6637292,8.2522 Z M15.9997292,18.0002 L13.9997292,18.0002 L13.9997292,13.0002 C13.9997292,12.4482 13.5527292,12.0002 12.9997292,12.0002 L6.99972918,12.0002 C6.44672918,12.0002 5.99972918,12.4482 5.99972918,13.0002 L5.99972918,18.0002 L3.99972918,18.0002 L3.99972918,7.6712 L9.99972918,2.3382 L15.9997292,7.6712 L15.9997292,18.0002 Z M7.99972918,18.0002 L11.9997292,18.0002 L11.9997292,14.0002 L7.99972918,14.0002 L7.99972918,18.0002 Z M3.99972918,2.0002 L5.99972918,2.0002 L5.99972918,3.2182 L3.99972918,4.9962 L3.99972918,2.0002 Z" 
          id="path-1">


          </path>

  </svg>
);

export default SVG;



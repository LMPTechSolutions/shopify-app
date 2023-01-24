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
       <path d="M19.4916,11.8972 L17.9326,11.0172 C17.9776,10.6752 17.9996,10.3352 17.9996,10.0002 C17.9996,9.6652 17.9776,9.3252 17.9326,8.9822 L19.4916,8.1032 C19.7256,7.9702 19.8966,7.7502 19.9656,7.4912 C20.0356,7.2312 19.9976,6.9542 19.8616,6.7232 L17.8146,3.2592 C17.5376,2.7912 16.9396,2.6302 16.4616,2.8972 L14.9706,3.7382 C14.3706,3.2622 13.7046,2.8732 12.9996,2.5862 L12.9996,1.0002 C12.9996,0.4482 12.5526,0.0002 11.9996,0.0002 L7.9996,0.0002 C7.4476,0.0002 6.9996,0.4482 6.9996,1.0002 L6.9996,2.5862 C6.2946,2.8732 5.6286,3.2622 5.0296,3.7382 L3.5376,2.8972 C3.0626,2.6302 2.4626,2.7912 2.1856,3.2592 L0.1386,6.7232 C0.0016,6.9542 -0.0354,7.2312 0.0346,7.4912 C0.1036,7.7502 0.2746,7.9702 0.5086,8.1032 L2.0676,8.9822 C2.0226,9.3252 1.9996,9.6652 1.9996,10.0002 C1.9996,10.3352 2.0226,10.6752 2.0676,11.0172 L0.5086,11.8972 C0.2746,12.0292 0.1036,12.2502 0.0346,12.5092 C-0.0354,12.7692 0.0016,13.0452 0.1386,13.2772 L2.1856,16.7412 C2.4626,17.2092 3.0626,17.3722 3.5376,17.1032 L5.0296,16.2612 C5.6286,16.7382 6.2946,17.1272 6.9996,17.4132 L6.9996,19.0002 C6.9996,19.5522 7.4476,20.0002 7.9996,20.0002 L11.9996,20.0002 C12.5526,20.0002 12.9996,19.5522 12.9996,19.0002 L12.9996,17.4132 C13.7046,17.1272 14.3706,16.7382 14.9706,16.2612 L16.4616,17.1032 C16.9396,17.3722 17.5376,17.2092 17.8146,16.7412 L19.8616,13.2772 C19.9976,13.0452 20.0356,12.7692 19.9656,12.5092 C19.8966,12.2502 19.7256,12.0292 19.4916,11.8972 M15.8486,8.6782 C15.9496,9.1262 15.9996,9.5712 15.9996,10.0002 C15.9996,10.4282 15.9496,10.8732 15.8486,11.3222 C15.7516,11.7522 15.9486,12.1952 16.3326,12.4112 L17.6196,13.1372 L16.5906,14.8792 L15.3376,14.1722 C14.9546,13.9562 14.4716,14.0162 14.1546,14.3222 C13.4636,14.9852 12.6196,15.4782 11.7146,15.7472 C11.2906,15.8732 10.9996,16.2632 10.9996,16.7062 L10.9996,18.0002 L8.9996,18.0002 L8.9996,16.7062 C8.9996,16.2632 8.7086,15.8732 8.2856,15.7472 C7.3796,15.4782 6.5356,14.9852 5.8456,14.3222 C5.5286,14.0162 5.0446,13.9562 4.6616,14.1722 L3.4096,14.8792 L2.3796,13.1372 L3.6666,12.4112 C4.0516,12.1952 4.2476,11.7522 4.1516,11.3222 C4.0506,10.8732 3.9996,10.4282 3.9996,10.0002 C3.9996,9.5712 4.0506,9.1262 4.1516,8.6782 C4.2476,8.2482 4.0516,7.8052 3.6666,7.5882 L2.3796,6.8622 L3.4096,5.1202 L4.6616,5.8272 C5.0456,6.0442 5.5286,5.9842 5.8456,5.6782 C6.5356,5.0142 7.3796,4.5222 8.2856,4.2522 C8.7086,4.1262 8.9996,3.7362 8.9996,3.2942 L8.9996,2.0002 L10.9996,2.0002 L10.9996,3.2942 C10.9996,3.7362 11.2906,4.1262 11.7146,4.2522 C12.6196,4.5222 13.4636,5.0142 14.1546,5.6782 C14.4716,5.9842 14.9536,6.0432 15.3376,5.8272 L16.5906,5.1202 L17.6196,6.8622 L16.3326,7.5882 C15.9486,7.8052 15.7516,8.2482 15.8486,8.6782 M9.9999,6 C7.7939,6 5.9999,7.794 5.9999,10 C5.9999,12.206 7.7939,14 9.9999,14 C12.2059,14 13.9999,12.206 13.9999,10 C13.9999,7.794 12.2059,6 9.9999,6 M9.9999,12 C8.8969,12 7.9999,11.103 7.9999,10 C7.9999,8.897 8.8969,8 9.9999,8 C11.1029,8 11.9999,8.897 11.9999,10 C11.9999,11.103 11.1029,12 9.9999,12" id="path-1"></path>

  </svg>
);

export default SVG;



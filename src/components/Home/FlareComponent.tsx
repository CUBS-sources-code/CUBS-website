import React from "react";

const FlareComponent = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="587"
      height="65"
      fill="none"
      viewBox="0 0 587 65"
    >
      <g filter="url(#filter0_df_215_4954)">
        <path
          fill="#fff"
          d="M293.5 20l5.456 3.9c3.806 2.72 8.04 4.756 12.691 5.266 23.229 2.549 86.808 2.065 161.284 2.626L567 32.5l-94.069.708c-75.797.57-140.308.84-162.482 3.7-3.853.496-7.41 2.092-10.699 4.16L293.5 45l-5.068-3.416c-3.572-2.408-7.483-4.23-11.759-4.753-22.85-2.788-87.481-3.057-162.604-3.623L20 32.5l94.069-.708c73.769-.556 137.422-.086 161.328-2.554 5.095-.526 9.731-2.826 13.797-5.94L293.5 20z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_df_215_4954"
          width="587"
          height="65"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="10"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.991667 0 0 0 0 0.963569 0 0 0 0 0.710694 0 0 0 1 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_215_4954"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_215_4954"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            result="effect2_foregroundBlur_215_4954"
            stdDeviation="0.5"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};

export default FlareComponent;

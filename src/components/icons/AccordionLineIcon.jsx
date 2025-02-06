const AccordionLineIcon = ({
  width = 14,
  height = 1,
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 1"
      fill="none"
      className={className}
    >
      <g filter="url(#filter0_b_129_5400)">
        <rect width="13.77" height="1" fill="url(#paint0_linear_129_5400)" />
      </g>
      <defs>
        <filter
          id="filter0_b_129_5400"
          x="-20"
          y="-20"
          width="53.7695"
          height="41"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_129_5400"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_129_5400"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_129_5400"
          x1="0"
          y1="0.5"
          x2="13.77"
          y2="0.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-opacity="0" />
          <stop stop-color="white" stop-opacity="0" />
          <stop offset="0.5" stop-color="#2A9D8F" />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default AccordionLineIcon;

const PlayVideoIcon = () => {
  return (
    <svg
      width="100"
      height="101"
      viewBox="0 0 100 101"
      fill="none"
    >
      <g filter="url(#filter0_b_75_3666)">
        <rect
          y="0.469971"
          width="100"
          height="100"
          rx="50"
          fill="white"
          fillOpacity="0.4"
        />
        <rect
          x="1"
          y="1.46997"
          width="98"
          height="98"
          rx="49"
          stroke="white"
          strokeWidth="2"
        />
        <path
          d="M41.875 38.5162L60.1813 49.5L41.875 60.4838V38.5162Z"
          stroke="white"
          strokeWidth="2"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_75_3666"
          x="-7.5"
          y="-7.03003"
          width="115"
          height="115"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.75" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_75_3666"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_75_3666"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default PlayVideoIcon;

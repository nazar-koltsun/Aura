const GradientCheckIcon = ({
  width = 13,
  height = 10,
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 10"
      fill="none"
      className={className}
    >
      <path
        d="M4.33266 6.98835L1.58849 4.24418L0.410156 5.42251L4.33266 9.34501L12.4218 1.25585L11.2435 0.0775146L4.33266 6.98835Z"
        fill="url(#paint0_linear_129_5503)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_129_5503"
          x1="6.41599"
          y1="0.0775146"
          x2="6.41599"
          y2="9.34501"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2A9D8F" />
          <stop offset="1" stopColor="#F4A261" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GradientCheckIcon;

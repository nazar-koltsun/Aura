const BurgerIcon = ({ width = 24, height = 24, fill = '#65676B' }) => {
  return (
    <svg
      fill={fill}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={fill}
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
};

export default BurgerIcon;

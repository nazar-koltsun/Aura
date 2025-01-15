const ArrowDownIcon = ({
  width = 16,
  height = 16,
  fill = '#65676B',
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      stroke={fill}
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
};

export default ArrowDownIcon;

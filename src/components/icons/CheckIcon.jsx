const CheckIcon = ({
  width = 15,
  height = 13,
  fill = '#65676B',
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 13"
      fill="none"
      className={className}
    >
      <path
        d="M2 7.58841L5.14397 11.314L13.0039 2"
        stroke={fill}
        strokeWidth="2.92"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckIcon;

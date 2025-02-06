const MinusIcon = ({
  width = 14,
  height = 2,
  fill = '#2A9D8F',
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 2"
      fill="none"
      className={className}
    >
      <path d="M0 0H14V2H0V0Z" fill={fill} />
    </svg>
  );
};

export default MinusIcon;

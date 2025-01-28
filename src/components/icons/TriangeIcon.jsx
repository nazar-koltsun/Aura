const TriangleIcon = ({
  width = 16,
  height = 16,
  fill = '#fff', 
  strokeWidth = 3,
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        d="M12 2 L22 20 H2 Z"
        fill="none"
        stroke={fill}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TriangleIcon;

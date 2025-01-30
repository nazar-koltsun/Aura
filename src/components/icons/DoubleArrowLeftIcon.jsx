const DoubleArrowLeftIcon = ({
  width = 13,
  height = 12,
  fill = '#65676B',
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 12"
      fill="none"
      className={className}
    >
      <path
        d="M7.70312 1.71004L3.37812 6.00004L7.70312 10.29L6.29512 11.71L0.538124 6.00004L6.29512 0.290039L7.70312 1.71004Z"
        fill={fill}
      />
      <path
        d="M11.2951 0.290039L12.7031 1.71004L8.37812 6.00004L12.7031 10.29L11.2951 11.71L5.53812 6.00004L11.2951 0.290039Z"
        fill={fill}
      />
    </svg>
  );
};

export default DoubleArrowLeftIcon;

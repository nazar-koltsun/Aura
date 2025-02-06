const PlusIcon = ({ width = 14, height = 14, fill = '#2A9D8F', className }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
      className={className}
    >
      <path d="M14 6H8V0H6V6H0V8H6V14H8V8H14V6Z" fill={fill} />
    </svg>
  );
};

export default PlusIcon;

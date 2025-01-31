const DownloadIcon = ({
  width = 16,
  height = 12,
  fill = '#878787',
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 12"
      fill="none"
      className={className}
    >
      <path d="M8 9L11 5.25H8.75V0H7.25V5.25H5L8 9Z" fill={fill} />
      <path
        d="M14 10.5H2V5.25H0.5V10.5C0.5 11.3273 1.17275 12 2 12H14C14.8273 12 15.5 11.3273 15.5 10.5V5.25H14V10.5Z"
        fill={fill}
      />
    </svg>
  );
};

export default DownloadIcon;

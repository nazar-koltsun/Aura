const GoOutIcon = ({ width = 26, height = 24, fill = '#65676B' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 24"
      fill={fill}
    >
      <path
        d="M18 13.25V10.75H6.75V7L0.5 12L6.75 17V13.25H18Z"
        fill={fill}
      />
      <path
        d="M23 0.75H11.75C10.3712 0.75 9.25 1.87125 9.25 3.25V8.25H11.75V3.25H23V20.75H11.75V15.75H9.25V20.75C9.25 22.1288 10.3712 23.25 11.75 23.25H23C24.3788 23.25 25.5 22.1288 25.5 20.75V3.25C25.5 1.87125 24.3788 0.75 23 0.75Z"
        fill={fill}
      />
    </svg>
  );
};

export default GoOutIcon;

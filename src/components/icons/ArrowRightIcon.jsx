const ArrowRightIcon = ({ className, width = 8, height = 12, fill = '#65676B' }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 8 12"
      fill={fill}
    >
      <path
        d="M1.70697 11.707L7.41397 5.99997L1.70697 0.292969L0.292969 1.70697L4.58597 5.99997L0.292969 10.293L1.70697 11.707Z"
        fill={fill}
      />
    </svg>
  );
};

export default ArrowRightIcon;

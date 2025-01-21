const BurgerIconSmall = ({ width = 16, height = 12, fill = '#65676B', className }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 12"
      fill={fill}
      className={className}
    >
      <path d="M0 0H16V2H0V0ZM4 5H16V7H4V5ZM9 10H16V12H9V10Z" />
    </svg>
  );
};

export default BurgerIconSmall;

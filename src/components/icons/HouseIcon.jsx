const HouseIcon = ({
  width = 45,
  height = 45,
  fill = '#8B8181',
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 45 45"
      fill={fill}
      className={className}
    >
      <path
        d="M2.62583 24.7083H4.83417V40.1667C4.83417 42.6025 6.81504 44.5833 9.25083 44.5833H35.7508C38.1866 44.5833 40.1675 42.6025 40.1675 40.1667V24.7083H42.3758C42.8125 24.7082 43.2394 24.5787 43.6025 24.336C43.9655 24.0934 44.2485 23.7485 44.4156 23.345C44.5827 22.9416 44.6265 22.4976 44.5413 22.0693C44.4561 21.641 44.2459 21.2476 43.9371 20.9387L24.0621 1.06372C23.8572 0.85846 23.6139 0.695622 23.3459 0.584519C23.078 0.473416 22.7909 0.416229 22.5008 0.416229C22.2108 0.416229 21.9236 0.473416 21.6557 0.584519C21.3878 0.695622 21.1444 0.85846 20.9395 1.06372L1.06454 20.9387C0.755794 21.2476 0.545546 21.641 0.460376 22.0693C0.375206 22.4976 0.418938 22.9416 0.586043 23.345C0.753147 23.7485 1.03612 24.0934 1.39919 24.336C1.76227 24.5787 2.18913 24.7082 2.62583 24.7083ZM22.5008 5.74759L35.7508 18.9976V29.125L35.753 40.1667H9.25083V18.9976L22.5008 5.74759Z"
      />
      <path
        d="M22.4996 35.75C30.6771 35.75 33.3227 27.9347 33.4309 27.6035L29.235 26.2321C29.2174 26.2829 27.5103 31.3333 22.4996 31.3333C17.5574 31.3333 15.8304 26.4286 15.762 26.2188L11.5684 27.6035C11.6766 27.9347 14.3222 35.75 22.4996 35.75Z"
      />
    </svg>
  );
};

export default HouseIcon;

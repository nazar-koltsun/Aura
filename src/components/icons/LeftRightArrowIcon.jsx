const LeftRightArrowIcon = ({ width = 50, height = 50, fill = '#f4a261', className }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      className={className}
    >
      <g>
        <g id="move_x5F_horizontal">
          <g>
            <polygon
              style={{'fill': fill}}
              points="12,18 6,18 6,22 0,16 6,10 6,14 12,14"
            />
            <polygon
              style={{'fill': fill}}
              points="20,14 26,14 26,10 32,16 26,22 26,18 20,18"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default LeftRightArrowIcon;

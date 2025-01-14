const PhoneIcon = ({ width = 26, height = 26, fill = '#65676B' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 25"
      fill={fill}
    >
      <path
        d="M22.0008 11.7487H24.5008C24.5008 5.33625 19.6595 0.5 13.2383 0.5V3C18.3158 3 22.0008 6.67875 22.0008 11.7487Z"
        fill={fill}
      />
      <path
        d="M13.2504 7.99981C15.8791 7.99981 17.0004 9.12106 17.0004 11.7498H19.5004C19.5004 7.71856 17.2816 5.49981 13.2504 5.49981V7.99981ZM17.5279 14.8036C17.2877 14.5853 16.972 14.4688 16.6476 14.4788C16.3232 14.4889 16.0154 14.6246 15.7891 14.8573L12.7979 17.9336C12.0779 17.7961 10.6304 17.3448 9.14035 15.8586C7.65035 14.3673 7.1991 12.9161 7.06535 12.2011L10.1391 9.20856C10.3721 8.98247 10.508 8.67459 10.5181 8.35007C10.5281 8.02555 10.4115 7.70986 10.1929 7.46981L5.5741 2.39106C5.35541 2.15026 5.05145 2.00419 4.72679 1.98389C4.40214 1.96358 4.08235 2.07063 3.83535 2.28231L1.12285 4.60856C0.906742 4.82545 0.777752 5.11412 0.760352 5.41981C0.741602 5.73231 0.384103 13.1348 6.1241 18.8773C11.1316 23.8836 17.4041 24.2498 19.1316 24.2498C19.3841 24.2498 19.5391 24.2423 19.5804 24.2398C19.886 24.2227 20.1745 24.0931 20.3904 23.8761L22.7154 21.1623C22.9272 20.9155 23.0345 20.5958 23.0144 20.2711C22.9943 19.9465 22.8485 19.6424 22.6079 19.4236L17.5279 14.8036Z"
        fill={fill}
      />
    </svg>
  );
};

export default PhoneIcon;
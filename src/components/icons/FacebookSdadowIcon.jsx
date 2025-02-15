const FacebookSdadowIcon = ({
  width = 96,
  height = 100,
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 96 100"
      fill="none"
      className={className}
    >
      <path
        opacity="0.8"
        d="M47.8913 99.652C74.3409 99.652 95.7825 78.1863 95.7825 51.707C95.7825 25.2277 74.3409 3.76202 47.8913 3.76202C21.4416 3.76202 0 25.2277 0 51.707C0 78.1863 21.4416 99.652 47.8913 99.652Z"
        fill="url(#paint0_radial_279_2665)"
      />
      <path
        d="M68.7889 32.6048C68.7889 14.5976 54.2077 0 36.2206 0C18.2336 0 3.65234 14.5976 3.65234 32.6048C3.65234 48.8794 15.5628 62.3686 31.133 64.815V42.031H22.8645V32.6048H31.133V25.422C31.133 17.2513 35.9956 12.7355 43.4355 12.7355C46.9995 12.7355 50.7261 13.3733 50.7261 13.3733V21.3969H46.6186C42.5735 21.3969 41.3105 23.9101 41.3105 26.4879V32.6048H50.343L48.8996 42.031H41.3105V64.815C56.8785 62.3686 68.7889 48.8794 68.7889 32.6048Z"
        fill="url(#paint1_linear_279_2665)"
      />
      <path
        d="M48.8983 42.031L50.3417 32.6048H41.3092V26.4879C41.3092 23.9101 42.57 21.3969 46.6173 21.3969H50.7248V13.3733C50.7248 13.3733 46.9982 12.7355 43.4342 12.7355C35.9944 12.7355 31.1318 17.2491 31.1318 25.422V32.6048H22.8633V42.031H31.1318V64.815C32.789 65.0759 34.4886 65.2119 36.2216 65.2119C37.9546 65.2119 39.652 65.0759 41.3114 64.815V42.031H48.8983Z"
        fill="white"
      />
      <defs>
        <radialGradient
          id="paint0_radial_279_2665"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(47.8917 51.7061) scale(47.8913 47.945)"
        >
          <stop stopColor="#000056" />
          <stop offset="0.2482" stopColor="#4C4C88" stopOpacity="0.7518" />
          <stop offset="0.5193" stopColor="#9898BB" stopOpacity="0.4807" />
          <stop offset="0.744" stopColor="#D0D0E0" stopOpacity="0.256" />
          <stop offset="0.9103" stopColor="#F2F2F6" stopOpacity="0.0897" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <linearGradient
          id="paint1_linear_279_2665"
          x1="13.1901"
          y1="9.54998"
          x2="59.3011"
          y2="55.6095"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4676ED" />
          <stop offset="0.1854" stopColor="#436DE4" />
          <stop offset="0.487" stopColor="#3C55CD" />
          <stop offset="0.8651" stopColor="#302EA8" />
          <stop offset="1" stopColor="#2B1E99" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default FacebookSdadowIcon;

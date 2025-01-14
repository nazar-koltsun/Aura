const UserIcon = ({ width = 19, height = 19, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 19"
      fill={fill}
      role="presentation"
    >
      <path
        d="M5.10938 4.5C5.10938 6.981 7.12838 9 9.60938 9C12.0904 9 14.1094 6.981 14.1094 4.5C14.1094 2.019 12.0904 0 9.60938 0C7.12838 0 5.10938 2.019 5.10938 4.5ZM17.6094 19H18.6094V18C18.6094 14.141 15.4684 11 11.6094 11H7.60938C3.74938 11 0.609375 14.141 0.609375 18V19H17.6094Z"
        fill="white"
      />
    </svg>
  );
};

export default UserIcon;

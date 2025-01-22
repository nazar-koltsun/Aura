const MessageIcon = ({
  width = 41,
  height = 41,
  fill = '#2A9D8F',
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 41 41"
      fill={fill}
      className={className}
    >
      <path d="M6.20898 32.75V40.4389L9.30211 38.583L19.0245 32.75H28.6673C30.9193 32.75 32.7507 30.9186 32.7507 28.6667V12.3333C32.7507 10.0814 30.9193 8.25 28.6673 8.25H4.16732C1.91536 8.25 0.0839844 10.0814 0.0839844 12.3333V28.6667C0.0839844 30.9186 1.91536 32.75 4.16732 32.75H6.20898ZM4.16732 12.3333H28.6673V28.6667H17.8934L10.2923 33.2277V28.6667H4.16732V12.3333Z" />
      <path d="M36.8333 0.083252H12.3333C10.0814 0.083252 8.25 1.91463 8.25 4.16659H32.75C35.002 4.16659 36.8333 5.99796 36.8333 8.24992V24.5833C39.0853 24.5833 40.9167 22.7519 40.9167 20.4999V4.16659C40.9167 1.91463 39.0853 0.083252 36.8333 0.083252Z" />
    </svg>
  );
};

export default MessageIcon;

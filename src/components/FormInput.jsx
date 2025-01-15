import { cn } from "../lib/utils";

const FormInput = ({
  id,
  type = "text",
  className = "",
  ...props
}) => {
  return (
    <input
      id={id}
      type={type}
      className={cn('w-full py-3 px-5 border-2 border-[#D1D1D3] rounded-xl text-[var(--granite-gray)]', className)}
      {...props}
    />
  );
};

export default FormInput;
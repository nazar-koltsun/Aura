import { cn } from "../lib/utils";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const PhoneNumberField = ({id, phone, onChange, className = ""}) => {
  return (
    <PhoneInput
      id={id}
      className={cn('w-full py-3 px-5 border-2 border-[#D1D1D3] rounded-xl text-[var(--granite-gray)]', className)}
      defaultCountry="PL"
      value={phone}
      onChange={onChange}
      placeholder="Enter phone number"
      international
    />
  );
};

export default PhoneNumberField;
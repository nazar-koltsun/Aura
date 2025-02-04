import { cn } from "../../lib/utils";

const Benefits = ({ benefits, className }) => {
  return (
    <div className={cn("grid grid-cols-3 gap-9", className)}>

      <div className='col-span-2 relative pl-24 pr-14 py-8 min-h-[250px] flex justify-center items-center rounded-[30px] shadow-cardGray overflow-hidden'>
          <p className="relative z-10 text-[22px] text-white text-center leading-[30px] font-medium">
            {benefits.banner.text}
          </p>

          <img 
            src={benefits.banner.image} 
            alt="" 
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
      </div>

      {benefits.items.map((item, index) => (
        <div key={index} className="pl-9 pr-5 pt-3 pb-7 min-h-[250px] rounded-[30px] bg-[var(--cultured)] shadow-cardGray">
          <div className="flex justify-center items-center w-[65px] h-[65px]">
            {item.icon}
          </div>

          <div className="mt-6 text-[15px] text-[var(--granite-gray)] leading-[30px]">
            {item.text}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Benefits;
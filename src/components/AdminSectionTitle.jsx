import { cn } from "../lib/utils";

const  AdminSectionTitle = ({title, className, children}) => (
  <div className={cn("relative flex items-start w-full after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[1px] after:h-[1px] after:bg-[#EBEBEB]", className)}>
  <h2 className='relative pl-7 pr-9 pb-5 text-[var(--granite-gray)] text-lg font-medium max-1024:pl-4 max-1024:pr-5 max-1024:pb-3 after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-[var(--granite-gray)] after:z-10'>
    {title}
  </h2>

  {children}
</div>
)

export default AdminSectionTitle;
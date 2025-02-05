import Button from "../Button";

const PlanCard = ({planData}) => {
  return (
    <div className="px-[50px] pt-[18px] pb-8 flex justify-between gap-10 w-full bg-[#F5F8FA] bg-opacity-70 rounded-[30px] hover:bg-opacity-100 transition ease-out duration-200">
      <div className="w-[45%] pt-4 pb-2 flex flex-col items-center">
        {planData.icon}

        <h3 className="mt-3 text-2xl text-[var(--eerie-black)] font-semibold">{planData.title}</h3>

        <ul className="mt-5 mb-4 space-y-6 list-disc">
          {planData.description_items.map((item, index) => (
            <li key={index} className="text-lg leading-[30px] text-[var(--granite-gray)]">
              {item}
            </li>
          ))}
        </ul>

        <Button variant="bordered" 
        className="mt-auto border-[var(--sandy-brown)] text-[var(--sandy-brown)] hover:bg-[var(--sandy-brown)] text-[17px] min-w-[262px] min-h-[60px]">Zamów demo</Button>
      </div>

      <div className="w-[55%]">
        {planData.items.map((item, index) => (
          <div key={index} className="pt-[47px] pb-[42px] pr-[50px] pl-7 bg-[#F5F8FA] bg-opacity-70 rounded-[30px] shadow-cardGray">
            {item.icon}
            <div>
              <h4>{item.title}</h4>

              <ul>
                {item.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanCard;

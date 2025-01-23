const steps = [
  '1. Określ obszar do rozwoju',
  '2. Wybierz temat rozmowy',
  '3. Rozmawiaj swobodnie',
  '4. Otrzymaj szczegółowy raport z pozytywnym i konstruktywnym feedbackiem',
];

const HowToSteps = () => {
  return (
    <div className="max-w-[533px] mt-9 bg-[var(--cultured)] p-7 pl-[75px] rounded-[30px] shadow-blockShadow">
      <ol
        className="relative space-y-[98px] 
      before:content-['']
      before:w-1.5
      before:h-[90%]
      before:bg-[var(--light-silver)]
      before:absolute
      before:top-0
      before:left-[11px]
      "
      >
        {steps.map((step, index) => (
          <li
            key={index}
            className="relative flex items-center gap-[31px] text-[20px] leading-[25px] text-[var(--eerie-black)] font-medium"
          >
            <div
              className="flex shrink-0 justify-center items-center w-7 h-7 rounded-full bg-[var(--light-silver)]"
              role="presentation"
            >
              <div className="w-3 h-3 rounded-full bg-[var(--jungle-green)] "></div>
            </div>
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default HowToSteps;

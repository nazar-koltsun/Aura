import AdvantageSection from '../AdvantageSection';

import AdvantageOneImage from '../../../../assets/images/landing/advantageOne.svg';
import AdvantageOneMob from '../../../../assets/images/landing/advantageOneMob.svg';
import AdvantageTwoImage from '../../../../assets/images/landing/advantageTwo.svg';
import SeparatorBottomImage from '../../../../assets/images/landing/separator-bottom.svg' 

const advantages = [
  {
    title: 'Przewaga szkoleń AI vs Tradycyjne szkolenia',
    image: {
      desktop: AdvantageOneImage,
      mobile: AdvantageOneMob,
    },
    description: (
      <p className='mt-6'>
        <b>Szkolenie nowAURA</b> zapewnia dostęp do zaawansowanych,
        spersonalizowanych scenariuszy, w których avatar AI dynamicznie
        dostosowuje się do reakcji użytkownika. To forma treningu 1 na 1
        (coaching), która pozwala na natychmiastowy feedback i precyzyjne
        dopasowanie tempa oraz treści do potrzeb uczącego się.{' '}
      </p>
    ),
    add_desctiption: (
      <p>
        Takie indywidualne podejście jest praktycznie niemożliwe w grupowym
        treningu z instruktorem lub wiązałoby się z wysokimi kosztami, gdyby
        miało być zapewnione każdej osobie indywidualnie. Badania wskazują, że
        personalizacja może być bardziej skuteczna niż tradycyjne metody,
        zwiększając efektywność nauki i przynosząc ok.{' '}
        <b>17% większy roczny wzrost przychodów.</b>
        <a href="https://google.com/" className='block mt-6 underline text-[9px]'>
          21 ROI Stats on Sales Coaching: Can Your Organization Afford NOT to Hire a Sales Coach?
        </a>
      </p>
    ),
  },
  {
    title: 'Skuteczność AI w nauce umiejętności miękkich',
    image: {
      desktop: AdvantageTwoImage,
      mobile: AdvantageOneMob,
    },
    description: (
      <p className='mt-6'>
        <b>Szkolenia nowAURA</b> są dostępne w każdej chwili, a ich efektywność
        pozwala rozwijać się indywidualnie, bez potrzeby organizowania czasu i
        zasobów na grupowe spotkania.
      </p>
    ),
    add_desctiption: (
      <div>
        <b>Narzędzia AI generują szczegółowe raporty po każdej sesji,</b> 
        <p>
          co pozwala śledzić postępy na bieżąco i natychmiast wdrażać zmiany. Na
          podstawie raportu możesz od razu przeprowadzić kolejną rozmowę, by
          sprawdzić, jak nowe podejście działa w praktyce. Każdy raport zawiera
          analizę komunikatów, uwzględniając zarówno mocne strony, jak i obszary
          do doskonalenia, dzięki czemu masz pełny obraz swoich kompetencji.
        </p>
        <p className="mt-8">
          Co ważne, postępy można <b>obiektywnie</b> mierzyć, co jest trudniejsze w
          przypadku szkoleń z konsultantem, gdzie każda rozmowa podlega jego
          subiektywnej ocenie - tutaj natomiast masz dostęp do spójnych,
          opartych na danych wyników.
        </p>
      </div>
    ),
  },
];

const AdvantagesSections = ({ className }) => {
  return (
    <article>
      <div className="mt-8 mb-14 space-y-10 max-1024:space-y-5 px-[150px] max-1240:px-[70px] max-1024:px-4 max-960:mb-12 max-700:mb-10">
        {advantages.map((advantage, index) => (
          <AdvantageSection key={index} advantage={advantage} index={index} />
        ))}
      </div>

      <img src={SeparatorBottomImage} className="w-full" alt="" />
    </article>
  );
};

export default AdvantagesSections;

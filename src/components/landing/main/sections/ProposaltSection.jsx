import Button from '../../../../components/Button';
import Subtitle from '../../../landing/Subtitle';

import SectionTitle from '../../../landing/SectionTitle';
import ProposalList from '../../../landing/main/ProposalList';

import SeparatorTopImg from '../../../../assets/images/landing/separator-top.svg';
import SeparatorBottomImage from '../../../../assets/images/landing/separator-bottom.svg';

const ProposaltSection = () => {
  return (
    <section>
      <img
        className="w-full"
        alt=""
        role="presentation"
        src={SeparatorTopImg}
      />

      <div className="flex flex-col items-center px-[70px] max-1024:px-4">
        <Subtitle title="Oferta" className="mt-[52px] max-1024:mt-9" />

        <SectionTitle title="Wybierz ofertę dla siebie" className="mt-3" />

        <ProposalList className="mt-9 max-1024:mt-14" />

        <div className="mt-[82px] mb-[58px] flex flex-col items-center max-1024:mt-9 max-1024:mb-9">
          <p className="text-center text-[var(--eerie-black)] text-[26px] leading-[30px] max-1024:text-xl">
            Sprawdź, spersonalizowaną ofertę dla Twoich potrzeb.
          </p>

          <div className="mt-6 flex justify-center gap-8 max-1024:gap-3 max-1024:flex-col">
            <Button
              to="#"
              className="min-w-[193px] bg-[var(--sandy-brown)] hover:bg-[#DE8640]"
            >
              Klient firmowy
            </Button>
            <Button to="#" className="min-w-[193px] px-4">
              Klient indywidualny
            </Button>
            <Button
              to="#"
              className="min-w-[193px] bg-[var(--rocket-metallic)] hover:bg-[var(--eerie-black)]"
            >
              Klient JST
            </Button>
          </div>
        </div>
      </div>

      <img
        className="w-full"
        alt=""
        role="presentation"
        src={SeparatorBottomImage}
      />
    </section>
  );
};

export default ProposaltSection;

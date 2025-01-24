import Subtitle from '../../Subtitle';
import SectionTitle from '../../SectionTitle';
import ClientCards from '../ClientCards';

const ClientCardsSection = () => {
  return (
    <section className="flex flex-col items-center pt-11 px-[70px] pb-[170px] max-1024:pt-7 max-1024:pb-7 max-1024:px-0">
      <div className="flex flex-col items-center max-1024:px-4">
        <Subtitle title="Rozpocznij za Darmo" />

        <SectionTitle title="Co możemy dla Ciebie zrobić?" className="mt-3" />

        <p className="mt-5 text-[18px] leading-[30px] text-[var(--granite-gray)]">
          Sprawdź, które rozmowy są dla Ciebie.
        </p>

        <p className="mt-7 max-w-[435px] leading-[27px] text-[var(--granite-gray)] text-center max-1024:hidden">
          Przykładowy tekst.Przykładowy tekst.Przykładowy tekst.Przykładowy
          tekst.Przykładowy tekst.Przykładowy tekst.Przykładowy tekst.
        </p>
      </div>

      <ClientCards />
    </section>
  );
};

export default ClientCardsSection;

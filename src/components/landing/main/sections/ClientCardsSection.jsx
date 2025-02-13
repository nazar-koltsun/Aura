import Subtitle from '../../Subtitle';
import SectionTitle from '../../SectionTitle';
import ClientCards from '../ClientCards';

const ClientCardsSection = () => {
  return (
    <section className="flex flex-col items-center pt-11 pb-[50px] px-[70px] max-1024:pt-7 max-1024:pb-0 max-1024:px-0 overflow-hidden">
      <div className="flex flex-col items-center max-1024:px-4">
        <Subtitle title="Rozpocznij za Darmo" />

        <SectionTitle title="Co możemy dla Ciebie zrobić?" className="mt-3" />

        <p className="mt-5 text-[18px] leading-[30px] text-[var(--granite-gray)]">
          Sprawdź, które rozmowy są dla Ciebie.
        </p>
      </div>

      <ClientCards />
    </section>
  );
};

export default ClientCardsSection;

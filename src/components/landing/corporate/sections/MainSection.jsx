import PageH1 from '../../PageH1';
import Button from '../../../Button';

const MainSection = () => {
  return (
    <section className="px-10 pt-20 pb-24">
      <div className='max-w-[740px] ml-auto flex flex-col justify-center items-center'>
        <PageH1>
          <p>Platforma</p>
          <p className="inline-block bg-gradient-to-r from-[var(--sandy-brown)] from-0%  via-[var(--jungle-green)] via-54% to-[var(--celadon-green)] to-90% bg-clip-text text-transparent">
            kompetencji
          </p>
          <p>miękkich dla firm.</p>
        </PageH1>

        <p className="mt-11 text-[18px] leading-[30px] text-center text-[var(--granite-gray)] font-medium">
          Odkryj nowy wymiar szkoleń interpersonalnych, które zbudują realną&nbsp;przewagę&nbsp;rynkową Twojej firmy.
        </p>

        <Button
          path={'#'}
          className="inline-flex min-w-[250px] mt-[74px] py-4 px-9 text-[17px] bg-[var(--sandy-brown)] hover:bg-[#DE8640] max-1024:mt-4 max-1024:min-w-[220px]"
        >
          Rozpocznij naukę
        </Button>
      </div>
    </section>
  );
};

export default MainSection;

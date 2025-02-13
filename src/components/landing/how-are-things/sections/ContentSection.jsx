import Card from '../../../Card';

const data = [
  {
    title: 'Wybierz ofertę',
    descriptions: [
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur (the “Sites”).
      </p>,
    ],
    add_desc: '',
    href: 'choose-offer',
  },
  {
    title: 'Wybierz rodzaj klienta: prywatny lub firmowy',
    descriptions: [
      <p>
        We collect certain personal information about visitors and users of our
        Sites.{' '}
        <a href="http://rainbowit.net/themes/imroz">
          http://rainbowit.net/themes/imroz
        </a>
      </p>,
      <p>
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
        suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
        autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
        nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur.
      </p>,
      <p>
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
        suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
        autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
        nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur.
      </p>,
    ],
    href: 'choose-customer',
  },
];

const SectionTitle = ({ title }) => {
  return (
    <h2 className="text-2xl text-[var(--eerie-black)] font-bold">{title}</h2>
  );
};

const ContentSection = () => {
  const sidebarLinks = data.map((item) => ({
    title: item.title,
    href: item.href,
  }));
  console.log('sidebarLinks', sidebarLinks);

  return (
    <article className="px-20 py-6 flex gap-12">
      <Card className="pl-5 pr-4 py-6 w-[330px] flex-shrink-0 rounded-[30px] shadow-blockShadow">
        <SectionTitle title="Spis treści" />

        <div className="flex flex-col">
          {sidebarLinks.map((link, index) => (
            <a key={index} href={'#' + link.href}>
              {link.title}
            </a>
          ))}
        </div>
      </Card>

      <div className='space-y-52'>
        {data.map((item, index) => (
          <div key={index} id={`${item.href}`}>
            <SectionTitle title={index + 1 + '. ' + item.title} />
            {item.descriptions.map((description, index) => (
              <div key={index} className='inline-flex gap-1'>
                {index + 1}. {description}
              </div>
            ))}
          </div>
        ))}
      </div>
    </article>
  );
};

export default ContentSection;

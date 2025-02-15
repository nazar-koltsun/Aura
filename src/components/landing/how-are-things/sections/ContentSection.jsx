import { useState, useEffect, useRef } from 'react';
import { cn } from '../../../../lib/utils';
import Card from '../../../Card';
import ContentItem from '../ContentItem';
import SectionTitle from '../SectionTitle';

import SeparatorBottomSimple from '../../../../assets/images/landing/separator-bottom.svg';

const SPACE_FROM_TOP_OF_VIEWPORT = 50;

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
        suscipit laboriosam.
      </p>,
      <p>
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
        suscipit laboriosam.
      </p>,
    ],
    href: 'choose-customer',
  },
  {
    title: 'Zarejestruj się',
    descriptions: [
      <p>
        I must explain to you how all this mistaken idea of denouncing pleasure
        and praising pain was born and I will give you a complete account of the
        system, and expound the actual teachings.
      </p>,
      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident
        similique sunt in culpa qui officia deserunt mollitia animi, id est
        laborum et dolorum fuga.
      </p>,
      <p>
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
        suscipit laboriosam.
      </p>,
    ],
    href: 'logup',
  },
  {
    title: 'Sprawdź dostępne pakiety rozmów',
    descriptions: [
      <p>
        I must explain to you how all this mistaken idea of denouncing pleasure
        and praising pain was born and I will give you a complete account of the
        system, and expound the actual teachings.
      </p>,
      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident
        similique sunt in culpa qui officia deserunt mollitia animi, id est
        laborum et dolorum fuga.
      </p>,
      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident
        similique sunt in culpa qui officia deserunt mollitia animi, id est
        laborum et dolorum fuga.
      </p>,
    ],
    href: 'check-available',
  },
];

const ContentSection = () => {
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      let newActiveIndex = activeNavIndex;

      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= SPACE_FROM_TOP_OF_VIEWPORT) {
            newActiveIndex = index;
          }
        }
      });

      if (newActiveIndex !== activeNavIndex) {
        setActiveNavIndex(newActiveIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeNavIndex]);

  return (
    <article>
      <div className="px-20 flex items-start gap-12 max-1024:px-4 max-1024:gap-6">
        {/* Sidebar Navigation */}
        <Card className="pl-5 pr-4 py-6 mt-6 sticky top-6 w-[330px] flex-shrink-0 rounded-[30px] shadow-blockShadow max-1240:w-[250px] max-700:hidden">
          <SectionTitle title="Spis treści" />
          <div className="mt-4 flex flex-col">
            {data.map((item, index) => (
              <a
                key={index}
                href={'#' + item.href}
                onClick={() => setActiveNavIndex(index)}
                className={cn(
                  'text-xl leading-[35px] text-[var(--granite-gray)] transform transition duration-200 ease-in hover:text-[var(--jungle-green)] max-1024:text-lg max-1024:leading-[30px]',
                  activeNavIndex === index &&
                    'text-[var(--jungle-green)] font-semibold'
                )}
              >
                {index + 1}. {item.title}
              </a>
            ))}
          </div>
        </Card>

        {/* Main Content */}
        <div>
          {data.map((item, index) => (
            <ContentItem
              key={index}
              id={item.href}
              title={`${index + 1}. ${item.title}`}
              descriptions={item.descriptions}
              sectionRef={(el) => (sectionRefs.current[index] = el)}
            />
          ))}
        </div>
      </div>

      {/* Separator */}
      <img
        src={SeparatorBottomSimple}
        role='presentation'
        alt=""
        className="mt-10 w-full"
      />
    </article>
  );
};

export default ContentSection;

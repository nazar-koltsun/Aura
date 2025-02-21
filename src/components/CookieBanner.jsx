import { cn } from '../lib/utils';
import { useState } from 'react';
import Button from './Button';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(true);

  const [cookies, setCookies] = useState({
    niezbędne: true,
    analityczne: false,
    marketingowe: false,
  });

  const onDeclineAll = () => {
    setCookies({
      niezbędne: true,
      analityczne: false,
      marketingowe: false,
    });

    setTimeout(() => {
      setShowBanner(false);
    }, 800);
  };

  const onAcceptAll = () => {
    setCookies({
      niezbędne: true,
      analityczne: true,
      marketingowe: true,
    });

    setTimeout(() => {
      setShowBanner(false);
    }, 800);
  };

  const toggleCookie = (type) => {
    setCookies((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const buttonsBaseClasses = 'text-sm px-5 py-[8px] shadow-cardGray';

  if (!showBanner) return null;

  return (
    <div className="animate-cookiesBannerAnim fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-10 py-7 shadow-premiumShadow rounded-[20px] w-[calc(100%-32px)] max-w-[2560px] z-50 opacity-0
    max-1400:px-5 max-1400:py-4 max-700:px-3">
      <h2 className="text-[26px] text-[var(--granite-gray)] font-bold max-1400:text-xl">
        Pliki cookies
      </h2>

      <div className="mt-4 text-[17px] text-[var(--sonic-silver)] space-y-4 
      max-1400:mt-2 max-1400:space-y-2 max-1400:text-[15px] max-700:h-[300px] overflow-y-auto">
        <p>
          <b>nowAURA Sp. z o.o. używa plików cookie</b> na stronie{' '}
          <a className="underline" href="https://www.nowaura.com">
            www.nowaura.com
          </a>
          , które są zapisywane w Twojej przeglądarce. Dzięki nim możemy lepiej
          dopasować nasze serwisy do Twoich potrzeb aby ułatwić Ci korzystanie z
          naszej strony i pokazywać bardziej dopasowane treści. Dane te możemy
          łączyć z pozostałymi danymi, jakie mamy na Twój temat.
        </p>

        <b className="block">Twoje wybory</b>

        <p>
          <span className="pl-4">•</span> Kliknij <b>„Akceptuj wszystkie”</b>,
          aby zgodzić się na wszystkie pliki cookie <br /> Zgadzasz się tym
          samym na zapisywanie plików cookie, które umożliwią nam wyświetlanie
          Ci spersonalizowanych reklam naszych produktów i usług.
        </p>

        <p>
          <span className="pl-4">•</span> Kliknij <b>„Odrzuć wszystkie”</b>, aby
          zaakceptować tylko niezbędne pliki cookie.
        </p>

        <p>
          <span className="pl-4">•</span> W każdej chwili możesz{' '}
          <b>wycofać zgodę</b>.
          <br />
          Wycofanie zgody nie wpływa na zgodność z prawem przetwarzania, którego
          dokonano na podstawie zgody przed jej wycofaniem.
        </p>

        <p>
          Więcej informacji o rodzajach plików cookie, ich działaniu i sposobach
          zarządzania znajdziesz w naszej [Polityce plików].
        </p>
      </div>

      <div className="mt-7 flex items-center gap-4 max-1400:mt-4">
        {['niezbędne', 'analityczne', 'marketingowe'].map((type) => (
          <label
            key={type}
            className="flex items-center text-[17px] text-[var(--sonic-silver)] font-medium max-1400:text-[15px] max-700:flex-col-reverse max-700:items-start"
          >
            <input
              type="checkbox"
              checked={type || false}
              disabled={type === 'niezbędne'}
              onChange={() => {
                toggleCookie(type);
              }}
              className="sr-only opacity-0"
            />

            <div
              className={cn(
                'mr-3 w-[43px] h-[17px] flex items-center bg-[#beb4b4] rounded-full p-0.5 cursor-pointer transition-colors',
                cookies[type] && 'bg-[var(--jungle-green)]'
              )}
            >
              <div
                className={cn(
                  'bg-white w-[14px] h-[14px] rounded-full shadow-md transform transition-transform',
                  cookies[type] && 'translate-x-[25px]'
                )}
              ></div>
            </div>

            {type[0].toUpperCase() + type.slice(1)}
          </label>
        ))}
      </div>

      <div className="mt-10 flex justify-between text-sm max-1400:mt-5 max-700:flex-col max-700:justify-center max-700:gap-4">
        <Button
          path="/polityka-prywatnosci"
          className={cn('bg-[#beb4b4] hover:bg-[#848484]', buttonsBaseClasses)}
        >
          Dowiedz się więcej
        </Button>

        <div className="flex gap-4 max-700:justify-stretch max-520:flex-col">
          <Button
            className={cn(
              'bg-[var(--sandy-brown)] hover:bg-[#DE8640] max-700:w-full',
              buttonsBaseClasses
            )}
            onClick={onDeclineAll}
          >
            Odrzuć wszystkie
          </Button>

          <Button
            className={cn(
              'bg-[var(--sandy-brown)] hover:bg-[#DE8640] max-700:w-full',
              buttonsBaseClasses
            )}
            onClick={onAcceptAll}
          >
            Akceptuj wszystkie
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

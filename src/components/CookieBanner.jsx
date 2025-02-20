import { useState } from 'react';

const CookieBanner = () => {
  const [cookies, setCookies] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  const toggleCookie = (type) => {
    setCookies((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-10 py-7 shadow-premiumShadow rounded-[20px] w-[calc(100%-32px)] max-w-[2560px] z-50">
      <h2 className="text-[26px] text-[var(--granite-gray)] font-bold">Pliki cookies</h2>

      <p className="text-sm text-gray-600 mt-2">
        Zarządzaj swoimi preferencjami dotyczącymi plików cookie.
      </p>

      <div className="mt-4 space-y-3">
        {['necessary', 'analytics', 'marketing'].map((type) => (
          <label
            key={type}
            className="flex justify-between items-center text-sm font-medium"
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
            <input
              type="checkbox"
              checked={cookies[type]}
              onChange={() => toggleCookie(type)}
              className="hidden"
            />
            <div
              className={`w-10 h-5 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-colors ${
                cookies[type] ? 'bg-green-500' : ''
              }`}
              onClick={() => toggleCookie(type)}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                  cookies[type] ? 'translate-x-5' : ''
                }`}
              ></div>
            </div>
          </label>
        ))}
      </div>

      <div className="mt-6 flex justify-between text-sm">
        <button className="text-blue-500">Dowiedz się więcej</button>
        <button
          className="text-gray-600"
          onClick={() =>
            setCookies({ necessary: true, analytics: false, marketing: false })
          }
        >
          Odrzuć wszystkie
        </button>
        <button
          className="text-green-600 font-semibold"
          onClick={() => alert('Cookies accepted!')}
        >
          Akceptuj wszystkie
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;

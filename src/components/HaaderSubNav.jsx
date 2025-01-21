import { NavLink } from 'react-router-dom';

const HaaderSubNav = ({ submenu }) => {
  return (
    <div className="hidden group-hover:block absolute top-full -right-4 min-w-60 pt-9 max-960:static max-960:block max-960:pt-0">
      <div className="bg-[var(--cultured)] shadow-blockShadow rounded-[30px] px-7 py-3.5 max-960:shadow-none max-960:rounded-none max-960:border-t max-960:border-t-[var(--cultured)]}">
        <span className="block text-sm text-[var(--metallic-silver)]">
          {submenu.title}
        </span>

        <ul className="mt-3 pl-2.5 space-y-3">
          {submenu.items.map((item) => (
            <li key={item.title}>
              <NavLink
                key={item.title}
                to={item.path}
                className="text-lg text-[var(--granite-gray)] hover:text-[var(--sandy-brown)] transition duration-200 ease-in-out max-960:text-base"
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HaaderSubNav;
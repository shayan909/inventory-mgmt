import { tw } from 'twind';
import { useState } from 'react';
import Button from '@/components/button';

interface IMenuButton {
  toggleMenu: React.MouseEventHandler<HTMLButtonElement>;
  showMenu: boolean;
}

type Link = {
  label: string;
  href: string;
};

const links: Link[] = [
  {
    label: `Features`,
    href: `#features`,
  },
  {
    label: `Use Cases`,
    href: `#useCases`,
  },
  {
    label: `Why Choose Us`,
    href: `#whyUs`,
  },
  {
    label: `FAQ`,
    href: `#faq-section`,
  },
];

// const secondaryLinks: Link[] = [
//   {
//     label: `Contact sales`,
//     href: `/`,
//   },
//   {
//     label: `Log in`,
//     href: `/`,
//   },
//   {
//     label: `Get Started`,
//     href: `/`,
//   },
// ];

const MenuButton = ({ toggleMenu, showMenu }: IMenuButton) => (
  <button
    type="button"
    aria-controls="mobile-menu"
    aria-expanded={showMenu}
    onClick={toggleMenu}
    className={tw(`p-2 text-gray-400`)}
  >
    <span className={tw(`sr-only`)}>Open menu</span>
    {showMenu ? (
      <svg
        className={tw(`h-6 w-6`)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ) : (
      <svg
        className={tw(`h-6 w-6`)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    )}
  </button>
);

const MobileMenu = () => (
  <div className={tw(`md:hidden`)}>
    <div className={tw(`px-2 pt-2 pb-3 space-y-1 sm:px-3`)}>
      {links.map((link: Link) => (
        <a
          key={link.label}
          href={link.href}
          onClick={(e) => handleSmoothScroll(e, link.href)}
          className={tw(`text-gray-500 block px-3 py-2 text-base font-medium`)}
        >
          {link.label}
        </a>
      ))}
    </div>
    {/* <div className={tw(`pt-4 pb-3 border-t border-gray-400`)}>
      <div className={tw(`px-2 space-y-1`)}>
        {secondaryLinks.map((link: Link) => (
          <a
            key={`mobile-${link.label}`}
            href={link.href}
            className={tw(`block px-3 py-2 text-base font-medium text-gray-500`)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div> */}
  </div>
);

const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const targetId = href.substring(1);
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
};
const Navigation = ({ setIsOpenContactUs }) => {
  const handleOpenContactUs = () => {
    setIsOpenContactUs(true);
    console.log('hh');
  };
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav className={tw(`bg-white`)}>
      <div className={tw(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)}>
        <div className={tw(`flex items-center justify-between h-24`)}>
          <div className={tw(`flex items-center`)}>
            <div className={tw(`flex-shrink-0`)}>
              <img className={tw(`h-8 w-28 mr-4`)} src="loop.png" alt="logo" width={48} height={48} />
            </div>
            <div className={tw(`hidden md:block`)}>
              <div className={tw(`ml-10 flex items-baseline space-x-4`)}>
                {links.map((link: Link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className={tw(`text-gray-500 hover:text-gray-600 px-3 py-2 rounded-md font-medium`)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className={tw(`hidden md:block`)}>
            <div className={tw(`ml-4 flex items-center md:ml-6`)}>
              <button
                style={{ backgroundColor: 'rgb(19,3,86)' }}
                className={tw(`text-white text-md font-small py-2 px-5 rounded-full`)}
                onClick={handleOpenContactUs}
              >
                Get Started{' '}
              </button>
            </div>
          </div>
          <div className={tw(`-mr-2 flex md:hidden`)}>
            <MenuButton showMenu={showMenu} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
      {showMenu ? <MobileMenu /> : null}
    </nav>
  );
};

export default Navigation;

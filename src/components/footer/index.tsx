import { tw } from 'twind';
import Button from '@/components/button';

// const productLinks = [`Features`, `Customers`, `Platform`, `Pricing`, `Enterprise`, `What's new?`];
// const aboutLinks = [`About Us`, `Careers`, `Leadership`, `Blog`, `Events`, `Press`];
// const resourceLinks = [
//   `Get started`,
//   `Guides`,
//   `Tools`,
//   `Case studies`,
//   `Solutions`,
//   `FAQs`,
//   `Help Center`,
//   `Training`,
//   `Other resources`,
// ];

const Footer = () => (
  <footer className={tw(`bg-white border-t border-gray-400 pt-14 pb-16`)}>
    <div className={tw(`max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap`)}>
      <div className={tw(`mb-14 flex items-center w-full`)}>
        <img className={tw(`h-8 w-28 mr-4`)} src="loop.png" alt="logo" width={48} height={48} />
      </div>
      <div className={tw(`w-full lg:w-1/2`)}>
        <ul className={tw(`text-lg font-light flex flex-wrap w-full`)}>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
            <div>
              <h4 className={tw(`text-gray-900 text-base font-bold mb-1 cursor-pointer`)}>
                <a href="#banner">Home</a>
              </h4>
              {/* <ul>
                {productLinks.map((link) => (
                  <li className={tw(`text-gray-800 text-sm font-medium leading-6`)} key={link}>
                    <a href="/">{link}</a>
                  </li>
                ))}
              </ul> */}
            </div>
          </li>
        </ul>
      </div>
      <div className={tw(`w-full lg:w-1/2 mt-12 lg:mt-0`)}>
        {/* <div className={tw(`border border-gray-400 rounded py-5 px-4`)}>
          <div className={tw(`flex w-full`)}>
            <input
              aria-label="email address"
              type="text"
              className={tw(`border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`)}
              placeholder="Enter your email"
            />
            <Button>Subscribe</Button>
          </div>
        </div> */}
      </div>
      <div className={tw`mt-12 md:mt-10`}>
        <div className={tw`text-xs text-gray-400`}>
          @ 2024 WithLoop |{' '}
          <a href="/privacy-policy" className={tw`hover:text-white`}>
            Privacy Policy
          </a>{' '}
          |{' '}
          <a href="/terms-of-use" className={tw`hover:text-white`}>
            Terms of Use
          </a>{' '}
          |{' '}
          <a href="/cookie-policy" className={tw`hover:text-white`}>
            Cookie Policy
          </a>{' '}
          |{' '}
          <a href="/cookie-settings" className={tw`hover:text-white`}>
            Cookie Settings
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

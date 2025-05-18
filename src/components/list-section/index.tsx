import { tw } from 'twind';
import Image from 'next/image';
import FadeInSection from '@/components/FadeInSection';

const contentData = [
  {
    title: `Know your inventory inside out`,
    description: `Easily manage and reconcile inventory from production through multiple warehouses to customers including returns. Get alerts for low stocks and defective items.`,
    image: '/images/Know-your-inventory.webp',
  },
  {
    title: `Pick, pack, and ship in minutes`,
    description: `Automate order processing from picking to delivery from multiple locations with just a few clicks. Reconcile orders with alerts for mismatched items.`,
    image: '/images/Pack-and-ship.webp',
  },
  {
    title: `Manage returns without breaking a sweat`,
    description: `Manage full or partial order returns right from the dashboard without manual intervention.`,
    image: '/images/Invoice-and-billing.webp',
  },
  {
    title: `Pinpoint each SKU`,
    description: `Know exactly where each SKU is throughout your supply chain with QR, Barcode, or RFID-based tagging.`,
    image: '/images/Pinpoint-SKU.webp',
  },
  {
    title: `Manage invoice and billing seamlessly`,
    description: `Our inventory management seamlessly integrates with our invoicing system, providing a streamlined billing experience for both you and your clients.`,
    image: '/images/Returns.webp',
  },
  {
    title: `Tailored dashboard with custom insights`,
    description: `Tailor your dashboard to view and generate custom reports. Analyse trends and insights to inform strategic decision-making.`,
    image: '/images/Tailored-dashboard.webp',
  },
];

const ListSection = ({ setIsOpen }) => (
  <FadeInSection>
    <section id="features" className={tw(`lg:py-28 pt-28 overflow-hidden`)}>
      <div className={tw(`mb-16 text-center`)}>
        <h4 className={tw(`text-base font-semibold tracking-wide uppercase`)}>Features</h4>
        <p className={tw(`mt-0 text-4xl lg:text-6xl font-bold tracking-tight text-gray-900`)}>How we change the game</p>
      </div>
      <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
        {contentData.map((item, index) => (
          <div
            key={index}
            className={tw(`flex flex-wrap -mx-8 items-center mb-16`)}
            style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}
          >
            <div className={tw(`w-full lg:w-1/2 px-8`)}>
              <ul className={tw(`space-y-12`)}>
                <li className={tw(`flex -mx-4`)}>
                  <div className={tw(`px-4`)}>
                    <span
                      className={tw(`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-blue-50 text-blue-500`)}
                    >
                      {index + 1}
                    </span>
                  </div>
                  <div className={tw(`px-4`)}>
                    <h3 className={tw(`my-4 text-xl font-semibold`)}>{item.title}</h3>
                    <p className={tw(`text-gray-500 leading-loose`)}>{item.description}</p>
                    <div className={tw(`flex justify-left`)}>
                      <button
                        style={{ backgroundColor: 'rgb(19,3,86)' }}
                        className={tw(`text-white text-md font-small py-2 px-5 mt-8 rounded-full`)}
                        onClick={() => setIsOpen(true)}
                      >
                        Get Started{' '}
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className={tw(`w-full lg:w-1/2 px-8`)}>
              <div className={tw(`lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0`)}>
                <Image src={item.image} width={500} height={500} alt="Picture of the author" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </FadeInSection>
);

export default ListSection;

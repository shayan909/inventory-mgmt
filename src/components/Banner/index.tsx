import Image from 'next/image';
import { tw } from 'twind';

interface BannerProps {
  setIsOpen: (value: boolean) => void;
}

const Banner: React.FC<BannerProps> = ({ setIsOpen }) => {
  return (
    <div id="banner">
      <div style={{ marginBottom: '-50px' }} className={tw`mx-auto max-w-7xl pt-20 sm:pb-24 px-6`}>
        <div className={tw`grid grid-cols-1 lg:grid-cols-12`}>
          <div className={tw`col-span-7 flex flex-col justify-evenly relative`}>
            <h1
              className={tw`text-midnightblue text-4xl md:text-[85px] text-left lg:text-start font-semibold leading-[1.33] pt-5`}
            >
              Grow your shelf confidence{' '}
            </h1>
            <h3 className={tw`text-black opacity-75 text-lg font-normal text-left lg:text-start pt-8`}>
              We make it easy for you to monitor and manage your inventory through <b>automation</b>, <b>integration</b>
              , and an&nbsp;
              <b>intuitive user experience</b>.
            </h3>
            <div className={tw`pt-8 mx-auto lg:mx-0`}>
              <button
                onClick={() => alert('true')}
                className={tw`text-white text-xl font-medium py-6 px-12 rounded-full transition duration-150 ease-in-out bg-electricblue hover:text-white hover:bg-blue`}
              >
                Get started
              </button>
            </div>
          </div>
          <div className={tw`col-span-5 flex justify-center`}>
            <Image src="/images/Hero-image.png" alt="nothing" width={600} height={200} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

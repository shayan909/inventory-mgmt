import { tw } from 'twind';
import { PaperAirplaneIcon } from '@heroicons/react/20/solid';
import FadeInSection from '@/components/FadeInSection';
import Image from 'next/image';

const Newsletter = ({ setIsOpen }) => {
  return (
    <FadeInSection>
      <div className={tw(`mb-20 relative z-3`)}>
        <div style={{ backgroundColor: 'rgb(19,3,86)' }} className={tw(`mx-auto max-w-2xl lg:max-w-7xl rounded-3xl`)}>
          <div className={tw(`grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-2 xl:gap-x-8`)}>
            {/* COLUMN-1 */}
            <div className={tw(`hidden lg:block`)}>
              <div className={tw(`float-right pt-12 relative`)}>
                <Image src="/images/Free-trial.webp" width={500} height={500} alt="Free trial" />
              </div>
            </div>

            {/* COLUMN-2 */}
            <div className={tw(`p-10 flex flex-col justify-center`)}>
              <h3 className={tw(`text-4xl md:text-5xl font-semibold mb-3 text-white`)}>Try our features for free!</h3>
              <ul className={tw(`text-base font-normal mb-7 text-white list-disc list-inside`)}>
                <li>No set up fee.</li>
                <li>Test our best features, tailored for manufacturing.</li>
                <li>Scale your operations.</li>
              </ul>
              <div className={tw(`flex justify-center`)}>
                <button
                  onClick={() => setIsOpen(true)}
                  className={tw(`bg-blue-300 text-black text-xl font-medium py-2 px-8 rounded-full`)}
                >
                  Get a free trial
                </button>
              </div>
              <p className={tw(`text-xs text-center text-white mt-4`)}>No credit card required upon signup.</p>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default Newsletter;

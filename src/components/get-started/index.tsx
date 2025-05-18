import { tw } from 'twind';
import FadeInSection from '@/components/FadeInSection';

const GetStarted = ({ setIsOpen }) => {
  return (
    <FadeInSection>
      <div className={tw(`mt-20 mb-20 relative z-3 flex justify-center items-center`)}>
        <div
          style={{
            backgroundColor: 'rgb(19,3,86)',
          }}
          className={tw(`w-full max-w-[80rem] mx-auto rounded-3xl p-6 lg:p-10 text-center`)}
        >
          <div className={tw(`max-w-md mx-auto`)}>
            <h4 className={tw(`text-base text-white font-semibold tracking-wide mb-2`)}>Get Started</h4>
            <h3 className={tw(`text-4xl md:text-5xl font-semibold mb-3 text-white`)}>
              Ready to level up your inventory management?
            </h3>
            <p className={tw(`text-base font-normal mb-7 text-white`)}>
              Try our cutting-edge inventory management solution, built to fit your manufacturing needs.
            </p>
            <div className={tw(`flex justify-center`)}>
              <button
                onClick={() => setIsOpen(true)}
                className={tw(`bg-blue-300 text-black text-xl font-medium py-2 px-8 rounded-full`)}
              >
                Talk to us
              </button>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default GetStarted;

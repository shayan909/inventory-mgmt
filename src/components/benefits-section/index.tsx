import { tw } from 'twind';
import { CheckCircleIcon } from '@heroicons/react/20/solid';

const FeaturesSection = () => {
  const features = [
    { icon: CheckCircleIcon, title: 'End-to-end traceability' },
    { icon: CheckCircleIcon, title: 'Bespoke solution' },
    { icon: CheckCircleIcon, title: 'Dependable after sales services' },
    { icon: CheckCircleIcon, title: 'Workforce efficiency' },
  ];

  return (
    <div style={{ backgroundColor: 'rgb(19,3,86)' }} className={tw(` py-12`)}>
      <h2 className={tw(`mt-0 text-center text-4xl lg:text-6xl font-bold tracking-tight text-white mb-16`)}>
        What you get from us
      </h2>
      <div className={tw(`flex justify-around items-center max-w-7xl mx-auto px-4 lg:px-8`)}>
        {features.map((feature, index) => (
          <div key={index} className={tw(`flex flex-col items-center space-y-2`)}>
            <div className={tw(`rounded-full bg-white p-4 shadow-md`)}>
              <feature.icon className={tw(`h-6 w-6 text-black`)} />
            </div>
            <p className={tw(`text-center text-sm font-medium text-white`)}>{feature.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;

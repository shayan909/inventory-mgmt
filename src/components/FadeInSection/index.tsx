import { useInView } from 'react-intersection-observer';
import { tw } from 'twind';

const FadeInSection = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`fade-in ${inView ? 'show' : ''}`}>
      {children}
    </div>
  );
};

export default FadeInSection;

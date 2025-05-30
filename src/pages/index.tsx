import { useState } from 'react';
import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Banner from '@/components/Banner';
import ListSection from '@/components/list-section';
import CasesSection from '@/components/cases-section';
import FeatureSection from '@/components/feature-section';
import BenefitsSection from '@/components/benefits-section';
import FAQ from '@/components/FAQ';
import GetStarted from '@/components/get-started';
import Contactusform from '@/components/contact-us';
import Footer from '@/components/footer';

const Home = () => {
  const [isOpenContactUs, setIsOpenContactUs] = useState(false);

  return (
    <Page>
      <NextSeo title="Inventory Management" description="Manufacturing Inventory Management" />
      <Banner
        setIsOpen={function (value: boolean): void {
          throw new Error('Function not implemented.');
        }}
      />
      <main>
        <ListSection setIsOpen={setIsOpenContactUs} />
        <CasesSection />
        <FeatureSection />
        <BenefitsSection />
        <FAQ />
        <GetStarted setIsOpen={setIsOpenContactUs} />
        <Contactusform isOpen={isOpenContactUs} setIsOpen={setIsOpenContactUs} />
      </main>
      <Footer />
    </Page>
  );
};

export default Home;

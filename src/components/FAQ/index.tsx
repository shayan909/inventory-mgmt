'use client';
import { tw } from 'twind';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import FadeInSection from '@/components/FadeInSection';

const FAQ = () => {
  return (
    <FadeInSection>
      <div id="faq-section" className={tw(`mx-auto max-w-7xl py-24 lg:px-8 bg-faqblue rounded-2xl my-16 faq-bg`)}>
        <h3 className={tw(`text-xl font-semibold text-black text-center mb-6`)}>FAQ</h3>
        <h2 className={tw(`text-4xl lg:text-6xl font-semibold text-center text-black`)}>
          Frequently asked <br /> questions.
        </h2>
        <div className={tw(`w-full px-4 pt-16`)}>
          <div className={tw(`mx-auto w-full max-w-3xl rounded-2xl bg-white py-4 px-4 mb-4 border border-gray-300`)}>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={tw(
                      `flex w-full justify-between rounded-lg px-4 py-2 text-left text-lg font-medium focus:outline-none`,
                    )}
                  >
                    <span>How does your asset tracking system ensure data security?</span>
                    {open ? (
                      <ChevronUpIcon className={tw(`h-5 w-5 text-purple-500`)} />
                    ) : (
                      <ChevronDownIcon className={tw(`h-5 w-5 text-purple-500`)} />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className={tw(`px-4 pt-4 pb-2 text-base text-black font-normal opacity-100`)}>
                    Our cloud-based system uses encryption and regular security updates to protect your data. Only
                    authorised users have access, ensuring your information remains secure.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>

          <div className={tw(`mx-auto w-full max-w-3xl rounded-2xl bg-white py-4 px-4 mb-4 border border-gray-300`)}>
            <Disclosure as="div">
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={tw(
                      `flex w-full justify-between rounded-lg px-4 py-2 text-left text-lg font-medium focus:outline-none`,
                    )}
                  >
                    <span> Are there any limitations on the number of assets or users?</span>
                    {open ? (
                      <ChevronUpIcon className={tw(`h-5 w-5 text-purple-500`)} />
                    ) : (
                      <ChevronDownIcon className={tw(`h-5 w-5 text-purple-500`)} />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className={tw(`px-4 pt-4 pb-2 text-base text-black font-normal opacity-100`)}>
                    No, you can track unlimited assets and add as many users as you need. The system scales with your
                    business.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>

          <div className={tw(`mx-auto w-full max-w-3xl rounded-2xl bg-white py-4 px-4 mb-4 border border-gray-300`)}>
            <Disclosure as="div">
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={tw(
                      `flex w-full justify-between rounded-lg px-4 py-2 text-left text-lg font-medium focus:outline-none`,
                    )}
                  >
                    <span>Does the system support multi-location tracking?</span>
                    {open ? (
                      <ChevronUpIcon className={tw(`h-5 w-5 text-purple-500`)} />
                    ) : (
                      <ChevronDownIcon className={tw(`h-5 w-5 text-purple-500`)} />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className={tw(`px-4 pt-4 pb-2 text-base text-black font-normal opacity-100`)}>
                    Yes, it supports multi-location tracking. You can monitor assets across different locations right
                    from the dashboard.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>

          <div className={tw(`mx-auto w-full max-w-3xl rounded-2xl bg-white py-4 px-4 mb-4 border border-gray-300`)}>
            <Disclosure as="div">
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={tw(
                      `flex w-full justify-between rounded-lg px-4 py-2 text-left text-lg font-medium focus:outline-none`,
                    )}
                  >
                    <span>How customisable is your asset tracking system?</span>
                    {open ? (
                      <ChevronUpIcon className={tw(`h-5 w-5 text-purple-500`)} />
                    ) : (
                      <ChevronDownIcon className={tw(`h-5 w-5 text-purple-500`)} />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className={tw(`px-4 pt-4 pb-2 text-base text-black font-normal opacity-100`)}>
                    The system is highly customisable and agile. You can tailor it with custom fields, reports, and
                    workflows to fit your specific needs.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default FAQ;

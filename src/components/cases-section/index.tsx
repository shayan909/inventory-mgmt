import { useState } from 'react';
import { tw } from 'twind';
import Image from 'next/image';

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState('Furniture');

  const tabs = [
    {
      name: 'Furniture',
      content: {
        title: 'Furniture',
        points: [
          'Track and manage stock levels in real-time.',
          'Handle diverse materials (wood, fabric, metal).',
          'Customisable product configurations.',
          'Generate custom reports for production efficiency analysis.',
          'Segregate orders based on volume.',
        ],
        image: '/images/Furniture.webp',
      },
    },
    {
      name: 'Lubricants',
      content: {
        title: 'Lubricants',
        points: [
          'Track and manage stock levels in real time.',
          'Handle of diverse materials (wood, fabric, metal).',
          'Customisable product configurations.',
          'Implement alerts for low inventory levels.',
          'Integrate with supply chain partners for seamless logistics management.',
        ],
        image: '/images/Lubricants.webp',
      },
    },
    {
      name: 'Plastics and Packaging',
      content: {
        title: 'Plastics and Packaging',
        points: [
          'Track expiration dates and batch numbers for quality control.',
          'Automate reporting for audits and inspections.',
          'Manage temperature-sensitive inventory with customised dashboard.',
          'Track expiration dates and batch numbers for quality control.',
          'Implement secure access controls to protect sensitive data.',
        ],
        image: '/images/Plastics.webp',
      },
    },
  ];

  const renderContent = (content) => (
    <div className={tw`flex flex-col md:flex-row`}>
      <div className={tw`w-full md:w-1/2 p-4 md:p-9 mt-10 md:mt-0`}>
        <div className={tw`w-full h-64 flex items-center justify-center`}>
          <Image src={content.image} width={500} height={500} alt={content.title} />
        </div>
      </div>
      <div className={tw`w-full md:w-1/2 p-4 md:p-9`}>
        <h2 className={tw`text-2xl md:text-4xl font-semibold mb-4`}>{content.title}</h2>
        <ul className={tw`list-disc list-inside`}>
          {content.points.map((point, index) => (
            <li key={index} className={tw`text-base md:text-lg`}>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div id="useCases" style={{ marginTop: '-100px' }} className={tw`p-4 md:p-16`}>
      <div className={tw`p-4 md:p-10 flex justify-center`}>
        <h3 className={tw`text-2xl md:text-5xl font-semibold mb-3 text-black`}>Use Cases</h3>
      </div>
      <div className={tw`flex flex-col md:flex-row w-full`}>
        {tabs.map((tab, index) => (
          <div
            key={tab.name}
            style={{
              backgroundColor: activeTab === tab.name ? 'rgb(19,3,86)' : '',
              border: '1px solid rgb(19,3,86)',
              borderRadius: '4px',
            }}
            className={tw`flex
              flex-1 py-3 justify-center text-lg cursor-pointer font-semibold 
              ${activeTab === tab.name ? ' text-white outline-none' : 'text-gray-800'}
              ${index !== 0 ? 'mt-2 md:mt-0 md:ml-2' : ''}
            `}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className={tw`mt-10 md:mt-16`}>{renderContent(tabs.find((tab) => tab.name === activeTab).content)}</div>
    </div>
  );
};

export default TabsComponent;

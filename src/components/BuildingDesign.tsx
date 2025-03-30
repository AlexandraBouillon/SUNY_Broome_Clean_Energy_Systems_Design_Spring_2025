import React from 'react';
import './BuildingDesign.css';

const BuildingDesign = () => {
  const designFeatures = [
    {
      title: '🏛️ Passive Solar Design',
      description: 'Optimize building orientation and window placement for natural heating and cooling, reducing energy consumption through smart architectural choices.'
    },
    {
      title: '🧱 Sustainable Materials',
      description: 'Selection of energy-efficient and environmentally conscious building materials that minimize environmental impact and maximize building performance.'
    },
    {
      title: '🌱 Green Roofs',
      description: 'Implementation of green roofs for enhanced insulation, effective stormwater management, and reduction of urban heat island effects.'
    },
    {
      title: '🌡️ Climate Resilience',
      description: 'Design strategies that prepare buildings for climate change impacts while maintaining comfort and efficiency.'
    }
  ];

  return (
    <section className="building-design">
      <h2>Building Design & Orientation</h2>
      <div className="design-grid">
        {designFeatures.map((feature, index) => (
          <div key={index} className="design-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BuildingDesign; 
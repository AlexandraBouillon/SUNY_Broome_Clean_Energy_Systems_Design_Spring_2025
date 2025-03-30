import React from 'react';
import './CarbonReduction.css';

const CarbonReduction = () => {
  const reductionStrategies = [
    {
      title: '💡 Energy Efficiency',
      items: [
        'Energy Star certified computers and electronics',
        'Improved lighting systems with sensors and timers',
        'Better energy management procedures',
        'Purchase of renewable energy'
      ]
    },
    {
      title: '🌡️ Heating Systems',
      items: [
        'Improved heating and hot water controls',
        'Sensor and timer installations',
        'Investigation of geothermal options',
        'Solar heating possibilities'
      ]
    },
    {
      title: '🚗 Transportation',
      items: [
        'Hybrid and high-efficiency vehicles',
        'Alternative fuel usage (biodiesel, electric)',
        'Promotion of carpooling',
        'Increased bus usage through pass programs',
        'Enhanced online course offerings'
      ]
    },
    {
      title: '♻️ Waste Management',
      items: [
        'Source reduction through smart purchasing',
        'Double-sided printing implementation',
        'Comprehensive recycling programs',
        'Composting of food waste and yard trimmings'
      ]
    },
    {
      title: '🏗️ Infrastructure',
      items: [
        'LEED Certified building projects',
        'Campus-produced wind or solar energy',
        'Carbon offset purchases',
        'Natural landscaping practices'
      ]
    }
  ];

  return (
    <section className="carbon-reduction">
      <h2>How We're Reducing Our Carbon Footprint</h2>
      <p className="section-intro">
        SUNY Broome is committed to reducing its carbon footprint through comprehensive strategies 
        across all aspects of campus operations. Our initiatives combine immediate actions with 
        long-term sustainable solutions.
      </p>
      
      <div className="strategies-grid">
        {reductionStrategies.map((strategy, index) => (
          <div key={index} className="strategy-card">
            <h3>{strategy.title}</h3>
            <ul>
              {strategy.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarbonReduction; 
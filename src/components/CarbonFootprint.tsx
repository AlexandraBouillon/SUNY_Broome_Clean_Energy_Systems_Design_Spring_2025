import React from 'react';
import './CarbonFootprint.css';

const CarbonFootprint = () => {
  const footprintBasics = [
    {
      title: '🌍 What is a Carbon Footprint?',
      description: 'Impact of activities on emission of greenhouse gases, including:',
      items: [
        'Carbon dioxide',
        'Methane',
        'Nitrous oxide',
        'Fluorocarbons'
      ]
    },
    {
      title: '📊 How are emissions measured?',
      description: 'Emissions are reported in Carbon dioxide equivalents (eCO2):',
      items: [
        'Standardizes effects of different greenhouse gases',
        'Example: 1 metric ton of methane = 21 metric tons eCO2',
        'Allows for consistent comparison and tracking'
      ]
    }
  ];

  const contributingFactors = [
    {
      icon: '⚡',
      title: 'Energy Sources',
      items: ['Electricity consumption', 'Natural gas for heating']
    },
    {
      icon: '🚗',
      title: 'Transportation',
      items: ['Campus fleet vehicles', 'Student/staff commuting', 'Air travel']
    },
    {
      icon: '🌱',
      title: 'Agriculture',
      items: ['Fertilizer usage', 'Landscaping practices']
    },
    {
      icon: '♻️',
      title: 'Waste Management',
      items: ['Solid waste production', 'Recycling programs', 'Composting initiatives']
    }
  ];

  return (
    <section className="carbon-footprint">
      <h2>Campus Carbon Footprint</h2>
      
      <div className="footprint-basics">
        {footprintBasics.map((basic, index) => (
          <div key={index} className="basics-card">
            <h3>{basic.title}</h3>
            <p>{basic.description}</p>
            <ul>
              {basic.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="contributing-factors">
        <h3>What Contributes to Our Carbon Footprint?</h3>
        <div className="factors-grid">
          {contributingFactors.map((factor, index) => (
            <div key={index} className="factor-card">
              <span className="factor-icon">{factor.icon}</span>
              <h4>{factor.title}</h4>
              <ul>
                {factor.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarbonFootprint; 
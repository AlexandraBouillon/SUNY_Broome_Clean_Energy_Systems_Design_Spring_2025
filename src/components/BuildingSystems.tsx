import React from 'react';
import './BuildingSystems.css';

const BuildingSystems = () => {
  const systems = [
    {
      title: '🏗️ Building Envelope',
      items: [
        'Insulation in walls, roofs, and floors',
        'High-performance windows with low-E coatings',
        'Air sealing to prevent drafts and energy waste'
      ]
    },
    {
      title: '🌡️ HVAC Systems',
      items: [
        'High-Efficiency ENERGY STAR equipment',
        'Proper system sizing',
        'Regular maintenance scheduling',
        'Zoning systems for controlled heating/cooling'
      ]
    },
    {
      title: '💨 Air Flow',
      items: [
        'Classrooms: Minimum 4-6 ACH',
        'Lab Rooms: Minimum 10 ACH',
        'Balance between energy savings and air quality',
        'Pollutant management (CO2, VOCs, Chemicals)'
      ]
    },
    {
      title: '💡 Lighting',
      items: [
        'Energy-efficient LED lighting',
        'Natural daylighting optimization',
        'Occupancy sensors and timers'
      ]
    },
    {
      title: '🚰 Water Systems',
      items: [
        'Hot water pipe insulation',
        'Low-flow fixtures installation',
        'Tankless or heat pump water heaters'
      ]
    },
    {
      title: '🤖 Building Automation',
      items: [
        'Automated HVAC and lighting controls',
        'Real-time energy monitoring',
        'Remote system access',
        'Automated alerts and notifications'
      ]
    }
  ];

  return (
    <section className="building-systems">
      <h2>Building Systems & Efficiency</h2>
      <div className="systems-grid">
        {systems.map((system, index) => (
          <div key={index} className="system-card">
            <h3>{system.title}</h3>
            <ul>
              {system.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BuildingSystems; 
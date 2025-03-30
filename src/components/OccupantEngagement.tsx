import React from 'react';
import './OccupantEngagement.css';

const OccupantEngagement = () => {
  const engagementAreas = [
    {
      title: '📚 Education & Awareness',
      items: [
        'Regular training sessions on energy-efficient practices',
        'Information campaigns about sustainability',
        'Hands-on workshops and demonstrations',
        'Understanding building systems and their impact'
      ]
    },
    {
      title: '📊 Feedback & Incentives',
      items: [
        'Real-time energy consumption displays',
        'Recognition programs for energy-saving initiatives',
        'Competitions between departments or buildings',
        'Regular reporting on sustainability goals'
      ]
    },
    {
      title: '🔄 Behavioral Changes',
      items: [
        'Turning off lights in unoccupied spaces',
        'Proper use of thermostats and HVAC systems',
        'Reducing plug loads when possible',
        'Reporting energy waste or system issues'
      ]
    }
  ];

  return (
    <section className="occupant-engagement">
      <h2>Occupant Engagement & Education</h2>
      <p className="section-intro">
        Success in energy efficiency relies heavily on occupant participation and awareness. 
        We focus on creating a culture of sustainability through education and active engagement.
      </p>
      <div className="engagement-grid">
        {engagementAreas.map((area, index) => (
          <div key={index} className="engagement-card">
            <h3>{area.title}</h3>
            <ul>
              {area.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OccupantEngagement; 
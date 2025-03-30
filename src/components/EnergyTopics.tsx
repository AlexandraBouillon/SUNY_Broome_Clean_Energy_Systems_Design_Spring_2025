import React from 'react';
import './EnergyTopics.css';

const EnergyTopics = () => {
  return (
    <section className="energy-topics">
      <h2>Core Energy Principles</h2>
      <div className="principles-grid">
        <div className="principle-card">
          <h3>⚡ Electrification</h3>
          <ul>
            <li>Produce Clean Energy</li>
            <li>Stop Burning (Switch to Electric)</li>
            <li>Save What You Can (Use Less)</li>
          </ul>
        </div>

        <div className="principle-card">
          <h3>🌞 Produce Renewable Energy</h3>
          <ul>
            <li>Solar Photovoltaic (PV): Generate electricity from sunlight</li>
            <li>Solar Thermal: Water heating from solar energy</li>
            <li>Wind Energy: Electricity generation in suitable locations</li>
            <li>Other: Nuclear, Geothermal, etc.</li>
          </ul>
        </div>

        <div className="principle-card">
          <h3>🏢 Building Efficiency</h3>
          <p>Buildings account for a significant portion of global energy consumption. Energy efficiency reduces environmental impact and lowers operating costs.</p>
        </div>
      </div>
    </section>
  );
};

export default EnergyTopics; 
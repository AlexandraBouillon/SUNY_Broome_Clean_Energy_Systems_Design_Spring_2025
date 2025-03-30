import React from 'react';
import './App.css';
import EnergyTopics from './components/EnergyTopics';
import BuildingSystems from './components/BuildingSystems';
import BuildingDesign from './components/BuildingDesign';
import OccupantEngagement from './components/OccupantEngagement';
import CarbonFootprint from './components/CarbonFootprint';
import CarbonReduction from './components/CarbonReduction';
import EmissionsData from './components/EmissionsData';
import SideNavigation from './components/SideNavigation';

function App() {
  return (
    <div className="App">
      <SideNavigation />
      <header className="App-header">
        <h1>SUNY Broome New Energy Web Portal</h1>
      </header>
      <main className="App-main">
        <section className="intro-section">
          <p className="lead-text">
            Advancing clean energy systems design aligns with SUNY Broome's educational mission, research expertise, and commitment to sustainability. Our program is designed to coordinate our vision and work in creating a more sustainable future through innovative energy systems design and supporting partnerships for global impact.
          </p>
          
          <p>
            The Clean Energy Systems Design program at SUNY Broome is at the forefront of addressing climate change and sustainability challenges. We are committed to developing the next generation of clean energy professionals while advancing meaningful progress in sustainable technology and fostering active engagement from our community.
          </p>
        </section>

        <section id="core-energy">
          <EnergyTopics />
        </section>

        <section id="building-systems">
          <BuildingSystems />
        </section>

        <section id="building-design">
          <BuildingDesign />
        </section>

        <section id="carbon-footprint">
          <CarbonFootprint />
        </section>

        <section id="carbon-reduction">
          <CarbonReduction />
        </section>

        <section id="occupant-engagement">
          <OccupantEngagement />
        </section>

        <section id="emissions-data">
          <EmissionsData />
        </section>

        <section id="education-impact" className="education-section">
          <h2>Education & Community Impact</h2>
          <p>
            We are here to learn, educate and inspire students, faculty, staff, and the community. Our program actively contributes to the regional clean energy ecosystem through:
          </p>
          <ul className="impact-list">
            <li>Student projects and research initiatives</li>
            <li>Community partnerships and engagement</li>
            <li>Professional development opportunities</li>
            <li>Sustainable technology demonstrations</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
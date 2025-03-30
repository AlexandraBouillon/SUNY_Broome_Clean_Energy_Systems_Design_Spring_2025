import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SUNY Broome Clean Energy Systems Design</h1>
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

        <section className="program-structure">
          <h2>How We Work</h2>
          <p>
            Our program encompasses three key areas of focus, supported by dedicated faculty, industry partnerships, and hands-on learning opportunities. We prioritize practical experience alongside theoretical knowledge to prepare students for real-world challenges in clean energy systems.
          </p>
        </section>

        <section className="focus-areas">
          <h2>Program Focus Areas</h2>
          
          <div className="focus-card">
            <h3>🔋 Renewable Energy Systems</h3>
            <p>Focus on designing and implementing sustainable energy solutions including solar, wind, and energy storage technologies.</p>
          </div>

          <div className="focus-card">
            <h3>🏗️ Sustainable Infrastructure</h3>
            <p>Develop expertise in creating energy-efficient buildings and systems that support climate resilience and environmental health.</p>
          </div>

          <div className="focus-card">
            <h3>💡 Innovation & Research</h3>
            <p>Engage in cutting-edge research and development of new clean energy technologies and solutions.</p>
          </div>
        </section>

        <section className="community-impact">
          <h2>Community Impact</h2>
          <p>
            Our program actively contributes to the regional clean energy ecosystem through student projects, research initiatives, and community partnerships. We provide regular updates on our progress and impact through annual reports and community presentations.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
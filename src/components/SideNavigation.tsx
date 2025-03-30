import React, { useState, useEffect } from 'react';
import './SideNavigation.css';

const SideNavigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const sections = [
    { id: 'core-energy', title: 'Core Energy Concepts' },
    { id: 'building-systems', title: 'Building Systems' },
    { id: 'building-design', title: 'Building Design' },
    { id: 'carbon-footprint', title: 'Carbon Footprint' },
    { id: 'carbon-reduction', title: 'Carbon Reduction' },
    { id: 'emissions-data', title: 'Emissions Data' },
    { id: 'occupant-engagement', title: 'Occupant Engagement' },
    { id: 'education-impact', title: 'Education & Community Impact' }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      // Show sidebar when mouse is within 50px of the left edge
      setIsVisible(e.clientX <= 50);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`side-navigation ${isVisible ? 'visible' : ''}`}>
      <div className="nav-content">
        <h3>Quick Navigation</h3>
        <ul>
          {sections.map(section => (
            <li key={section.id}>
              <button onClick={() => scrollToSection(section.id)}>
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SideNavigation; 
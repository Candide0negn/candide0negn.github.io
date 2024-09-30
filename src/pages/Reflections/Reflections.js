// src/page/reflections/Reflections.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Reflections.css';

const reflectionsEntries = [
  `**Entry 1 - The Intersection of Code and Philosophy**

In the silence of the night, I often ponder the intertwining threads of technology and philosophy. The journey through code is much like an odyssey through the self—a constant exploration of unknown realms.`,
  `**Entry 2 - Embracing the Unknown**

Every bug encountered is a lesson in humility and patience. It reminds me of Nietzsche's idea of eternal recurrence—the endless loop until enlightenment is achieved.`,
  `**Entry 3 - The Alchemy of Creation**

Turning ideas into reality is the modern alchemy. Just as ancient alchemists sought the philosopher's stone, we seek elegant solutions that transform the mundane into the extraordinary.`,
];

const Reflections = () => {
  const [currentEntry, setCurrentEntry] = useState(0);

  const nextEntry = () => {
    setCurrentEntry((prev) => (prev + 1) % reflectionsEntries.length);
  };

  const prevEntry = () => {
    setCurrentEntry((prev) =>
      prev === 0 ? reflectionsEntries.length - 1 : prev - 1
    );
  };

  return (
    <div className="vim-inspired">
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/reflections" className="active">Reflections</Link></li>
            <li><Link to="/research">Research</Link></li>
            <li><Link to="/library">Library</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className="reflections-main">
        <div className="journal">
          <div className="entry">
            <div
              className="entry-content"
              dangerouslySetInnerHTML={{
                __html: reflectionsEntries[currentEntry].replace(/\n/g, '<br />'),
              }}
            />
          </div>
          <div className="navigation">
            <button onClick={prevEntry}>&lt; Prev</button>
            <span>{`Entry ${currentEntry + 1} of ${reflectionsEntries.length}`}</span>
            <button onClick={nextEntry}>Next &gt;</button>
          </div>
        </div>
      </main>

      <footer>
        <p>&copy; 2024 An Alchemist's Odyssey</p>
      </footer>
    </div>
  );
};

export default Reflections;

// src/page/research/Research.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Research.css';

const researchTopics = [
  {
    title: 'Neuroevolution',
    description:
      'Studying bio-inspired algorithms like NEAT and Novelty Search to evolve neural network topologies.',
    image: 'https://via.placeholder.com/150', // Replace with actual images
  },
  {
    title: 'Machine Learning',
    description:
      'Exploring deep learning and reinforcement learning techniques to build intelligent systems.',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Generative AI',
    description:
      'Developing generative models to create tools that enhance productivity and accessibility.',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'AI and Philosophy',
    description:
      'Investigating the philosophical implications of artificial intelligence and its impact on society.',
    image: 'https://via.placeholder.com/150',
  },
  // Add more topics as needed
];

const Research = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="vim-inspired">
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/reflections">Reflections</Link></li>
            <li><Link to="/research" className="active">Research</Link></li>
            <li><Link to="/library">Library</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className="research-main">
        <h2>My Research Areas</h2>
        <div className="cards-container">
          {researchTopics.map((topic, index) => (
            <div
              key={index}
              className={`card ${expandedIndex === index ? 'expanded' : ''}`}
              onClick={() => toggleExpand(index)}
            >
              <img src={topic.image} alt={topic.title} className="card-image" />
              <div className="card-content">
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
                {expandedIndex === index && (
                  <p className="additional-info">
                    {/* Add more detailed information here */}
                    Detailed information about {topic.title} goes here. You can include links to papers, projects, or personal insights.
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <p>&copy; 2024 An Alchemist's Odyssey</p>
      </footer>
    </div>
  );
};

export default Research;

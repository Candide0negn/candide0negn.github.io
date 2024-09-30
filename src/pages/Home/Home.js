// src/page/home/Home.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


import myStoryPic from '../../assets/vv.png';           
import welcomeBanner from '../../assets/lmn.png';        
import projectsBanner from '../../assets/lmn.png';      

const Home = () => {
  const [commandMode, setCommandMode] = useState(false);
  const [command, setCommand] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === ':' && !commandMode) {
      e.preventDefault();
      setCommandMode(true);
    } else if (e.key === 'Escape') {
      setCommandMode(false);
      setCommand('');
    }
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      // Simple command handling
      if (command === 'w') {
        alert('Changes saved!');
      } else if (command === 'q') {
        alert('Exiting...');
      }
      setCommandMode(false);
      setCommand('');
    }
  };

  return (
    <div className="vim-inspired" onKeyDown={handleKeyDown} tabIndex="0">
      <header>
        <nav>
          <ul>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/reflections">Reflections</Link></li>
            <li><Link to="/research">Research</Link></li>
            <li><Link to="/library">Library</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="section home-section animate-fade-in">
          {/* Banner Image */}
          <img src={welcomeBanner} alt="Welcome Banner" className="banner-image" />
          <div className="home-content">
            <h1><span className="underline">Welcome to my space</span></h1>
            <p>"Collect life’s elements as they direct; then put the parts together — cautiously — and think about the What and, even more, the How!"</p>
            <p>- <code>Faust</code></p>
          </div>
        </section>

        <section id="about" className="section animate-slide-in">
          <h2>About Me</h2>
          <img src={myStoryPic} alt="My Story" className="profile-image" />
          <p>Hey, I'm Candide, a CS student with a passion for technology and software development. I love making software and automating stuff—basically anything that lets me dive deeper into the world of tech. I've taken an interest in A.I and I'm particularly fascinated by bio-inspired approaches in artificial intelligence, like neuroevolution—especially NEAT (NeuroEvolution of Augmenting Topologies)—and Kenneth Stanley's novelty search.

When I'm not coding, you'll find me immersed in books. I delve into everything from the classics by Goethe and Dostoevsky to the philosophies of Schopenhauer, Kant, Hegel, and Nietzsche. Sci-fi authors like Ian M. Banks, Asimov, and Philip K. Dick fuel my imagination, and I'm also a huge fan of music and anime.

I'm inspired by philosophies that emphasize overcoming fear, the importance of self-trust, and thoughtful learning. These ideas motivate me in my pursuit of AI research and software development.

I'm currently working on some exciting projects that I hope will improve the world, much like how the philosophers and scientists of old sought the philosopher's stone.</p>
          <p>My journey: <code>human.evolve(AI_researcher)</code></p>
        </section>

        <section id="projects" className="section projects-section animate-fade-in">
          <h2>My Projects</h2>
          {/* Projects Banner Image */}
          <img src={projectsBanner} alt="Projects Banner" className="banner-image" />
          <div className="projects-content">
            <h3>!!!Under construction!!!</h3>
            <p>Here’s where I document my attempts to make sense of AI papers (because who needs sleep, right?) and level up my programming skills. I'll be sharing what I've learned, the bugs I've befriended, and the wild ideas that keep me up at night. I've got some big plans brewing, like harnessing generative AI to create super helpful tools across different fields. This space is all about sharing, keeping track of my progress, and tossing around ideas that pop into my head.
            Feel free to browse around, see what I've been up to, and maybe even pick up something new along the way. Whether you're here intentionally or just stumbled upon this corner of the internet, welcome aboard!</p>
            <p>Project status: <code>cargo run brainstorm</code></p>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 An Alchemist's Odyssey</p>
        {commandMode && (
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleCommand}
            className="vim-command-input"
            autoFocus
          />
        )}
      </footer>
    </div>
  );
};

export default Home;

// src/page/home/Home.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';

import myStoryPic from '../../assets/vv.png';
import welcomeBanner from '../../assets/lmn.png';
import projectsBanner from '../../assets/aa.png';

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

  const handleLinkClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="vim-inspired" onKeyDown={handleKeyDown} tabIndex="0">
      <header>
        <div className="header-container">
          <nav>
            <ul>
              <li>
                <Link
                  to="/projects"
                  className="disabled-link"
                  onClick={handleLinkClick}
                  aria-disabled="true"
                  title="I'm a bit busy right now"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/reflections"
                  className="disabled-link"
                  onClick={handleLinkClick}
                  aria-disabled="true"
                  title="I'm a bit busy right now"
                >
                  Reflections
                </Link>
              </li>
              <li>
                <Link
                  to="/library"
                  className="disabled-link"
                  onClick={handleLinkClick}
                  aria-disabled="true"
                  title="I'm a bit busy right now"
                >
                  Library
                </Link>
              </li>
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main>
        <section id="home" className="section home-section animate-fade-in">
          {/* Banner Image */}
          <img src={welcomeBanner} alt="Welcome Banner" className="banner-image" />
          <div className="home-content">
            <p>
              "Collect life's elements as they direct;<br />
              then put the parts together — cautiously —<br />
              and think about the What and, even more, the How!"
            </p>
            <p>— <code>Faust</code></p>
          </div>
        </section>

        <section id="about" className="section animate-slide-in">
          <h2>about me</h2>
          <img src={myStoryPic} alt="My Story" className="profile-image" />
          <p>Hey, I'm Chris.</p>
          <p>I like computers and programming. I love literature and poetry. Philosophy and science too. I enjoy video games and anime when I can.</p>
          <p>For quite a while now, I've been thinking about AI. It might be the first time humanity is forced to go back to the fundamentals and ask ourselves really important questions: What do we care about? How do we want the future to look like? What does it mean to be human?</p>
          <p>Once AI becomes as capable as any expert, maybe it'll reframe our perspectives by reminding us how we should think about our values. In the case of education, for example, from <em>"what can education earn me?"</em> to <em>"what is education for?"</em></p>
          <p>I'm building <a href="https://mypallas.app" target="_blank" rel="noopener noreferrer"><strong>Pallas</strong></a>, starting with education but the idea is still taking shape.</p>
          <p>Current journey: <code>building Pallas</code></p>
        </section>

        <section id="projects" className="section projects-section animate-fade-in">
          <h2>hear me out (currently working on)</h2>
          {/* Projects Banner Image */}
          <img src={projectsBanner} alt="Projects Banner" className="banner-image" />
          <div className="projects-content">
            <p>I've used a lot of learning apps and many people have too.</p>

            <p>There are some that specialize. They usually pick one thing whether it's coding, language or math for instance — and they're genuinely good. But I have to switch between them if I want to learn something outside their scope.</p>

            <p>Then there are other platforms with thousands of courses. But often, the course is static, it doesn't change or know what you understand or don't understand.</p>

            <p>And now there's a new wave — AI tutors and personalized learning. Some are promising. But they either specialize again (so you hit the same wall), or they try to do everything and end up relying on the same format for every subject. Multiple choice.</p>

            <p>As I was using Pallas I got frustrated too. learn to program? I had to pick option C. Anatomy? Pick option D. Philosophy, history, music theory — all of it, same format. It didn't feel right.</p>

            <p>So I thought — If I wanted to learn anything, why not learn it the way it's meant to be learned?</p>

            <p>If I'm learning to code, I should write code.<br />
              If I'm learning anatomy, I should look at a diagram and label it.<br />
              If I'm learning philosophy, maybe I should be writing, not clicking options.</p>

            <p>What if the assessment itself could adapt — not just to my level, but to <em>what I'm actually learning</em>?<br />
              Any subject. Any format. Generated on the fly.</p>

            <p>That's where this is going.</p>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 An Alchemist's Odyssey</p>
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

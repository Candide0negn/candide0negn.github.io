// src/page/library/Library.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Library.css';

const libraryCategories = {
  SciFi: [
    {
      title: 'Dune',
      author: 'Frank Herbert',
      cover: 'https://via.placeholder.com/100x150', // Replace with actual image URLs
      description: 'A science fiction novel about politics, religion, and ecology on the desert planet Arrakis.',
    },
    {
      title: 'Neuromancer',
      author: 'William Gibson',
      cover: 'https://via.placeholder.com/100x150',
      description: 'A cyberpunk novel that tells the story of a washed-up computer hacker hired for one last job.',
    },
    // Add more Sci-Fi books
  ],
  Philosophy: [
    {
      title: 'Thus Spoke Zarathustra',
      author: 'Friedrich Nietzsche',
      cover: 'https://via.placeholder.com/100x150',
      description: 'A philosophical novel that introduces the concept of the Übermensch and eternal recurrence.',
    },
    {
      title: 'The World as Will and Representation',
      author: 'Arthur Schopenhauer',
      cover: 'https://via.placeholder.com/100x150',
      description: 'Explores the idea that the world is driven by an irrational force called the will.',
    },
    // Add more Philosophy books
  ],
  Technology: [
    {
      title: 'Clean Code',
      author: 'Robert C. Martin',
      cover: 'https://via.placeholder.com/100x150',
      description: 'A handbook of agile software craftsmanship, focusing on writing clean and maintainable code.',
    },
    {
      title: 'Artificial Intelligence: A Modern Approach',
      author: 'Stuart Russell and Peter Norvig',
      cover: 'https://via.placeholder.com/100x150',
      description: 'Comprehensive coverage of artificial intelligence, including machine learning, robotics, and natural language processing.',
    },
    // Add more Technology books
  ],
  // Add more categories as needed
};

const Library = () => {
  const [selectedCategory, setSelectedCategory] = useState('SciFi');
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div className="vim-inspired">
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/reflections">Reflections</Link></li>
            <li><Link to="/research">Research</Link></li>
            <li><Link to="/library" className="active">Library</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className="library-main">
        <h2>My Library</h2>
        <div className="categories">
          {Object.keys(libraryCategories).map((category) => (
            <button
              key={category}
              className={`category-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="bookshelf">
          {libraryCategories[selectedCategory].map((book, index) => (
            <div
              key={index}
              className="book"
              onClick={() => setSelectedBook(book)}
              title={book.title}
            >
              <img src={book.cover} alt={book.title} />
              <p>{book.title}</p>
              <span>{book.author}</span>
            </div>
          ))}
        </div>

        {selectedBook && (
          <div className="modal" onClick={() => setSelectedBook(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={() => setSelectedBook(null)}>&times;</span>
              <img src={selectedBook.cover} alt={selectedBook.title} />
              <h3>{selectedBook.title}</h3>
              <p><strong>Author:</strong> {selectedBook.author}</p>
              <p>{selectedBook.description}</p>
              {/* Add more details if available */}
            </div>
          </div>
        )}
      </main>

      <footer>
        <p>&copy; 2024 An Alchemist's Odyssey</p>
      </footer>
    </div>
  );
};

export default Library;

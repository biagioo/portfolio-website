import React from 'react';
import './App.css';
import Intro from './componets/Intro'
import About from './componets/About'
import Projects from './componets/Projects'
import BlogPosts from './componets/BlogPosts'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Intro />
      </header>
          <About />
          <Projects />
          <BlogPosts />
        
    </div>
  );
}

export default App;

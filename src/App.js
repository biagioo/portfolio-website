import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Container } from 'react-bootstrap';

import Intro from './componets/Intro'
import About from './componets/About'
import Projects from './componets/projects/Projects'
import BlogPosts from './componets/blog/BlogContainer'

function App() {
  return (
    <Container>
      <div className="App">
        <header className="App-header">
          <Intro />
        </header>
        <About />
        <Projects />
        <BlogPosts />      
      </div>
      </Container>  
  );
}

export default App;

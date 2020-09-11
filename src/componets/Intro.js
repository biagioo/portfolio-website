import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
class Intro extends Component {
  render() {
    return (
      <Container className = "intro-header">
        <h2>Welcome</h2>
        <h4>My name is Biagio Mendolia</h4>
        <h5>I build Web Applications.</h5>
        <p>I'm a software engineer located in Levittown, NY.</p>
      </Container>
    );
  }
}

export default Intro;

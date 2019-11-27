import React from 'react';
import './App.css';
import Crossword from './containers/Crossword';


const Footer = () => (
  <footer className="footer">
    <p>a barebones Crossword built with React by
    <a href="http://www.disruptive-dna.com"> disruptiveDNA </a>
    Please see 
    <a href="http://www.disruptive-dna.com/tos/CrosswordTOS.html"> Terms of Service </a>
    </p>
  </footer>
);

function App() {
  return (
    <div>
      <Crossword></Crossword>
      <Footer></Footer>
    </div>
  );
}

export default App;

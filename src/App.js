import React from 'react';
import './components/style.css';
import './components/bootstrap.min.css';
import Heading from './components/heading';
import Buttons from './components/buttons';
import Table from './components/table';




function App() {
  return (
    <div className="App">
      <div className="App-container">
        <div className="jumbotron mt-5">
          <Heading />
          <Buttons />
          <Table />
        </div>
      </div>
    </div>
  );
}

export default App;

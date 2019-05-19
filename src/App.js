import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from './barChart'
import WorldMap from './worldMap';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Lily Burtness
          </p>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>

        <body className="App-body">
          {/* <BarChart/> */}
          {/* <WorldMap/> */}
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="about-me" title="About Me">
              <div>
                Hi
              </div>
            </Tab>
            <Tab eventKey="projects" title="Projects">
              Bye
            </Tab>
            <Tab eventKey="cool-links" title="Cool Links" disabled>
              Lily
            </Tab>
          </Tabs>;
        </body>
      </div>
    );
  }
}

export default App;

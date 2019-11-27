import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

import CharacterSelectPage from "./CharacterSelect/CharacterSelectPage";
import GamePage from "./GamePage";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <CharacterSelectPage />
        {/*<GamePage />*/}
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './Components/Players.js';

import CharacterSelectPage from "./CharacterSelect/CharacterSelectPage";
import GamePage from "./GamePage";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [
                {name: "Danny Devito", bet: 100, wallet: 500 ,images:
                    [require("./Images/DannyDevito/DannyDevitoDefeat.jpg"), // 0 Lost?
                    require("./Images/DannyDevito/DannyDevitoLosing.jpg"), // 1
                    require("./Images/DannyDevito/DannyDevitoNeutral.jpg"), // 2 Nuetral
                    require("./Images/DannyDevito/DannyDevitoHappy.jpg"), // 3
                    require("./Images/DannyDevito/DannyDevitoVictory.jpg")]  // 4 win?
                },
                {name: "1-NAME", images:
                    [require("./CharacterSelect/Images/Smiley.png"), // 0 Lost?
                    require("./CharacterSelect/Images/Smiley.png"), // 1
                    require("./CharacterSelect/Images/Smiley.png"), // 2 Nuetral
                    require("./CharacterSelect/Images/Smiley.png"), // 3
                    require("./CharacterSelect/Images/Smiley.png")]  // 4 win?
                },
                {name: "2-NAME", images:
                    [require("./CharacterSelect/Images/Smiley.png"), // 0 Lost?
                    require("./CharacterSelect/Images/Smiley.png"), // 1
                    require("./CharacterSelect/Images/Smiley.png"), // 2 Nuetral
                    require("./CharacterSelect/Images/Smiley.png"), // 3
                    require("./CharacterSelect/Images/Smiley.png")]  // 4 win?
                },
                {name: "3-NAME", images:
                    [require("./CharacterSelect/Images/Smiley.png"), // 0 Lost?
                    require("./CharacterSelect/Images/Smiley.png"), // 1
                    require("./CharacterSelect/Images/Smiley.png"), // 2 Nuetral
                    require("./CharacterSelect/Images/Smiley.png"), // 3
                    require("./CharacterSelect/Images/Smiley.png")]  // 4 win?
                },
                {name: "4-NAME", images:
                    [require("./CharacterSelect/Images/Smiley.png"), // 0 Lost?
                    require("./CharacterSelect/Images/Smiley.png"), // 1
                    require("./CharacterSelect/Images/Smiley.png"), // 2 Nuetral
                    require("./CharacterSelect/Images/Smiley.png"), // 3
                    require("./CharacterSelect/Images/Smiley.png")]  // 4 win?
                },
                {name: "A-NAME", images:
                    [require("./CharacterSelect/Images/Smiley.png"), // 0 Lost?
                    require("./CharacterSelect/Images/Smiley.png"), // 1
                    require("./CharacterSelect/Images/Smiley.png"), // 2 Nuetral
                    require("./CharacterSelect/Images/Smiley.png"), // 3
                    require("./CharacterSelect/Images/Smiley.png")]  // 4 win?
                },
                {name: "B-NAME", images:
                    [require("./CharacterSelect/Images/Smiley.png"), // 0 Lost?
                    require("./CharacterSelect/Images/Smiley.png"), // 1
                    require("./CharacterSelect/Images/Smiley.png"), // 2 Nuetral
                    require("./CharacterSelect/Images/Smiley.png"), // 3
                    require("./CharacterSelect/Images/Smiley.png")]  // 4 win?
                },
                {name: "C-NAME", images:
                    [require("./CharacterSelect/Images/Smiley.png"), // 0 Lost?
                    require("./CharacterSelect/Images/Smiley.png"), // 1
                    require("./CharacterSelect/Images/Smiley.png"), // 2 Nuetral
                    require("./CharacterSelect/Images/Smiley.png"), // 3
                    require("./CharacterSelect/Images/Smiley.png")]  // 4 win?
                },
                {name: "D-NAME", images:
                    [require("./CharacterSelect/Images/Smiley.png"), // 0 Lost?
                    require("./CharacterSelect/Images/Smiley.png"), // 1
                    require("./CharacterSelect/Images/Smiley.png"), // 2 Nuetral
                    require("./CharacterSelect/Images/Smiley.png"), // 3
                    require("./CharacterSelect/Images/Smiley.png")]  // 4 win?
                },
                {name: "E-NAME", images:
                    [require("./CharacterSelect/Images/Smiley.png"), // 0 Lost?
                    require("./CharacterSelect/Images/Smiley.png"), // 1
                    require("./CharacterSelect/Images/Smiley.png"), // 2 Nuetral
                    require("./CharacterSelect/Images/Smiley.png"), // 3
                    require("./CharacterSelect/Images/Smiley.png")]  // 4 win?
                },
            ],
            selectedCharactersNames: []
        };

    }

    // Saves data from character select page into selectedCharactersNames[];
    characterSelectPageHandler(selectedCharacters) {
        this.setState({selectedCharactersNames: (selectedCharacters)})
        console.log("Selected Chars: " + selectedCharacters);
    }

    render() {
        return (
            <div className="container">
{/*
                <CharacterSelectPage
                characters = {this.state.characters}
                handlerCall = {this.characterSelectPageHandler.bind(this)}/>
*/}
                <GamePage
                     characters = {this.state.characters}
                     selectedCharactersIndexes = {this.state.characters}
                />

            </div>
        );
    }
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;

import React, { Component } from "react";
//import "../App.css";
import './Character.css';

import Character from "./Character";

class CharacterSelect extends Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: [],
            unlockPassword: ' '
        };
    }

    //Unlocks Characters depending on password inputted
    unlockOnClick() {
    }

    //Changes 'unlockPassword' to inputted value?
    unlockInputChange(e) {
        const unlockPassword = e.target.value;
        this.setState({ unlockPassword });
    }

    render() {
        return (
            <div>
                <div>
                    <Character name="NAME" />
                    <Character name="NAME" />
                    <Character name="NAME" />
                </div>
                <div>
                    <form>
                        <input type="text" name="character unlock" placeholder="???" value={this.state.unlockPassword} onChange={this.unlockInputChange.bind(this)} />
                    </form>
                    <button onClick={() => { this.unlockOnClick() }}> UNLOCK </button>
                </div>
            </div>
        );
    }
}

export default CharacterSelect;
import React, { Component } from "react";
//import "../App.css";
import './Character.css';

import Character from "./Character";

class CharacterSelect extends Component {


    render() {
        return (
            <div>
                <Character name="NAME" />
            </div>
        );
    }
}

export default CharacterSelect;
import React, { Component } from "react";
import "../App.css";
import './Character.css';

import Character from "./Character";

class CharacterSelect extends Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: [],
            selectedCharacters: [],
            numberOfSelectedCharacters: 0,
            unlockInput: ''
        };

    }

    //Populates all Characters
    populate() {
        return (
            <div className="allCharacters">
                <div className="characterPack" id="pack1">
                    <Character name="Name11" />
                    <Character name="Name12" />
                    <Character name="Name13" />
                    <Character name="Name14" />
                    <Character name="Name15" />
                </div>
                <div className="characterPack" id="pack2">
                    <Character name="Name21" />
                    <Character name="Name22" />
                    <Character name="Name23" />
                    <Character name="Name24" />
                    <Character name="Name25" />
                </div>
                <div className="characterPack" id="pack3">
                    <Character name="Name31" />
                    <Character name="Name32" />
                    <Character name="Name33" />
                    <Character name="Name34" />
                    <Character name="Name35" />
                </div>
            </div>
        );

        /*
        //iterate through packs
        for (var i = 0; i < 1; i += 1) {
            //iterate through characters in pack
            for (var j = 0; j < 5; j += 1) {
                { Characters[i + j] }
            }
        }
        */
    }



    //Unlocks Characters depending on password inputted
    unlockOnClick() {
        switch (this.unlockInput) {
            case "Trumpy Trump":
                // code block
                break;
            case "Howdy Howdy":
                // code block
                break;
            case "Unlock All":

                break;
            default:
            // code block
        }
    }

    //Changes 'unlockInput' to inputted value
    unlockInputChange(e) {
        const unlockInput = e.target.value;
        this.setState({ unlockInput });
        console.log("k");
    }

    render() {
        return (
            <div>
                {this.populate()}
                <div className="unlockArea">
                    <form>
                        <input type="text" name="characterUnlock" placeholder="???" value={this.state.unlockInput} onChange={this.unlockInputChange.bind(this)} />
                    </form>
                    <button onClick={() => { this.unlockOnClick() }}> UNLOCK </button>
                </div>
            </div>
        );
    }
}

export default CharacterSelect;
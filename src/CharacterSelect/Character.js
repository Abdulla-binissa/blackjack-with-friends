import React, { Component } from "react";
//import "../App.css";
import './Character.css';

class Character extends Component {
    state = {
        name: this.props.name,
        image: this.props.image,
        unlocked: this.props.unlocked,
        selected: this.props.selected
    };

    //Checks image if null
    hasImageCheck = () => {
        if (this.state.image == null) {
            this.state.image = require("./Images/imagePlaceHolder.jpg");
        }
        return this.state.image;
    }

    //OnClick
    onClick() {
        this.selected = true;
        console.log(this.selected);
    }





    // ----------------- Render ----------------- //
    render() {
        return (
            <a className="character"
                onClick={() => this.onClick()}>
                <img className="thumbnail" src={this.hasImageCheck()}></img>
                {this.props.name}
            </a>
        );
    }
}

export default Character;

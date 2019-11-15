import React, { Component } from "react";
//import "../App.css";
import './Character.css';

class Character extends Component {
    state = {
        name: this.props.name,
        image: this.props.image,
        money: this.props.money
    };

    //
    hasImageCheck = () => {
        if (this.state.image == null) {
            this.state.image = require("./Images/imagePlaceHolder.jpg");
        }
        return this.state.image;
    }

    render() {
        return (
            <div >
                <img className="thumbnail" src={this.hasImageCheck()}></img>
                {this.props.name}
            </div>
        );
    }
}

export default Character;

import React, { Component } from "react";
//import "../App.css";
import './Character.css';

class Character extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            images: this.props.images,
            //key: this.props.key,
            image: this.props.images[2], //Nuetral pic

            unlocked: this.props.unlocked,
            selected: false,
            color: "#5C5B59"
        }
    };

    //OnClick
    onClick() {
        //console.log(this.state.name);
        if(!this.state.unlocked) {
            console.log("Locked!");
        }
        else {
            if(!this.state.selected) {
                this.setState({selected: true});
                this.setState({color: "#48BF84"});

                this.props.handlerCall(true, this.state.name);
            }
            else {
                this.setState({selected: false});
                this.setState({color: "#5C5B59"});

                this.props.handlerCall(false, this.state.name);
            }
        }
    }

    // ----------------- Render ----------------- //
    render() {
        var borderColor = "5px solid " + this.state.color;
        return (
            <button
            className="character"
            onClick={() => this.onClick()}>

                <img
                className="thumbnail"
                alt={this.state.name}
                style={{border: borderColor}}
                src={this.state.image}/>

                <div
                className="thumbnailText">
                    {this.state.name}</div>

            </button>
        );
    }
}

export default Character;

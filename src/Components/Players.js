import React, { Component } from 'react'
import CharacterSelect from '../CharacterSelect/CharacterSelectPage';
import Character from '../CharacterSelect/Character';

export class Players extends Component {

    constructor(props) {
        super(props);

        this.state = {
            bet: 25,
            wallet: 100,
            name: this.props.name,
            image: this.props.image
        };
    }

    render() {
        return (
            <div className="character">
                <img
                className="thumbnail"
                alt={this.state.name}
                src={this.state.image}/>

                <div
                className="thumbnailText">
                    {this.state.name}</div>

            </div>
        )
    }
}

export default Players

import React, { Component } from 'react'
import CharacterSelect from '../CharacterSelect/CharacterSelectPage';
import Character from '../CharacterSelect/Character';

export class Players extends Component {

    constructor(props) {
        super(props);

        this.state = {
            bet: 25,
            wallet: 100,
            name: this.state.characters[0].name
        };
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Players

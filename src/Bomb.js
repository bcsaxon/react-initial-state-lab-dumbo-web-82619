import React, { Component } from 'react';

class Bomb extends Component {
    constructor(props) {
        super ()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render () {

        const timerMessage = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;

        return (
            <div>

            {timerMessage}

            </div>
        )
    }
}


export default Bomb

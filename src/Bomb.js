// your Bomb code here!
import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {
    return (
        this.state.secondsLeft === 0 ? <h2>Boom!</h2> : <h2>{this.state.secondsLeft} seconds left before I go boom!</h2>
    )
}
}
export default Bomb;
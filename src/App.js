import React, { Component } from 'react';
import './App.css';
import PitchPlayer from './PitchPlayer.js'

class App extends Component {
  state = {
    number: 0
  }

  incrementNumber = () => {
    const number = this.state.number
    if (number < 100) {
      this.setState({
        number: number + 1
      })
      setTimeout(this.incrementNumber, 1000)
    }
  }

  render() {
    let inner;
    if (this.state.number === 0) {
      inner = <button className="startButton" onClick={this.incrementNumber}>
        Click to start
      </button>
    }
    else {
      inner = <PitchPlayer number={this.state.number}/>
    }

    return (
      <div className="App">
        <header className="App-header">
          <p>
            {inner}
          </p>
        </header>
      </div>
    );
  }
}

export default App;

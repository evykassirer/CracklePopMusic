import React, { Component } from 'react';
import './App.css';
import PitchPlayer from './PitchPlayer.js'

class App extends Component {
  state = {
    number: 1
  }

  componentDidMount() {
    setTimeout(this.incrementNumber, 1000)
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
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <PitchPlayer number={this.state.number}/>
          </p>
        </header>
      </div>
    );
  }
}

export default App;

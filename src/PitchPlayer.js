import React, { Component } from 'react';
import Tone from 'tone'

class PitchPlayer extends Component {
  state = {
    synth: null,
    multiVoiceSynth: null,
  }

  componentDidMount() {
    const synth = new Tone.Synth().toMaster()
    const multiVoiceSynth = {
      2: new Tone.PolySynth(2, Tone.Synth).toMaster(),
      3: new Tone.PolySynth(3, Tone.Synth).toMaster(),
    }

    this.setState({
      synth,
      multiVoiceSynth
    })
  }

  tones = [
    'C4',
    'D4',
    'E4',
    'F4',
    'G4',
    'A4',
    'B4',
    'C5',
  ]

  playPitches() {
    const {synth, multiVoiceSynth} = this.state;

    if(!synth || !multiVoiceSynth) {
      return
    }

    const { number } = this.props
    const randomToneIndex = Math.floor(Math.random() * this.tones.length)
    const pitches = [this.tones[randomToneIndex]]

    if (number % 3 === 0) {
      if (randomToneIndex + 2 < this.tones.length) {
        pitches.push(this.tones[randomToneIndex + 2])
      }
      else {
        pitches.push(this.tones[randomToneIndex - 2])
      }
    }

    if (number % 5 === 0) {
      if (randomToneIndex + 4 < this.tones.length) {
        pitches.push(this.tones[randomToneIndex + 4])
      }
      else {
        pitches.push(this.tones[randomToneIndex - 4])
      }
    }

    if (pitches.length > 1) {
      multiVoiceSynth[pitches.length].triggerAttackRelease(pitches, '2n')
    }
    else {
      synth.triggerAttackRelease(pitches[0], '4n')
    }
  }

  render() {
    const { number } = this.props

    this.playPitches()

    let displayText = ''
    if (number % 3 === 0) {
      displayText += 'Crackle'
    }
    if (number % 5 === 0) {
      displayText += 'Pop'
    }
    if (displayText === '') {
      displayText = number
    }

    return (
      <div>
        {displayText}
      </div>
    );
  }
}

export default PitchPlayer;

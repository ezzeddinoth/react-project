import React, { Component } from 'react';

import test1 from './test.png';
import test2 from './test.jpeg';
import './Photos.css'

export default class Photos extends Component {
  state = {
    index: 0,
    picList: [test1, test2]
  }

  onClickNext = () => {
    if (this.state.index + 1 === this.state.picList.length) {
      this.setState({
        index: 0
      })
    } else {
      this.setState({
        index: this.state.index + 1
      })
    }
  }

  onClickPrevious = () => {
    if (this.state.index - 1 === -1) {
      this.setState({
        index: this.state.picList.length - 1
      })
    } else {
      this.setState({
        index: this.state.index - 1
      })
    }
  }


  render() {
    return (
      <div className='Gallerry'>
        <img src={this.state.picList[this.state.index]} alt="??" />
        <p></p>
        <button onClick={this.onClickPrevious}> Previous </button>
        <button onClick={this.onClickNext}> Next </button>
      </div>
    );
  }
}
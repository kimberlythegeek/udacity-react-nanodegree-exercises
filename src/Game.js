import React, { Component } from 'react';

class Game extends Component {

  constructor(props) {
    super(props);
    const values = this.getNewValues();
    this.state = {
      value1: values[0],
      value2: values[1],
      value3: values[2],
      proposedAnswer: values[3]
    };
  }

  getNewValues() {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
    return [value1, value2, value3, proposedAnswer];
  }

  evaluateAnswer(givenAnswer) {
    const { value1, value2, value3, proposedAnswer } = this.state;
    const correctAnswer = value1 + value2 + value3;
    if (givenAnswer === 'true' && (correctAnswer === proposedAnswer)) {
      return true;
    }
    else if (givenAnswer === 'false' && (correctAnswer !== proposedAnswer)) {
      return true;
    }
    else return false;
  }

  handleAnswer = event => {
    const answerWasCorrect = this.evaluateAnswer(event.target.name);
    this.props.handleAnswer(answerWasCorrect);
    this.setState(() => {
      const values = this.getNewValues();
      return {
        value1: values[0],
        value2: values[1],
        value3: values[2],
        proposedAnswer: values[3]
      }
    });
  };

  render() {
    const { value1, value2, value3, proposedAnswer } = this.state;
    return (
      <div className="game">
        <div className="equation">
          <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
        </div>
        <button name="true" onClick={this.handleAnswer}>True</button>
        <button name="false" onClick={this.handleAnswer}>False</button>
      </div>
    );
  }

}

export default Game;
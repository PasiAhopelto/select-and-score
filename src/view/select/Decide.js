import React, { Component } from 'react';

export const Decision = { YES: 1, NO: 2, UNDECIDED: 3 }

export default class Decide extends Component {
  constructor(props) {
    super(props);
    this.state = { decision: Decision.UNDECIDED };
  }

  render() {
    return <div decision={this.state.decision}></div>;
  }
}

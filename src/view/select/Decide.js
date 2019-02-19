import React, { Component } from 'react';

export const Decision = { YES: 1, NO: 2, UNDECIDED: 3 }

export default class Decide extends Component {
  constructor(props) {
    super(props);
    this.state = { decision: Decision.UNDECIDED };
    this.selectionChanged = this.selectionChanged.bind(this);
  }

  selectionChanged(event) {
    // alert("A " + event.target.value + " " + event.target.name);
  }

  render() {
    return (
      <form decision={this.state.decision}>
        <label>
          Kyllä
          <input name="decision" type="radio" value="yes" onChange={this.selectionChanged} />
        </label>
        <label>
          Ei
          <input name="decision" type="radio" value="no" onChange={this.selectionChanged} />
        </label>;
      </form>
    );
  }
}

import React, { Component } from 'react';

class HomeInput extends Component {
  render() {
    return (
      <div className="HomeInput">
        <div className="field">
          <div className="control">
            <input className="input is-medium" type="text" placeholder="What did you buy?" />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeInput;
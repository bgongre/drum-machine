import React, { Component } from "react";
import "../containers/noise-button.css";

export class NoiseButton extends Component {
  render() {
    return (
      <div className="test">
        <div className="button-container">
          <div className="button-group">
            <button className="music-buttons" type="button">
              Q
            </button>
            <button className="music-buttons" type="button">
              W
            </button>
            <button className="music-buttons" type="button">
              E
            </button>
            <button className="music-buttons" type="button">
              A
            </button>
            <button className="music-buttons" type="button">
              S
            </button>
            <button className="music-buttons" type="button">
              D
            </button>
            <button className="music-buttons" type="button">
              Z
            </button>
            <button className="music-buttons" type="button">
              X
            </button>
            <button className="music-buttons" type="button">
              C
            </button>
          </div>
        </div>
      </div>
    );
  }
}

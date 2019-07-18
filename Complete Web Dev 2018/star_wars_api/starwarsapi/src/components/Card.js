import React from 'react';

const Card = ({name, height, mass, hair_color}) => {
  return (
    <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
      <div className="tc">
        <h1 className="f4">{name}</h1>
        <hr className="mw3 bb bw1 b--black-10" /></div>
        <h4 className="tc">Character Statistics</h4>
        <p className="lh-copy measure center f6 black-70">Height: {height}cm</p>
        <p className="lh-copy measure center f6 black-70">Mass: {mass}</p>
      </article>
      );
}

export default Card;

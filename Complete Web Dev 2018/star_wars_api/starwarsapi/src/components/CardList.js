import React from 'react';
import Card from './Card';

const CardList = ({starWarsPeople}) => {
  return (
    <div>
      {
        starWarsPeople.map((user, i) => {
          return (
            <Card
              key={i}
              name={starWarsPeople[i].name}
              height={starWarsPeople[i].height}
              mass={starWarsPeople[i].mass}
              hair_color={starWarsPeople[i].hair_color}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;

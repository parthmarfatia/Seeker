"use client";

import React from "react";
import TinderCard from "react-tinder-card";

const SwipeCard = () => {
  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };
  return (
    <TinderCard
      onSwipe={onSwipe}
      onCardLeftScreen={() => onCardLeftScreen("fooBar")}
      preventSwipe={["right", "left"]}
    >
      <p className="text-5xl">Hello, World!</p>
    </TinderCard>
  );
};

export default SwipeCard;

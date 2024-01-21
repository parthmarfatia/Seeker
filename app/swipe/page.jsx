"use client";

import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import getJobs from "@/services";

function SwipePage() {
  const [lastDirection, setLastDirection] = useState();
  const [companies, setCompanies] = useState([]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  const fetchData = async () => {
    const data = await getJobs();
    setCompanies(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="swipe-container">
      <h1>Seeker</h1>
      <div className="cardContainer">
        {companies.map((character) => (
          <TinderCard
            className="swipe"
            key={character.company}
            onSwipe={(dir) => swiped(dir, character.company)}
            onCardLeftScreen={() => outOfFrame(character.company)}
          >
            <div className="card">
              <h2 style={{ color: "#000" }}>{character.company}</h2>
              <p style={{ color: "#000" }}>{character.title}</p>
            </div>
          </TinderCard>
        ))}
      </div>
      {lastDirection ? (
        <h2 className="infoText">You swiped {lastDirection}</h2>
      ) : (
        <h2 className="infoText" />
      )}
      <p style={{ color: "green" }}>Swipe right to accept</p>
      <p style={{ color: "red" }}>Swipe left to reject</p>
    </div>
  );
}

export default SwipePage;

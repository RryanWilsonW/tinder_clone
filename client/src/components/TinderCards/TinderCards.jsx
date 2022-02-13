import { CompareSharp } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./index.css";
import axios from "../../axios";
function TinderCards() {
  // This is going to set out state of people to equal an array of objects that includes our data.
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/tinder/cards");

      setPeople(req.data);
    }

    fetchData();
  }, []);

  console.log(people);
  // This function will set up the functionality for swiping.
  const swiped = (direction, nameToDelete) => {
    console.log("Removing: " + nameToDelete);
    // setLastDirection(direction); 55:39
  };
  //This function will define behavior when the card is off screen.
  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };
  return (
    <div className="tinderCards">
      <div className="tinderCardContainer">
        {/*This will map out people array, and return a card for each person. */}
        {people.map((person) => {
          return (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
            >
              {/* This div is going to return a backgrounf image of the person as well as the persons name as an h3 */}
              <div
                style={{ backgroundImage: "url(" + person.imgUrl + ")" }}
                className="card"
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
}

export default TinderCards;

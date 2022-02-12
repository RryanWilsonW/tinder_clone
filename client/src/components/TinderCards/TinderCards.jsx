import { CompareSharp } from "@material-ui/icons";
import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./index.css";
function TinderCards() {
  // This is going to set out state of people to equal an array of objects that includes our data.
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE",
    },
    {
      name: "Jeff Bezos",
      url: "https://www.biography.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg",
    },
    {
      name: "Barak Obama",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/1200px-President_Barack_Obama.jpg",
    },
    {
      name: "Chris Evans",
      url: "https://cdn.britannica.com/28/215028-050-94E9EA1E/American-actor-Chris-Evans-2019.jpg",
    },
  ]);
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
                style={{ backgroundImage: "url(" + person.url + ")" }}
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

import React, { useEffect, useState } from "react";
import axios from "axios";
import APODCard from "./APODCard";
export default function APODList() {
  const [spaceImages, setSpaceImages] = useState([]);

  const didUpdate = props => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${Math.floor(
          Math.random() * (2018 - 2000 + 1)
        ) + 2000}-${Math.floor(Math.random() * 12) + 1}-${Math.floor(
          Math.random() * 28
        ) + 1}`
      )
      .then(response => {
        //console.log(response);

        setSpaceImages(response.data);
      })
      .catch(error => console.log(error));
  };
  //console.log(spaceImages);
  useEffect(didUpdate, []);

  return (
    <div className="spacePhoto">
      <APODCard spaceImage={spaceImages} />
    </div>
  );
}

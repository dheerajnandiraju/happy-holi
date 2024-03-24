import React, { useState } from "react";
import "./wishes.css";
import color from "../images/pngwing.com.png";

function Wishes(props) {
  const [imagePositions, setImagePositions] = useState([]);
  const [imageColors, setImageColors] = useState([]);

  const handleClick = (event) => {
    const containerRect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - containerRect.left;
    const offsetY = event.clientY - containerRect.top;

    setImagePositions([...imagePositions, { x: offsetX, y: offsetY }]);
    setImageColors([...imageColors, getRandomHue()]);
  };

  const getRandomHue = () => Math.floor(Math.random() * 360);

  return (
    <div className="center display" onClick={handleClick}>
      <div style={{ color: "#959595" }}>click anywhere on the screen</div>
      <div style={{ fontSize: "xxx-large" }}>Happy Holi</div>
      <div>"Add color to your life"</div>
      <div className="name" style={{ display: "inline-flex" }}>
        {props.send}
      </div>
      {/* Map through the array of image positions to render multiple images */}
      {imagePositions.map((position, index) => (
        <img
          key={index} // Use index as key for each image
          className="image"
          src={color} // Image source
          alt="color"
          style={{
            position: "absolute",
            left: position.x - 0, // Adjust left coordinate (half of image width in pixels)
            top: position.y - -50, // Adjust top coordinate (half of image height in pixels)
            transform: "translate(-50%, -50%)", // Center the image
            filter: `hue-rotate(${imageColors[index]}deg)`, // Change the color (rotate hue by a random degree)
          }}
        />
      ))}
    </div>
  );
}

export default Wishes;

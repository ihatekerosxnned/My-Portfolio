import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: ["We Live", "We Love", "We Lulu", "Repeat"],
        autoStart: true,
        loop: true,
        deleteSpeed: 500,
      }}
    />
  );
};

export default Type;

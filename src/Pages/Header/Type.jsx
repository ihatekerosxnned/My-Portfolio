import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: ["I","Miss","You","Hihi","xd","Nigga"],
        autoStart: true,
        loop: true,
        deleteSpeed: 500,
      }}
    />
  );
};

export default Type;

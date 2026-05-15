import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Web Developer",
          "Next.js and React Developer",
          "Node.js API Builder",
          "CMS and SaaS Product Builder",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

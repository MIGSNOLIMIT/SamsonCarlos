import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Web Developer",
          "4 Years of Full Stack Experience",
          "Next.js and React Developer",
          "Webflow Developer",
          "AI Chatbot Developer",
          "CMS and Applicant Systems Builder",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

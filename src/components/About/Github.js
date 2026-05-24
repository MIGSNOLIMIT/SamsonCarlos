import React from "react";
import { Row } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h2 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Recent <strong className="purple">GitHub</strong> Activity
      </h2>
      <GitHubCalendar
        username="MIGSNOLIMIT"
        blockSize={30}
        blockMargin={10}
        color="#65c466"
        fontSize={20}
      />
    </Row>
  );
}

export default Github;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Tenzin</span>{" "}
            from <span className="purple"> India</span>.
            <br />
            I’m currently student at {" "}
            <span className="purple">Jain University</span> and{" "}
            <span className="purple">pursuing</span>.
            <br />B.Tech in{" "}
            <span className="purple">Computer Science Engineering</span> 
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Help people
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Tenzin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

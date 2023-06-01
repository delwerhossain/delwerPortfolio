import React from "react";
import "../../pages/style.css";
import { Container, Row, Col } from "react-bootstrap";
import Text from "../Homepage/Text";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <div className="homepagebackground">
      <Container>
        <Row>
          <Col md={7}>
            <h2 className="headtext">
              Hello <span className="wave">👋 </span>
            </h2>
            <h2 className="nametext">I'm MD. Delwer Hossain</h2>
            <span></span>
            <Text />
            <button
              onClick={() => {
                window.open("https://github.com/delwerhossain");
              }}
              className="socailmediabtn"
            >
              <AiFillGithub className="icon" />
            </button>
            <button
              onClick={() => {
                window.open("https://www.linkedin.com/in/delwer-hossain/");
              }}
              className="socailmediabtn"
            >
              <FaLinkedinIn className="icon" />
            </button>
            <button
              onClick={() => {
                window.open("https://twitter.com/delwerhossain0");
              }}
              className="socailmediabtn"
            >
              <AiOutlineTwitter className="icon" />
            </button>
          </Col>

          <Col md={5}>
            <div className="imagedeveloper"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;

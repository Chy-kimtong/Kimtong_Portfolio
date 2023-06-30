import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiKaggle } from "react-icons/si";
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              GET TO <span className="purple"> KNOW</span> ME
            </h1>
            <p className="home-about-body">
              I'm interested in <b className="purple">DATA</b>, I would like to
              seek for information that can be use without any wasted. Isn't it
              interesting to be able to utilize everything that normally people
              tend to ignore🤷‍♂️
              <br />
              <br />I am good at
              <i>
                <b className="purple">
                  {" "}
                  Python, Javascript, Content Writer, Data Annotate, and Data
                  Science{" "}
                </b>
              </i>
              <br />
              <br />
              My field of interest's are to analyst and solve &nbsp;
              <i>
                <b className="purple">The Problem </b> then give solution to
                specific the area and also in areas related to{" "}
                <b className="purple">Data Science, Machine Learning and A.I</b>
              </i>
              <br />
              <br />I am looking for developing myself and improve my skill of
              Interest such as <b className="purple">Building the AI</b>
              <i>
                <b className="purple"> </b>
              </i>
            </p>
          </Col>
          {/* <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col> */}
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Chy-kimtong"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kimtong-chy2001/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.kaggle.com/chykimtong"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiKaggle />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

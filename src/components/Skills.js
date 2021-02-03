import React, { useState } from "react";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";

function Skills() {
  const [text, setText] = useState(true);
  const [animation, setAnimation] = useState(false);

  const textClickHandler = () => {
    setAnimation(false);
    setText(true);
  };

  const animationClickHandler = () => {
    setText(false);
    setAnimation(true);
  };

  return (
    <section
      style={{ padding: "100px 0", backgroundColor: "#20232A" }}
      id="skills"
    >
      <Container>
        <React.Fragment>
          <Row>
            <h1
              style={{
                borderBottom: "#3BE0FD 1px solid",
                margin: "20px auto",
                color: "#fff",
              }}
            >
              SKILLS
            </h1>
          </Row>
        </React.Fragment>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginBottom: "30px",
          }}
        >
          <span style={{ color: "#fff" }}>
            Press a button to change state!{" "}
          </span>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Button variant="light" onClick={textClickHandler}>
              Text
            </Button>
            <Button variant="info" onClick={animationClickHandler}>
              Animation
            </Button>
          </div>
        </div>
        {text && (
          <Row>
            <Col>
              <ListGroup>
                <ListGroup.Item>WEB</ListGroup.Item>
                <ListGroup.Item variant="primary">HTML </ListGroup.Item>
                <ListGroup.Item variant="secondary">CSS</ListGroup.Item>
                <ListGroup.Item variant="success">JAVASCRIPT</ListGroup.Item>
                <ListGroup.Item variant="danger">REACT</ListGroup.Item>
                <ListGroup.Item variant="warning">ANGULAR</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <ListGroup>
                <ListGroup.Item>PROGRAMMING</ListGroup.Item>
                <ListGroup.Item variant="primary">C</ListGroup.Item>
                <ListGroup.Item variant="secondary">C++</ListGroup.Item>
                <ListGroup.Item variant="success">C#</ListGroup.Item>
                <ListGroup.Item variant="danger">JAVA</ListGroup.Item>
                <ListGroup.Item variant="warning">PYTHON</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        )}

        {animation && (
          <Container>
            {" "}
            <Row
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginBottom: "30px",
              }}
            >
              <div className="left_to_right">
                <i class="fab fa-react fa-7x" style={{ color: "#5ED3F3" }}></i>
              </div>
              <div className="up_to_down">
                <i class="fab fa-js fa-7x" style={{ color: "#EFD81D" }}></i>
              </div>
              <div className="up_to_down" style={{ color: "#fff" }}>
                <i class="fab fa-wordpress-simple fa-7x"></i>
              </div>
              <div className="right_to_left">
                <i
                  class="fab fa-angular fa-7x"
                  style={{ color: "#BD002E" }}
                ></i>
              </div>
            </Row>
            <Row style={{ display: "flex", justifyContent: "space-around" }}>
              <div className="left_to_right">
                <i class="fab fa-node fa-7x" style={{ color: "#6FA06B" }}></i>
              </div>
              <div className="down_to_up">
                <i class="fab fa-sass fa-7x" style={{ color: "#C2508A" }}></i>
              </div>
              <div className="down_to_up">
                <i class="fab fa-java fa-7x" style={{ color: "#F0931C" }}></i>
              </div>
              <div className="right_to_left">
                <i class="fab fa-css3 fa-7x" style={{ color: "#28A4D8" }}></i>
              </div>
            </Row>
          </Container>
        )}
      </Container>
    </section>
  );
}

export default Skills;

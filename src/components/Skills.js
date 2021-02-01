import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

function Skills() {
  return (
    <section
      style={{ padding: "100px 0", backgroundColor: "#20232A" }}
      id="skills"
    >
      <Container>
        <Row>
          <h1
            style={{
              borderBottom: "#3BE0FD 1px solid",
              margin: "30px auto",
              color: "#fff",
            }}
          >
            SKILLS
          </h1>
        </Row>
        <Row>
          <Col>
            <ListGroup>
              <ListGroup.Item>
                WEB <i class="fab fa-chrome"></i>
              </ListGroup.Item>
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
      </Container>
    </section>
  );
}

export default Skills;

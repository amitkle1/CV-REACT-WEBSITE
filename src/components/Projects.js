import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";

function Projects() {
  return (
    <section
      style={{ padding: "50px 0", backgroundColor: "#C7C8CA" }}
      id="projects"
    >
      <Container>
        <Row>
          <h1 style={{ borderBottom: "#3BE0FD 1px solid", margin: "0 auto" }}>
            PROJECTS
          </h1>
        </Row>
        <Row style={{}}>
          <Col xs={12} md={6} xl={4}>
            <Card style={{ margin: "30px" }}>
              <Card.Img
                style={{ height: "30vh" }}
                src="https://i.ibb.co/LQXVTvd/todolistangular.jpg"
              />
              <Card.Body>
                <Card.Title>Angular TO-DO-LIST APP</Card.Title>
                <Card.Text>
                  Todo-list project created with angular using typescript
                </Card.Text>
                <Card.Link>
                  <Badge variant="dark">Angular</Badge>{" "}
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} xl={4}>
            <Card style={{ margin: "30px" }}>
              <Card.Img
                style={{ height: "30vh" }}
                src="https://github.com/ColmanDevClub/First-Js-Challenges/raw/starting-files/rock-paper-scissors/assets/design/mobile-step-1.jpg"
              />
              <Card.Body>
                <Card.Title>ROCK-PAPER-SCISSORS</Card.Title>
                <Card.Text>
                  Rock Paper Scissors project i made using html css and
                  javascript
                </Card.Text>
                <Card.Link>
                  <Badge variant="danger">HTML</Badge>{" "}
                </Card.Link>
                <Card.Link>
                  <Badge variant="info">CSS</Badge>
                </Card.Link>
                <Card.Link>
                  <Badge variant="warning">Javascript</Badge>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} xl={4}>
            <Card style={{ margin: "30px" }}>
              <Card.Img
                style={{ height: "30vh" }}
                src="https://i.ibb.co/RgfKHcB/chicken.jpg"
              />
              <Card.Body>
                <Card.Title>Chiken Invaders</Card.Title>
                <Card.Text>
                  Chicken Invaders game i developed using Python
                </Card.Text>
                <Card.Link>
                  <Badge style={{ border: "1px solid black" }} variant="light">
                    Python
                  </Badge>{" "}
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{}}>
          <Col xs={12} md={6} xl={4}>
            <Card style={{ margin: "30px" }}>
              <Card.Img
                style={{ height: "30vh" }}
                src="https://i.ibb.co/zFC7xFH/mern.jpg"
              />
              <Card.Body>
                <Card.Title>MERN APP</Card.Title>
                <Card.Text>
                  MERN APP - a app i developed using React, Node.js, Express,
                  MongoDB.
                </Card.Text>

                <Card.Link>
                  <Badge variant="primary">ReactJS</Badge>{" "}
                </Card.Link>
                <Card.Link>
                  <Badge variant="Secondary">Node.js</Badge>
                </Card.Link>
                {/* <Card.Link>
                    <Badge variant="secondary">Express.js</Badge>
                  </Card.Link> */}
                <Card.Link>
                  <Badge variant="success">MongoDB</Badge>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} xl={4}>
            <Card style={{ margin: "30px" }}>
              <Card.Img
                style={{ height: "30vh" }}
                src="https://i.ibb.co/zSQJjrv/fylojpg.jpg"
              />
              <Card.Body>
                <Card.Title>FYLO CSS PROJECT</Card.Title>
                <Card.Text>
                  frontend design i made during my time as a Colman Dev Club
                  member
                </Card.Text>
                <Card.Link>
                  <Badge variant="danger">HTML</Badge>{" "}
                </Card.Link>
                <Card.Link>
                  <Badge variant="info">CSS</Badge>
                </Card.Link>
                <Card.Link>
                  <Badge variant="warning">Javascript</Badge>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} xl={4}>
            <Card style={{ margin: "30px" }}>
              <Card.Img
                style={{ height: "30vh" }}
                src="https://i.ibb.co/pvr06rV/coursejpg.jpg"
              />
              <Card.Body>
                <Card.Title>MERN APP - UDEMY COURSE</Card.Title>
                <Card.Text>
                  MERN APP using React, Node, Express and mongoDB.
                </Card.Text>
                <Card.Link>
                  <Badge variant="primary">ReactJS</Badge>{" "}
                </Card.Link>
                <Card.Link>
                  <Badge variant="Secondary">Node.js</Badge>
                </Card.Link>
                {/* <Card.Link>
                    <Badge variant="secondary">Express.js</Badge>
                  </Card.Link> */}
                <Card.Link>
                  <Badge variant="success">MongoDB</Badge>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
//  <CardItem
//           src=""
//           text=""
//           label="Adventure"
//           path="/services"
//         />
//         <CardItem
//           src=""
//           text=""
//           label="Adventure"
//           path="/services"
//         />
//         <CardItem
//           src=""
//           text=""
//           label="Adventure"
//           path="/services"
//         />
//       </ul>
//       <ul className="cards__items">
//         <CardItem
//           src=""
//           text=" "
//           label="Adventure"
//           path="/services"
//         />
//         <CardItem
//           src=""
//           text=""
//           label="Adventure"
//           path="/services"
//         />
//         <CardItem
//           src=""
//           text=""
//           label="Adventure"
//           path="/services"
//         />

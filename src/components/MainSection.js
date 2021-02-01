import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import me from "../Asset/me.jpg";

function MainSection() {
  return (
    <section
      style={{ padding: "100px 0", backgroundColor: "#C7C8CA" }}
      id="about"
    >
      <Container className="mt-50">
        <Row>
          <Col
            xs={12}
            md={6}
            xl={6}
            style={{ padding: "50px", textAlign: "center" }}
          >
            <Card>
              <Card.Img src={me} />
            </Card>
          </Col>
          <Col
            xs={12}
            md={6}
            xl={6}
            style={{ padding: "50px", textAlign: "center" }}
          >
            {" "}
            <h1 style={{ marginBottom: "50px" }}>
              <small> My name is</small> <br /> Amit Klein
            </h1>
            <p>
              I am a fullstack developer, specialize in{" "}
              <b>React and NodeJS, Html. CSS/SCSS. </b>
              I'm Highly motivated, A decision maker who finds solutions to
              problems. Have the ability to work in a highly pressurised
              environment. I consider myself as a team player with great
              interpersonal skills.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <i
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/amit-klein-a8061b183/",
                    "_blank"
                  )
                }
                class="fab fa-linkedin fa-2x"
              ></i>

              <i
                onClick={() =>
                  window.open("https://github.com/amitkle1", "_blank")
                }
                class="fab fa-github fa-2x"
              ></i>
              <i
                onClick={() =>
                  window.open(
                    "https://docs.google.com/document/d/e/2PACX-1vQ7vTOeGKfW5qBXNg63FUSbEYQC-MfqlXM2k-GVeZBxtzsDIBYR6Vclx36CL7TZSqiSV1PKB_MdCyy-/pub",
                    "_blank"
                  )
                }
                class="fas fa-file-pdf fa-2x"
              ></i>
            </div>
          </Col>
        </Row>
        <Row
          style={{
            paddingLeft: "100px",
          }}
        >
          <i style={{ paddingRight: "20px" }} class="fas fa-phone"></i>{" "}
          <span>
            {"   "}
            <b>050-9272926</b>
          </span>
        </Row>
        <Row style={{ paddingLeft: "100px" }}>
          <i style={{ paddingRight: "20px" }} class="fas fa-envelope"></i>{" "}
          <span>
            {"   "}
            <b>amitklain1@gmail.com</b>
          </span>
        </Row>
        <Row>
          <span
            style={{
              borderBottom: "black 5px solid",
              width: "100%",
              padding: "80px",
            }}
          ></span>
        </Row>
      </Container>
    </section>
  );
}

export default MainSection;

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Military() {
  return (
    <section style={{ padding: "50px 0" }} id="military">
      <Container>
        <Row>
          <h1 style={{ borderBottom: "#3BE0FD 1px solid", margin: "0 auto" }}>
            MILITARY
          </h1>
        </Row>
        <Row>
          <Col
            xs={12}
            md={6}
            xl={6}
            style={{ padding: "50px", textAlign: "center" }}
          >
            <Card>
              <Card.Img src="https://upload.wikimedia.org/wikipedia/commons/6/68/AmanLogo.svg" />{" "}
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
              8200 UNIT <br /> <small>2012-2015</small>{" "}
            </h1>
            <p>
              <ul>
                <Card style={{ marginBottom: "40px" }}>
                  <Card.Text>
                    Collected signal intelligence using{" "}
                    <b>highly classified information</b> involving an
                    understanding of Arabic.
                  </Card.Text>
                </Card>
                <Card style={{ marginBottom: "40px" }}>
                  <Card.Text>
                    {" "}
                    <b> Head of SIGINT Team</b> – Managed a team of 15 soldiers.
                  </Card.Text>
                </Card>
                <Card style={{ marginBottom: "40px" }}>
                  <Card.Text>
                    {" "}
                    Controlled and <b>prioritized missions.</b>
                  </Card.Text>
                </Card>
                <Card style={{ marginBottom: "40px" }}>
                  <Card.Text>
                    {" "}
                    Dealt with <b>complex situations.</b>
                  </Card.Text>
                </Card>
                <Card style={{ marginBottom: "40px" }}>
                  <Card.Text>
                    {" "}
                    Analyse and process Intelligence data from a variety of
                    sources while using
                    <b> intelligence systems and technologies.</b>
                  </Card.Text>
                </Card>
              </ul>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Military;

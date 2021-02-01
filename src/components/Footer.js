import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <section style={{ padding: "30px 0", backgroundColor: "#C7C8CA" }}>
      <Container>
        <Row>
          <Col style={{ display: "flex", justifyContent: "space-evenly" }}>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-whatsapp"></i>
            <i class="far fa-envelope"></i>
            <i class="fas fa-share-alt"></i>
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <i style={{ marginRight: "10px" }} class="far fa-copyright"></i>{" "}
            <span> Developed by Amit Klein using ReactJS</span>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Footer;

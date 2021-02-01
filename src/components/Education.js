import React from "react";
import { Container, Row } from "react-bootstrap";

function Education() {
  return (
    <section
      style={{ padding: "50px 0", backgroundColor: "#20232A" }}
      id="education"
    >
      <Container style={{ color: "#fff" }}>
        <h1
          style={{
            borderBottom: "#3BE0FD 1px solid",
            margin: "0 auto 30px",
            color: "#fff",
          }}
        >
          Education
        </h1>

        <div>
          <p>
            <h3> The College Of Academic Management Studies</h3>
            <ul>
              <li>
                <b>2018-Present</b> 3rd year Computer Science student (B.Sc).
                GPA:89{" "}
              </li>
            </ul>
            <h3>Part of the Colman Dev Club.</h3>
            <ul>
              <li>
                2020-Present Taking part in a limited group of students that
                were preselected and making weekly meetings in order to
                professionalize in HTML, CSS and JS and become better
                developers.
              </li>
            </ul>
            <h3>Mekif H High School, Rishon Le-Zion.</h3>
            <ul>
              <li>
                2009-2011 Matriculation certificate majoring in Communication
                (finished with Excellence).
              </li>
            </ul>
          </p>
        </div>

        <h3>Volunteering</h3>
        <ul>
          <li>
            2018-2019 | THE PERACH TUTORIAL PROJECT Mentored a child from a
            disadvantaged socio-economic background to achieve success in his
            studies. (completed the course with excellence).
          </li>
        </ul>
      </Container>
    </section>
  );
}

export default Education;

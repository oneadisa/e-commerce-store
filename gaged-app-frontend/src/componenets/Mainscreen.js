import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Screens.css";

const Mainscreen = ({ children, title }) => {
  return (
    <div className="mainback">
      <Container>
        <Row>
          <div className="page">
            {title && (
              <>
                <h1 className="heading">{title}</h1>
                <hr />
              </>
            )}
            {children}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Mainscreen;

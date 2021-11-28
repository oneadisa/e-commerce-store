import React from "react";
import { Container, Row } from "react-bootstrap";

const Mainscreen = ({ children, title }) => {
  return (
    <div className="mainback">
      <Container>
        <Row>
          <div className="page">
            {title && (
              <>
                <h1 className="heading text-xl font-semibold my-10 text-gray-500 text-left">
                  {title}
                </h1>
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

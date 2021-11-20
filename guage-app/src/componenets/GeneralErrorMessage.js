import React from "react";
import { Alert } from "react-bootstrap";

const GeneralErrorMessage = ({ variant = "info", children }) => {
  return (
    <Alert variant={variant} style={{ fontSize: 20 }}>
      <strong>{children}</strong>
    </Alert>
  );
};

export default GeneralErrorMessage;
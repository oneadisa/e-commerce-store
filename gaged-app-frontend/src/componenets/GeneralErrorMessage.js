import React from "react";
import { Alert } from "react-bootstrap";

const GeneralErrorMessage = ({ variant = "danger", children }) => {
  return (
    <Alert class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 font-bold text-center" role="alert" variant={variant} style={{ fontSize: 20 }}>
      <strong>{children}</strong>
    </Alert>
  );
};

export default GeneralErrorMessage;
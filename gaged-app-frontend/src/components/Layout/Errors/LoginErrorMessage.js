import React from "react";

const ErrorMessage = () => {
  return (
    <div
      className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 text-center"
      role="alert"
    >
      <p className="font-bold">Uh-oh! Invalid email or password.</p>
      <p className="text-sm">
        Check to make sure of your information or Sign up if you haven't.
      </p>
    </div>
  );
};

export default ErrorMessage;

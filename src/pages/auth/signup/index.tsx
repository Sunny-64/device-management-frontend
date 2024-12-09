import React from "react";
import Form from "./Form";

const Signup = () => {
  return (
    <div className="w-full text-center mt-4">
      <p className="font-bold text-xl mb-4">Welcome to Device Manager!!</p>
      <div className="p-2">
        <Form
          buttonText="Sign Up"
          secondaryButtonText="Sign In"
          secondaryButtonRedirect="signin"
        />
      </div>
    </div>
  );
};

export default Signup;

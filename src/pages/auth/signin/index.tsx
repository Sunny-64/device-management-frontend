import Form from "./Form";

const Signin = () => {
  return (
    <div className="w-full text-center mt-4">
      <p className="font-bold text-xl mb-4">Welcome Back!!</p>
      <div className="p-2">
        <Form buttonText = "Sign In" secondaryButtonText = "Sign Up" secondaryButtonRedirect="signup"/>
      </div>
    </div>
  );
};

export default Signin;

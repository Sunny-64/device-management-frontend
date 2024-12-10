import Form from "./Form";

const Signin = () => {
  return (
    <div className="w-full text-center mt-4 lg:w-2/3 xl:1/2 md:bg-white lg:shadow-md lg:rounded-md lg:py-10 lg:px-4 xl: px-10">
      <p className="font-bold text-xl mb-4">Welcome Back!!</p>
      <div className="p-2">
        <Form buttonText = "Sign In" secondaryButtonText = "Sign Up" secondaryButtonRedirect="signup"/>
      </div>
    </div>
  );
};

export default Signin;

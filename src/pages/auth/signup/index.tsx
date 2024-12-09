import Form from "./Form";

const Signup = () => {
  return (
    <div className="w-full text-center mt-4 lg:w-2/3 xl:1/2 md:bg-white lg:shadow-md lg:rounded-md lg:py-10 lg:px-4 xl: px-10">
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

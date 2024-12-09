import { Routes, Route } from "react-router";
import { AuthLayout, Signin, Signup, VerifyOtp, Layout, Home } from "./pages";
import { useAuth } from "./context";

const Router = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {isAuthenticated ? (
        <>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="*" element={<div>404</div>} />
        </>
      ) : (
        <Route path="/" element={<AuthLayout />}>
          <Route path="/" element={<Signin />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="verify-otp" element={<VerifyOtp />} />
        </Route>
      )}
    </Routes>
  );
};

export default Router;

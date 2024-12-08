import { BrowserRouter, Routes, Route } from "react-router";
import { AuthLayout, Signin, Signup, VerifyOtp, Layout, Home } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<AuthLayout />}>
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="verify-otp" element={<VerifyOtp />} />
        </Route>

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="*" element={<div>404</div>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { Routes as Router, Route, Navigate } from "react-router-dom";
import App from "./App";
import ContactUs from "./pages/Contact";
import Events from "./pages/Events";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import Paynow from "./pages/Paynow";
import Privacy from "./pages/Privacy";
import Reach from "./pages/Reach";
import Refund from "./pages/Refund";
import ResetPassword from "./pages/ResetPassword";
import Signup from "./pages/Signup";
import Terms from "./pages/T&C";
import UserPage from "./pages/UserPage";
import ZealIDPage from "./pages/ZealIdPage";

const Routes = () => {
  return (
    <Router>
      <Route
        exact
        path="/"
        element={
          <React.Suspense fallback={<div>Loading....</div>}>
            <App />
          </React.Suspense>
        }
      />
      <Route
        exact
        path="/login"
        element={
          <React.Suspense fallback={<div>Loading....</div>}>
            <Login />
            {/* <Footer /> */}
          </React.Suspense>
        }
      />
      <Route
        exact
        path="/register"
        element={
          <React.Suspense fallback={<div>Loading....</div>}>
            <Signup />
            {/* <Footer /> */}
          </React.Suspense>
        }
      />
      <Route
        exact
        path="/paynow"
        element={
          <React.Suspense fallback={<div>Loading....</div>}>
            <Paynow />
          </React.Suspense>
        }
      />
      <Route
        exact
        path="/zeal"
        element={
          <React.Suspense fallback={<div>Loading....</div>}>
            <ZealIDPage />
          </React.Suspense>
        }
      />
      <Route
        exact
        path="/user"
        element={
          <React.Suspense fallback={<div>Loading....</div>}>
            <UserPage />
          </React.Suspense>
        }
      />
      <Route
        exact
        path="/events"
        element={
          <React.Suspense fallback={<div>Loading....</div>}>
            <Events />
          </React.Suspense>
        }
      />
      <Route
        exact
        path="/reach"
        element={
          <React.Suspense fallback={<div>Loading....</div>}>
            <Reach />
          </React.Suspense>
        }
      />
      <Route
        exact
        path="/forgot-password"
        element={
          <React.Suspense fallback={<div>Loading....</div>}>
            <ForgotPassword />
          </React.Suspense>
        }
      />
      <Route
        exact
        path="/reset-password"
        element={
          <React.Suspense fallback={<div>Loading....</div>}>
            <ResetPassword />
          </React.Suspense>
        }
      />
      <Route
        exact
        path="/privacy"
        element={
          <React.Suspense fallback={<div>Loading....</div>}>
            <Privacy />
          </React.Suspense>
        }
      />
      <Route
        exact
        path="/refund"
        element={
          <React.Suspense fallback={<div>Loading....</div>}>
            <Refund />
          </React.Suspense>
        }
      />
      <Route
        exact
        path="/terms"
        element={
          <React.Suspense fallback={<div>Loading....</div>}>
            <Terms />
          </React.Suspense>
        }
      />
      <Route
        exact
        path="/contact-us"
        element={
          <React.Suspense fallback={<div>Loading....</div>}>
            <ContactUs />
          </React.Suspense>
        }
      />
      <Route path="*" element={<div>404</div>} />
    </Router>
  );
};

export default Routes;

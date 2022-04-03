import React from "react";
import { Routes as Router, Route, Navigate } from "react-router-dom";
import App from "./App";
import Events from "./pages/Events";
import Login from "./pages/Login";
import Reach from "./pages/Reach";
import Signup from "./pages/Signup";

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
      <Route path="*" element={<div>404</div>} />
    </Router>
  );
};

export default Routes;

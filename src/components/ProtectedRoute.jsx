import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children, isAllowed, role, isLoggedIn }) => {
  if (!isLoggedIn && !isAllowed) {
    return <Navigate to="/login" replace />;
  }

  if (!isAllowed && isLoggedIn && role === "admin") {
    return <Navigate to="/dashboard" replace />;
  }

  if (!isAllowed && isLoggedIn && role === "user") {
    return <Navigate to="/" replace />;
  }

  if (!isAllowed && !role) {
    return <Navigate to="/" replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  isAllowed: PropTypes.bool,
  role: PropTypes.string,
  isLoggedIn: PropTypes.bool,
  children: PropTypes.element,
};

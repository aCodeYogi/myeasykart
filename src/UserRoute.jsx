import React from "react";
import { Navigate } from "react-router";
import withUser from "./withUser";

function UserRoute({ user, children }) {
  if (!user) {
    return <Navigate to="/login" />;
  }
  return <div className="p-10 bg-blue-500">{children}</div>;
}

export default withUser(UserRoute);

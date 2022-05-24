import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
  return {
    ...(props.loggedIn ? (
      <Component {...props} />
    ) : (
      <Navigate to="/sign-in" replace />
    )),
  };
};




// этот компонент принимает другой компонент в качестве пропса
// он также может взять неограниченное число пропсов и передать их новому компоненту
// const ProtectedRoute = ({ loggedIn, path, children }) => {
//   console.log('is', loggedIn)
//   return (loggedIn ? children : <Navigate to="/sign-in" />)
// }
  


export default ProtectedRoute; 
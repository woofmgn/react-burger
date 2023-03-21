import PropTypes from "prop-types";
// import { FC, ReactNode } from 'react';
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

// type TProtectedRouteProps = {
//   element: ReactNode;
// };

export const ProtectedRoute = ({ element }) => {
  const { logged } = useSelector((state) => state.userReducer);
  const location = useLocation();

  return logged ? (
    element
  ) : (
    <Navigate to="/login" replace state={{ redirectTo: location }} />
  );
};

ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

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

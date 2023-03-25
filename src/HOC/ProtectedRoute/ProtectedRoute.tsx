import PropTypes from "prop-types";
import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate, RouteProps, useLocation } from "react-router-dom";

type TProtectedRouteProps = {
  element: JSX.Element;
} & RouteProps;

export const ProtectedRoute: FC<TProtectedRouteProps> = ({ element }) => {
  const { logged } = useSelector((state: any) => state.userReducer);
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

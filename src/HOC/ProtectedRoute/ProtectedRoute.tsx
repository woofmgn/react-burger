import { FC } from "react";
import { Navigate, RouteProps, useLocation } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppSelector";

type TProtectedRouteProps = {
  element: JSX.Element;
} & RouteProps;

export const ProtectedRoute: FC<TProtectedRouteProps> = ({ element }) => {
  const { logged } = useAppSelector((state) => state.userReducer);
  const location = useLocation();

  return logged ? (
    element
  ) : (
    <Navigate to="/login" replace state={{ redirectTo: location }} />
  );
};

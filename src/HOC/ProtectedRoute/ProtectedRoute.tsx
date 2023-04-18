import { FC } from "react";
import { Navigate, RouteProps, useLocation } from "react-router-dom";
import { Loader } from "../../Components/Loader/Loader";
import { useAppSelector } from "../../hooks/useAppSelector";

type TProtectedRouteProps = {
  element: JSX.Element;
  background?: Location;
} & RouteProps;

export const ProtectedRoute: FC<TProtectedRouteProps> = ({
  element,
  background = null,
}) => {
  const { logged } = useAppSelector((state) => state.userReducer);
  const location = useLocation();

  if (background && !logged) {
    return <Loader />;
  }

  return logged ? (
    element
  ) : (
    <Navigate to="/login" replace state={{ redirectTo: location }} />
  );
};

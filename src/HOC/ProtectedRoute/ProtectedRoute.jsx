import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ element, logged }) => {
  const location = useLocation();

  return logged ? (
    element
  ) : (
    <Navigate to="/login" replace state={{ redirectTo: location }} />
  );
};

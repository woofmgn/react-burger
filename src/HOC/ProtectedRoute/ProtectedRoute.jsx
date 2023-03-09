// import { useCallback } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
// import { getUser } from "../../services/actions/user";

export const ProtectedRoute = ({ element }) => {
  const { logged } = useSelector((state) => state.userReducer);

  const location = useLocation();

  // const dispatch = useDispatch();

  // const handleInit = useCallback(() => {
  //   if (!logged) {
  //     dispatch(getUser());
  //   }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [dispatch]);

  // useEffect(() => {
  //   handleInit();
  // }, [handleInit]);

  // if (!success && !user) {
  //   return null;
  // }

  // return logged ? element : <Navigate to="/login" replace />;
  return logged ? (
    element
  ) : (
    <Navigate to="/login" replace state={{ redirectTo: location }} />
  );
};

import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUser } from "../../services/actions/user";

export const ProtectedRoute = ({ element }) => {
  const { user, success } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();

  const handleInit = useCallback(() => {
    if (!user) {
      dispatch(getUser());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    handleInit();
  }, [handleInit]);

  // if (!success && !user) {
  //   return null;
  // }

  return user ? element : <Navigate to="/login" replace />;
};

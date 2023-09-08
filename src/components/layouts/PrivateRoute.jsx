import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { setUser, toggleLoading } from "../../redux/features/user/userSlice";
import auth from "../../utils/firebase.config";
import Loading from "./Loading";

const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();

  const { email, isLoading } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(
          setUser({ name: currentUser.displayName, email: currentUser.email })
        );
        dispatch(toggleLoading(false));
      } else {
        dispatch(setUser({ name: "", email: "" }));
        dispatch(toggleLoading(false));
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && !email) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return children;
};

export default PrivateRoute;

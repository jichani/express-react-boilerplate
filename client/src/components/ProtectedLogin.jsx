import { Navigate } from "react-router-dom";
import useUser from "../hooks/useUser";

export default function ProtectedLogin({ children }) {
  const { isLoggedIn } = useUser();
  if (!isLoggedIn) {
    return <Navigate to="/home" />;
  } else {
    return children;
  }
}

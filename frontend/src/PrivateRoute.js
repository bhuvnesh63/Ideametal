import { Navigate } from "react-router-dom";
// import { useAuthValue } from "./AuthContext";
import { useAuthValue } from "./components/AuthContext";

export default function PrivateRoute({ children }) {
  const { currentUser } = useAuthValue();

  if (!currentUser?.emailVerified) {
    return <Navigate to="/admin" replace />;
  }

  return children;
}
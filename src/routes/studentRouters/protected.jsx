
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "../../components/common/spinner";


const ProtectedRoute = () => {
  const { user, loading } = useSelector((state) => state.user);
  const isAuthenticated = user.isAuthenticated;

  if (loading) {
    return <Spinner/>; 
  }

  if (!isAuthenticated) {
    return <Navigate to="/student/auth" replace />;
  }
  return <Outlet />;

}

export default ProtectedRoute

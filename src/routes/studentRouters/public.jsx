
import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux";
import Spinner from "../../components/common/spinner";


const PublicRouter = () => {
  const { user, loading } = useSelector(
    (state) => state.user
  );
  
  if (loading) {
    return <Spinner/>
  }

  if (user.isAuthenticated && user.role === "student") {
    return <Navigate to="/student/home" replace />;
  }
  return <Outlet />

}

export default PublicRouter

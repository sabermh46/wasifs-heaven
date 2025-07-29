// import { useSelector } from 'react-redux';
import { Navigate, useLocation, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const isAuthenticated = true
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Render child routes using Outlet
  return <Outlet />;
};

export default ProtectedRoute;
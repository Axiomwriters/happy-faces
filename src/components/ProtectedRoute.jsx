import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, requiredRole }) => {
    // TODO: Implement actual authentication check
    // For now, we'll use localStorage to simulate authentication
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    const userRole = localStorage.getItem('userRole'); // 'admin' or 'student'

    if (!isAuthenticated) {
        // Redirect to login if not authenticated
        return <Navigate to="/login" replace />;
    }

    if (requiredRole && userRole !== requiredRole) {
        // Redirect to appropriate dashboard if role doesn't match
        if (userRole === 'admin') {
            return <Navigate to="/admin" replace />;
        } else if (userRole === 'student') {
            return <Navigate to="/student" replace />;
        }
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;

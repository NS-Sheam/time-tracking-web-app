
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);


    if (!loading && user?.email) {
        return children;
    }

    if (!loading) {
        return <Navigate to="/auth" replace></Navigate>;

    }
};

export default PrivateRoutes;
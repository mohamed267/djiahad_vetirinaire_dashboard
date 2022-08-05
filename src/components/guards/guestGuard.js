

import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const GuestGuard = ({ children }) => {
    const auth = useSelector((state) => state.auth);
    const { isLoggedIn } = auth;

    if (isLoggedIn) {
        return <Navigate to={"/document/filter"} />;
    }

    return <>{children}</>;
};

export default GuestGuard;


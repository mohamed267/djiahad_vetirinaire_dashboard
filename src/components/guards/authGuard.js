import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthGuard = ({ children }) => {
    const auth = useSelector((state) => state.auth);
    const { isLoggedIn } = auth;

    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default AuthGuard;
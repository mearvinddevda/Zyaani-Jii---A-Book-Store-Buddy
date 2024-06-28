import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({ children }) { // Destructure children from props
    const initialAuthUser = localStorage.getItem("User");
    const [authUser, setAuthUser] = useState(
        initialAuthUser ? JSON.parse(initialAuthUser) : undefined
    );

    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext); // Return the result of useContext;

import React, { useState, useContext, createContext, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(localStorage.getItem('auth'));
    const [userEmail, setUserEmail] = useState("");

    useEffect(() => {
        const loadAuth = async () => {
            const storedUserEmail = localStorage.getItem('userEmail');
            setUserEmail(storedUserEmail);
            setAuthenticated(storedUserEmail !== null); // Adjust this logic based on your auth criteria
        };

        loadAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ authenticated, setAuthenticated, userEmail, setUserEmail }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

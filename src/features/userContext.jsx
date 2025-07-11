import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // Directamente establecemos el usuario en el estado
                setUser({
                    uid: authUser.uid, 
                    username: authUser.displayName,
                    email: authUser.email,
                });
            } else {
                setUser(null);
            }
            setIsLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const logoutUser = () => {
        signOut(auth).then(() => {
            // Cerrar sesión exitosamente
            setUser(null);
        }).catch((error) => {
            // Manejo de errores
            console.error("Error al cerrar sesión:", error);
        });
    };
    const contextValue = {
        user,
        isLoading,
        setUser, // Renombrado para claridad
        setIsLoading,
        logoutUser,
    };
    
    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};

const useUserContext = () => {
    return useContext(UserContext);
};

export { UserProvider, useUserContext };
import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                setUser({
                    uid: authUser.uid, 
                    username: authUser.displayName,
                    email: authUser.email,
                });
                setIsLoading(false);
            } else {
                setIsLoading(false);
                console.log('User is not logged in.');
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <AppContext.Provider value={{ user, isLoading }}>
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => {
    return useContext(AppContext);
};

export { AppProvider, useAppContext };
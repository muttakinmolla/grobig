import React from 'react';
import app from '../../firebase/firebase.config';
import { getAuth } from 'firebase/auth';
import { createContext } from 'react';



export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
    const user ={name: 'shown'}

    const authInfo = {
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
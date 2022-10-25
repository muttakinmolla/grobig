import React from 'react';
import app from '../../firebase/firebase.config';
import { getAuth } from 'firebase/auth';
import { createContext } from 'react';



const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = () => {
    return (
        <div>
            
        </div>
    );
};

export default AuthProvider;
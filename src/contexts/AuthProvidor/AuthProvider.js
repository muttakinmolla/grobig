import React from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';



export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleSignIn = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    const createUserEmailPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInEmailPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const githubSignin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const updateUserProfile = (profile) => {
        // setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, []);

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    const authInfo = {
        user,
        googleSignIn,
        logOut,
        createUserEmailPassword,
        signInEmailPassword,
        loading,
        githubSignin,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
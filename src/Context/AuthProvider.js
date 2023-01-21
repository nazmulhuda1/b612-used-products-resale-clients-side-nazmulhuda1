import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebaseInit';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //=== create User
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //===== logIn
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // ==== sign out
    const logOut = () => {
        return signOut(auth)
    }
    // ====
    const updateUser = (name) => {
        return updateProfile(auth.currentUser, { displayName: name })
    }
    // onAuthStateChanged
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        createUser,
        logIn,
        logOut,
        user,
        loading,
        updateUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
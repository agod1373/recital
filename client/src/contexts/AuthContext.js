import React, { useState, useEffect, useContext } from 'react'
import { auth, googleProvider } from '../firebase.js';

//create context
const AuthContext = React.createContext();

//allow context to be imported and used
export function useAuth(){
    return useContext(AuthContext);
}

export default function AuthProvider( {children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function googleSignup() {
        return auth.signInWithPopup(googleProvider);
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    function logout() {
        return auth.signOut();
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        })

        return unsubscribe;
    })

    const value = {
        currentUser,
        signup,
        googleSignup,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

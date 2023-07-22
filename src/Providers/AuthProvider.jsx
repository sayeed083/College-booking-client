import { createContext, useEffect } from "react";
import { app } from "../firebase/firebase.config";
import { getAuth, onAuthStateChanged, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile, signOut } from "firebase/auth"
import { useState } from "react";

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }



    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updatedUserInfo = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }












    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, loggedUser => {
            console.log('Login USER auth-state observer', loggedUser);
            setUser(loggedUser);
            setLoading(false)
        })
        return () => {
            unsubscribed()
        }
    }, [])









    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        updatedUserInfo
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
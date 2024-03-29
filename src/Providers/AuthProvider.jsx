import { createContext, useEffect } from "react";
import { app } from "../firebase/firebase.config";
import { getAuth, onAuthStateChanged, GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile, signOut, sendPasswordResetEmail } from "firebase/auth"
import { useState } from "react";

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const resetPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const gitHubSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
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
        gitHubSignIn,
        logOut,
        updatedUserInfo,
        resetPassword
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
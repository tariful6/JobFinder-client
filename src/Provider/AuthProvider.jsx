import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [loading , setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (name, photo)=> {
        return updateProfile(auth.currentUser, {
            displayName : name,
            photoURL : photo,
        })
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = async () => {
        setLoading(true)
        const {data } = await  axios(`${import.meta.env.VITE_API_URL}/logout`, {withCredentials : true})
        console.log(data);
        return signOut(auth)
    }


    const signInGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(`Observing current user`, currentUser);
            setLoading(false)
        })
        return ()=> {
            unSubscribe()
        }
    },[])

    const authInfo = {loading, user, createUser,updateUserProfile, signInUser, signInGoogle, setUser, logOut}


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
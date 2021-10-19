import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication()
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState({});

    const auth = getAuth();

    const signInUsingGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUser(result.user)
        })
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
        });
        return unsubscribe;
    },[])

    const logOut = () =>{
        signOut(auth)
        .then(()=>{
            setUser({})
        }).catch((error)=>{
            setError(error.message)
        })
    }
    return {
        user,
        error,
        signInUsingGoogle,
        logOut
    }

};
export default useFirebase;
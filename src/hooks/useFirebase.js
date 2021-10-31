import { useEffect, useState } from "react";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import initializationFirebase from "../Login/Firebase/firebase.init";

initializationFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  // google login
  const googleLogin = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };



  // logout fuunction
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((err) => setError(err.message));
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLoading(false);
      } else {
        setUser({});
        setIsLoading(false);
      }
    });
    return () => unSubscribe;
  }, []);

  return {
    user,
    error,
    setError,
    setUser,
    googleLogin,
    isMenuOpen,
    isLoading,
    logOut,
    setIsLoading,
    setIsMenuOpen,
  };
};

export default useFirebase;

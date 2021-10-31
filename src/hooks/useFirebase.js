import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "@firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
  const [user, SetUser] = useState({});
  const auth = getAuth();
  const gProvider = new GoogleAuthProvider();
  const signInGoogle = () => {
    return signInWithPopup(auth, gProvider);
  };
  const logout = () => {
    signOut(auth).then(() => {
      SetUser({});
      localStorage.removeItem("isAuth");
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        SetUser(user);
      }
    });
  });
  return {
    user,
    logout,
    signInGoogle,
  };
};

export default useFirebase;

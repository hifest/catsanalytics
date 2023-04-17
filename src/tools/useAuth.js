import { getAuth, onAuthStateChanged } from "firebase/auth";
import {useState} from "react";

const UseAuth = () => {
    const auth = getAuth();
    const [user,setUser] = useState('')
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
        } else {
            setUser(false)
        }
    });

    return {user}
};

export default UseAuth;
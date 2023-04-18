import {getAuth, onAuthStateChanged} from "firebase/auth";
import {useEffect, useState} from "react";

const UseAuth = () => {
    const auth = getAuth();
    const [isUserRegister,setIsUserRegister] = useState(false);

    useEffect(() => {
        return onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsUserRegister(true)
            } else {
                setIsUserRegister(false)
            }
        });
    }, [auth]);

    return isUserRegister
};
// я придумав
export default UseAuth;
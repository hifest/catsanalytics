import { getAuth, signOut } from "firebase/auth";

const Signout = () => {
    const auth = getAuth();
    signOut(auth).then((state) => {

    }).catch((error) => {

    });
}

export default Signout;
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    let navigate = useNavigate();

    const handleClick = ()=>{
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    }

    return (
        <form>

            <input type="email"
                   value={email}
                   onChange={(e)=> setEmail(e.target.value)}
                   minLength={7}
                   placeholder={'email'}/>

            <input type="password"
                   value={password}
                   onChange={(e)=>setPassword(e.target.value)}
                   minLength={5}
                   placeholder={'password'}/>

            <button onClick={()=> handleClick(email,password)}>Зареєструватись</button>
        </form>
    );
};

export default Register;
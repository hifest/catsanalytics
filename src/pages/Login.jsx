import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    let navigate = useNavigate();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleClick = (email: string, password: string)=>{
        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                navigate('/')
            })
            .catch((error) => {
                console.log(error)
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }

    return (
        <div>
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

            <button onClick={()=> handleClick(email,password)}>Вхід</button>
        </div>
    );
};

export default Login;
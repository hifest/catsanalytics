import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    let navigate = useNavigate();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleClick = ()=>{
        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate('/')
            })
    }

    return (
        <div className="form">
            <input type="email"
                   className="input-reg-sign"
                   value={email}
                   onChange={(e)=> setEmail(e.target.value)}
                   minLength={7}
                   placeholder={'email'}/>

            <input type="password"
                   className="input-reg-sign"
                   value={password}
                   onChange={(e)=>setPassword(e.target.value)}
                   minLength={5}
                   placeholder={'password'}/>

            <button className="button-4" onClick={()=> handleClick(email,password)}>Вхід</button>
        </div>
    );
};

export default Login;
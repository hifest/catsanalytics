import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { ObjectGenerator } from "../generators/btnGenerator"

const Register = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    let navigate = useNavigate();

    const handleClick = () => {
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                navigate('/')
            })

    }

    return (
        <div className="form">

            <input type="email"
                    id="standard-basic" 
                    label="Standard" 
                    variant="standard"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    minLength={7}
                    placeholder={'email'}/>

            <input type="password"
                   value={password}
                   onChange={(e)=>setPassword(e.target.value)}
                   minLength={5}
                   placeholder={'password'}/>

            <button 
            className="button-4"  
            onClick={()=> handleClick(email,password)}
            >Зареєструватись</button>
        </div>
    );
};

export default Register;
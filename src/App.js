import React, {useEffect, useState} from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import {addUser} from "./store/slices/userSlice";
import './scss/main.scss';
import Header from "./components/Header";
import Spinner from "./loader/Spinner.jsx";


function App() {
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const [spinner,setSpinner] = useState(true)

    useEffect(()=>{
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            setSpinner(false)
            user ? dispatch(addUser(user)) : navigate('/register')
        });
    },[])

    return (
        spinner ?
                <> <Spinner/></>
                : <>
                    <div className={'main'}>
                        <Header/>
                    </div>
                </>

  );
}

export default App;

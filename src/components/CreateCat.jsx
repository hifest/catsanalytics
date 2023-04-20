import {useState} from "react";
import { nanoid } from 'nanoid'
import {useSelector} from "react-redux";
import { getDatabase, ref, set } from "firebase/database";

const CreateCat = ({handleClose}) => {

    const userId = useSelector((state) => state.user.uid)

    const [name,setName] = useState('');
    const [power,setPower] = useState('');
    const [endurance,setEndurance] = useState('');
    const [speed,setSpeed] = useState('');

    const handleClick = () =>{
        handleClose()
        const catId = nanoid()
        writeUserData(catId,userId,name,power,endurance,speed)
    }

    function writeUserData(catId,userId, name, power, endurance,speed) {
        const db = getDatabase();
        set(ref(db, 'user/' + userId + 'cat/' + catId), {
            name,
            power,
            endurance,
            speed,
            userId,
            catId
        }).then(r => console.log(r));

    }

    return (
        <div className="form">
            <div className="webflow-style-input">
                <input
                    type="email"
                    placeholder="Як звати твого котика?"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    />
            </div>
            <div className="webflow-style-input">
                <input
                    type="email"
                    placeholder="Яка сила в твого котика?"
                    value={power}
                    onChange={(e)=> setPower(e.target.value)}
                />
            </div>
            <div className="webflow-style-input">
                <input
                    type="email"
                    placeholder="Яка витривалість в твого котика?"
                    value={endurance}
                    onChange={(e)=> setEndurance(e.target.value)}
                />
            </div>
            <div className="webflow-style-input">
                <input
                    type="email"
                    placeholder="Яка швидкість в твого котика?"
                    value={speed}
                    onChange={(e)=> setSpeed(e.target.value)}
                />
            </div>

            <button className="button-4" onClick={handleClick}>Створити кота!</button>
        </div>
    );
};

export default CreateCat;
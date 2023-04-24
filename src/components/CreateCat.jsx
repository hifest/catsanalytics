import {useState} from "react";
import { nanoid } from 'nanoid'
import {useSelector} from "react-redux";
import { getDatabase, ref, set } from "firebase/database";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const CreateCat = ({handleClose}) => {

    const userId = useSelector((state) => state.user.uid)
    const [rare, setRare] = useState('');

    const handleChange = (event) => {
        setRare(event.target.value);
    };

    const [name,setName] = useState('');
    const [power,setPower] = useState('');
    const [endurance,setEndurance] = useState('');
    const [speed,setSpeed] = useState('');
    const [level,setLevel] = useState('');

    const handleClick = () =>{
        handleClose()
        const catId = nanoid()
        writeUserData(catId,userId,name,power,endurance,speed,rare,level)
    }

    function writeUserData(catId,userId, name, power, endurance,speed,rare,level) {
        const db = getDatabase();
        set(ref(db, 'user/' + userId + "/" + catId), {
            name,
            power,
            endurance,
            speed,
            userId,
            catId,
            rare,
            level
        }).then(r => console.log(r));

    }

    return (
        <div className="form">
            <div className="webflow-style-input">
                <input
                    type="text"
                    placeholder="Як звати твого котика?"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    />
            </div>
            <div className="webflow-style-input">
                <input
                    type="number"
                    placeholder="Яка сила в твого котика?"
                    value={power}
                    onChange={(e)=> setPower(e.target.value)}
                />
            </div>
            <div className="webflow-style-input">
                <input
                    type="number"
                    placeholder="Яка витривалість в твого котика?"
                    value={endurance}
                    onChange={(e)=> setEndurance(e.target.value)}
                />
            </div>
            <div className="webflow-style-input">
                <input
                    type="number"
                    placeholder="Яка швидкість в твого котика?"
                    value={speed}
                    onChange={(e)=> setSpeed(e.target.value)}
                />
            </div>
            <div className="webflow-style-input">
                <input
                    type="number"
                    placeholder="Який рівень в твого котика?"
                    max={10}
                    value={level}
                    onChange={(e)=> setLevel(e.target.value)}
                />
            </div>
            <FormControl style={{alignItems: "center", margin: "10px"}}>
                <FormLabel id="demo-radio-buttons-group-label" className="chooseRare">Вибери рідкість твого кота</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Простий"
                    name="radio-buttons-group"
                    onChange={handleChange}
                >
                    <FormControlLabel value="Простий" control={<Radio />} label="Простий" className="gray"/>
                    <FormControlLabel value="Незвичайний" control={<Radio />} label="Незвичайний" className="green"/>
                    <FormControlLabel value="Рідкісний" control={<Radio />} label="Рідкісний" className="blue"/>
                    <FormControlLabel value="Епічний" control={<Radio />} label="Епічний" className="purple"/>
                    <FormControlLabel value="Легендарний" control={<Radio />} label="Легендарний" className="gold"/>
                </RadioGroup>
            </FormControl>

            <button className="button-4" onClick={handleClick}>Створити кота!</button>
        </div>
    );
};

export default CreateCat;
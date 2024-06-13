import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

function Feeling() {

    //create a state to store the inputted feeling as string
    const [feeling, setFeeling] = useState('')

    const dispatch = useDispatch();

    const history = useHistory();



    const setfeelingFunc = () => {
       // event.preventDefault();


        dispatch({
            type: 'SET_FEELING',
            payload: feeling
        })

        setFeeling('')

        history.push('/understand')
    }

    //onSubmit={setfeelingFunc}
    return (
        <>
            <form onSubmit={setfeelingFunc}>
                <h3>How are you feeling today?</h3>
                <label>
                    <input type="number" placeholder="feeling" value={feeling} onChange={(event) => setFeeling(event.target.value)} />
                </label>
                <button onClick={setfeelingFunc}>Next</button>
            </form>

        </>

    )
}


export default Feeling;
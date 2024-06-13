import { useState } from 'react';

import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

function Understanding() {

    //create a state to store the inputted feeling as string
    const [understanding, setUnderstanding] = useState('')

    const dispatch = useDispatch();

    const history = useHistory();


    const setunderstandingFunc = () => {
        //event.preventDefault();

    //sends out the understnading message
        dispatch({
            type: 'SET_UNDERSTANDING',
            payload: understanding
        })

        setUnderstanding('')

        history.push('/supported')
    }

    //return consists of the input form with onSubmit and onChange
    //the form takes in the value, placeholder and other functions
    return (
        <>
        
            <form onSubmit={setunderstandingFunc}>
                <h3>How well are you understanding the content?</h3>
                <label>
                    <input type="number" placeholder="understanding" value={understanding} onChange={(event) => setUnderstanding(event.target.value)} />
                </label>
                <button onClick={setunderstandingFunc}>Next</button>
            </form>

        </>

    )
}


export default Understanding;
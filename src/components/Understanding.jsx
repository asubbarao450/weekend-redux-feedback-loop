import { useState } from 'react';

import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

function Understanding() {

    //create a state to store the inputted feeling as string
    const [understanding, setUnderstanding] = useState('')

    const dispatch = useDispatch();

    const history = useHistory();


    const setunderstandingFunc = (event) => {
        event.preventDefault();

    //sends out the understnading message
        dispatch({
            type: 'SET_UNDERSTANDING',
            payload: understanding
        })

        setUnderstanding('')

        history.push('/supported')
    }

    return (
        <>
            <form onSubmit={setUnderstanding}>
                <h3>How well are you understanding the content?</h3>
                <label>
                    <input type="number" placeholder="understanding" value={understanding} onChange={(event) => setunderstandingFunc(event.target.value)} />
                </label>
                <button onClick={setunderstandingFunc}>Next</button>
            </form>

        </>

    )
}


export default Understanding;
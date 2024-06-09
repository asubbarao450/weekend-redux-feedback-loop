import { useState } from 'react';

import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

function Feeling() {

    //create a state to store the inputted feeling as string
    const [feeling, setFeeling] = useState('')

    const dispatch = useDispatch();

    const history = useHistory();



    const setfeelingFunc = (event) => {
        event.preventDefault();


        dispatch({
            type: 'SET_FEELING',
            payload: setFeeling
        })


        history.push('/understand')
    }

    return (
        <>
            <form onSubmit={addFeelingScore}>
                <h3>How are you feeling today?</h3>
                <label>
                    <input type="number" placeholder="feeling" value={feeling} onChange={(event) => setfeelingFunc(event.target.value)} />
                </label>
                <button>Next</button>
            </form>

        </>

    )
}


export default Feeling;
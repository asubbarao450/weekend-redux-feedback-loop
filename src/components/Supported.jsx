import { useState } from 'react';

import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

function Supported() {

    //create a state to store the inputted feeling as string
    const [supported, setSupported] = useState('')

    //allows for the dispatch to function to be instantiated
    const dispatch = useDispatch();

    //allows for the history variable to be used
    const history = useHistory();


    const setsupportedFunc = (event) => {
        event.preventDefault();


        dispatch({
            type: 'SET_SUPPORT',
            payload: supported
        })


        history.push('/comments')

        setSupported('')
    }

    return (
        <>
            <form onSubmit={setsupportedFunc}>
                <h3>How well are you understanding the content?</h3>
                <label>
                    <input type="number" placeholder="supported" value={supported} onChange={(event) => setSupported(event.target.value)} />
                </label>
                <button onClick={setsupportedFunc}>Next</button>
            </form>

        </>

    )
}


export default Supported;
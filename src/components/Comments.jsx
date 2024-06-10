import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

function Comments() {

    //create a state to store the inputted feeling as string
    const [comment, setComment] = useState('')

    const dispatch = useDispatch();

    const history = useHistory();



    const setcommentFunc = (event) => {
        event.preventDefault();


        dispatch({
            type: 'SET_COMMENT',
            payload: comment
        })


        history.push('/review')
    }

    return (
        <>
            <form onSubmit={setcommentFunc}>
                <h3>How are you feeling today?</h3>
                <label>
                    <input type="number" placeholder="feeling" value={comment} onChange={(event) => setComment(event.target.value)} />
                </label>
                <button>Next</button>
            </form>

        </>

    )
}


export default Comments;
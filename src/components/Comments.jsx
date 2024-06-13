import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

function Comments() {

    //create a state to store the inputted feeling as string
    const [comment, setComment] = useState('')

    const dispatch = useDispatch();

    const history = useHistory();



    const setcommentFunc = () => {
        


        dispatch({
            type: 'SET_COMMENT',
            payload: comment
        })

        //sets the comment to null incase a user wants to cancel input 
        setComment('')

        //pushes the user to the next page 
        history.push('/review')
    }

    return (
        <>
            <form onSubmit={setcommentFunc}>
                <h3>Any comments you want to leave?</h3>
                <label>
                    <input data-testid="input" type="text" placeholder="comments" value={comment} onChange={(event) => setComment(event.target.value)} />
                </label>
                <button data-testid="next" onClick={setcommentFunc}>Next</button>
            </form>

        </>

    )
}


export default Comments;
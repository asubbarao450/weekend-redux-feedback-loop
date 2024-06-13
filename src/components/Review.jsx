//import { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

function Review(){

const history = useHistory()

//feedback is the variable that will store the stuff from 
//the store 
const allfeedback = useSelector(store => store.feedback)

console.log(allfeedback)

const handleSubmit = () => {
    event.preventDefault();
    
    axios.post(`/api/feedback`, allfeedback)
      .then(response => {
        
        
      })
      .catch( error => {
        console.log(error);
        alert(`Sorry, couldn't add at this time. Try again later`);
      });

      history.push('/thanks')
  }

  //{allfeedback.map((feedback) => <li>{feedback}</li>)}
  return(
    
<>
                <h3>Review Your Feedback</h3>
                <ul>
                <li>Feeling: {allfeedback.feeling}</li>
                <li>Understanding: {allfeedback.understanding}</li>
                <li>Support: {allfeedback.support}</li>
                <li>Comments: {allfeedback.comments}</li>
                </ul>
                <button data-testid="next" onClick={handleSubmit}>Submit</button>

</>

  )
}





export default Review;
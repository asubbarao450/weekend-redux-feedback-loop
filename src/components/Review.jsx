import { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

function Review(){


const history = useHistory()


const feedback = useSelector(store => store.feedback)

const handleSubmit = () => {
    event.preventDefault();
    
    axios.post(`/api/feedback`, feedback)
      .then(response => {
        
        
      })
      .catch( error => {
        console.log(error);
        alert(`Sorry, couldn't add at this time. Try again later`);
      });
  }


  return(
    
<>

                <h3>Review</h3>
                <label>
                    
                </label>
                <button onClick={handleSubmit}>Submit</button>

</>

  )
}





export default Review;
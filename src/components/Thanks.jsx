//import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

function Thanks(){

const history = useHistory()




const handleSubmit = () => {
  history.push('/')
  }


  return(
    
<>
                <h3>Thank You!</h3>
               
                <button data-testid="next" onClick={handleSubmit}>Leave New Feedback</button>

</>

  )
}





export default Thanks;
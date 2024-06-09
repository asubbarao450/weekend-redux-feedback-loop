import { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

function Review(){

const review = useSelector((store)=> store.review)

const dispatch = useDispatch();


    useEffect (() => {
        axios({
            method: 'GET',
            url: '/review'
        }).then ((response) =>{

            dispatch({
                type: 'REVIEW',
                payload: response.data
            })

        }).catch((error) => {

            console.log(error)
        })





    })

}


export default Review;
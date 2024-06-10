import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

//stores the feedback as the 

const feedback = (state = {}, action) => {

    if (action.type === `SET_FEELING`) {
        return { ...state, feeling: action.payload }

    }

    else if (action.type === `SET_UNDERSTANDING`) {
        return { ...state, understanding: action.payload }
    }

    else if (action.type === `SET_SUPPORT`) {
        return { ...state, support: action.payload }

    }

    else if (action.type === `SET_COMMENT`) {
        return { ...state, comments: action.payload }

    }


    return state;
}

// const feeling = (state = [], action) => {
//     if (action.type === `SET_FEELING`) {

//         const newFeelingScore = action.payload;

//         return [...state, newFeelingScore]
//     }

//     return state;
// }

// const understanding = (state = [], action) => {
//     if (action.type === `SET_UNDERSTANDING`) {
//         const newFeelingScore = action.payload;

//         return [...state, newFeelingScore]
//     }

//     return state;
// }

// const support = (state = [], action) => {
//     if (action.type === `SET_SUPPORT`) {
//         const newFeelingScore = action.payload;

//         return [...state, newFeelingScore]
//     }

//     return state;
// }

// const comment = (state = [], action) => {
//     if (action.type === `SET_COMMENT`) {
//         const newFeelingScore = action.payload;

//         return [...state, newFeelingScore]
//     }

//     return state;
// }

const store = createStore(
    combineReducers({
        feedback

    }),

    applyMiddleware(
        logger
    )

)

export default store;
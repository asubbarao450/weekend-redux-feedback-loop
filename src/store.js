import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

//needs if/switch statements for the store

const feedback = (state = [], action) => {
    if (action.type === `SET_FEEDBACK`) {
  
        // stores the new Feedback score from action.payload
        const newFeedbackScore = action.payload;

        return [...state, newFeedbackScore]
    }
    return state;
}

const feeling = (state = [], action) => {
    if (action.type === `SET_FEELING`) {
        
        const newFeelingScore = action.payload;

        return [...state, newFeelingScore]
    }

    return state;
}

const understanding = (state = [], action) => {
    if (action.type === `SET_UNDERSTANDING`) {
        const newFeelingScore = action.payload;

        return [...state, newFeelingScore]
    }

    return state;
}

const support = (state = [], action) => {
    if (action.type === `SET_SUPPORT`) {
        const newFeelingScore = action.payload;

        return [...state, newFeelingScore]
    }

    return state;
}

const comment = (state = [], action) => {
    if (action.type === `SET_COMMENT`) {
        const newFeelingScore = action.payload;

        return [...state, newFeelingScore]
    }

    return state;
}

const store = createStore(
    combineReducers({
        feedback,
        feeling,
        understanding,
        support,
        comment
    }),

    applyMiddleware(
        logger
    )

);

export default store;
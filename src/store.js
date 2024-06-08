import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

//needs if/switch statements for the store

const feedback = (state = [], action) => {
    if (action.type === `SET_FEEDBACK`) {
        // this will replace the book list, payload is array of all books
        // Dont need spread -- dont care about old value
        return action.payload;
    }
    return state;
}

const feeling = (state = [], action) => {
    if (action.type === `SET_FEELING`) {
        // this will replace the book list, payload is array of all books
        // Dont need spread -- dont care about old value

        
        return action.payload;
    }
}

const understanding = (state = [], action) => {
    if (action.type === `SET_UNDERSTANDING`) {
        // this will replace the book list, payload is array of all books
        // Dont need spread -- dont care about old value
        return action.payload;
    }
}

const support = (state = [], action) => {
    if (action.type === `SET_SUPPORT`) {
        // this will replace the book list, payload is array of all books
        // Dont need spread -- dont care about old value
        return action.payload;
    }
}

const comment = (state = [], action) => {
    if (action.type === `SET_COMMENT`) {
        // this will replace the book list, payload is array of all books
        // Dont need spread -- dont care about old value
        return action.payload;
    }
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
const timerReducer = (state = {}, action) => {

    if (action.type === 'SET_TIMED_TEA') {
        return action.payload;
    }
    return state;
};

export default timerReducer;
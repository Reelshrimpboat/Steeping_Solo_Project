const reviewReducer = (state = [], action) => {

    if (action.type === 'SET_REVIEWS') {
        return action.payload;
    }
    return state;
};

export default reviewReducer;
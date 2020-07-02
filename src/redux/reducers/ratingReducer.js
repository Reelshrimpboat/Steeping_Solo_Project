const ratingReducer = (state = [], action) => {

    if (action.type === 'SET_RATINGS') {
        return action.payload;
    }
    return state;
};

export default ratingReducer;
const teasReducer = (state = [], action) => {

    if (action.type === 'SET_TEAS') {
        return action.payload;
    }
    return state;
};

export default teasReducer;
const usersTeasReducer = (state = [], action) => {

    if (action.type === 'SET_USERS_TEAS') {
        return action.payload;
    }
    return state;
};

export default usersTeasReducer;
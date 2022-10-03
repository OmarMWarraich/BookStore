const CHECK_STATUS = 'CHECK_STATUS';

export const checkStatus = () => ({
    type: CHECK_STATUS,
});

export const checkStatusAction = () => (dispatch) => {
    dispatch(checkStatus());
}

const initialState = {
    categories : [],
};

const categoriesReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHECK_STATUS:
            return 
                'UNDER CONSTRUCTION'
            
        default:
            return state;
    }
}

export default categoriesReducer;
import * as actions from '../actions/shops.action';

const initialState = {
    shops: [],
}

const shopsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET:
            return Object.assign({}, state, {
                shops: action.data
            });
        default:
            return state;
    }
}

export default shopsReducer;
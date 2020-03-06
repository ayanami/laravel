import * as actions from '../actions/shop.action';

const initialState = {
    type: actions.INIT,
    shops: [],
}

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET:
            return Object.assign({}, state, {
                type: action.type,
                shops: action.data,
            });
        default:
            return state;
    }
}

export default shopReducer;
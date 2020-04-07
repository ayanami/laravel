import * as actions from '../../actions/shop/shop.list.action';

const initialState = {
    type: actions.INIT_SHOP_LIST,
    shops: [],
}

const shopListReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_SHOP_LIST:
            return Object.assign({}, state, {
                type: action.type,
                shops: action.payload,
            });
        default:
            return state;
    }
}

export default shopListReducer;
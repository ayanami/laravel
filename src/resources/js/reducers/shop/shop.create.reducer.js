import * as actions from '../../actions/shop/shop.create.action';

const initialState = {
    type: actions.INIT_SHOP_CREATE,
    shop: {},
}

const shopCreateReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default shopCreateReducer;
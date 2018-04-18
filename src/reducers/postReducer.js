import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    items: [], //represents post coming from action, we put fetch request in action
    item: {} //represents the single post that we add and then we get response back
}

export default function (state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
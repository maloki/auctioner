import {LIST_ADD} from '../actions/types';
import {LIST_REMOVE} from '../actions/types';

export default function(state = {
    items: []
}, action) {
    switch (action.type) {
        case LIST_ADD:
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ]
            };
        case LIST_REMOVE:
            return {
                ...state,
                items: state.items.filter(function(item) {
                    console.log(action.payload);
                    return item !== action.payload;
                })
            }
    }
    return state;
};

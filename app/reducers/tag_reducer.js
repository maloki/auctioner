import {TAG_ADD, TAG_REMOVE} from '../actions/types';

export default function(state = {
    tags: []
}, action) {
    switch (action.type) {
        case TAG_ADD:
            return {
                ...state,
                tags: [
                    ...state.tags,
                    action.payload
                ]
            };
         case TAG_REMOVE:
                return {
                    ...state,
                    tags: state.tags.filter(function(i){
                      console.log(i);
                      return i !== action.payload;
                    })
                };
    }
    return state;
};

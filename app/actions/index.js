import {LIST_ADD, LIST_REMOVE, TAG_ADD, TAG_REMOVE} from './types';

export function addToList(item) {

    return {type: LIST_ADD, payload: item}

};

export function removeFromList(item) {
    return {type: LIST_REMOVE, payload: item}
};

export function addTag(item) {
    return {type: TAG_ADD, payload: item}
};

export function removeTag(item) {
    return {type: TAG_REMOVE, payload: item}
};


'use strict';

import type {Action} from '../actions/types';
import { SET_INDEX } from '../actions/list';
import { QUESTION_PAPER } from '../test_data/questions';

export type State = {
    list: string
}

const initialState = {
    list: QUESTION_PAPER,
    selectedIndex: undefined
};

export default function (state:State = initialState, action:Action): State {
    if (action.type === SET_INDEX) {
        return {
            ...state,
            selectedIndex: action.payload
        };
    }
    return state;
}

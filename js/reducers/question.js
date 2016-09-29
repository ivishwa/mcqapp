'use strict';

import type {Action} from '../actions/types';
import { SET_QUESTION_INDEX } from '../actions/question';
import { QUESTION_PAPER } from '../test_data/questions';

export type State = {
    list: any
}

const initialState = {
    selectedQuestionIndex: 0,
    currentQuestion: undefined,
};

export default function (state:State = initialState, action:Action): State {
    if (action.type === SET_QUESTION_INDEX) {
        return {
            selectedQuestionIndex: action.payload,
            currentQuestion: state.list
        };
    }
    return state;
}

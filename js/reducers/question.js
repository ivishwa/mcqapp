'use strict';

import type {Action} from '../actions/types';
import { SET_QUESTION_INDEX } from '../actions/question';
import { QUESTION_PAPER } from '../test_data/questions';
import { REHYDRATE } from 'redux-persist/constants'


export type State = {
    questions: any
} 

const initialState = {
    questions: undefined
}
export default function (state:State = initialState, action:Action): State {
    if (action.type === SET_QUESTION_INDEX) {
        return {
            ...state,
            selectedQuestionIndex: action.payload,
          };
    }

    if (action.type === REHYDRATE) {
        const savedData = action['payload']['selectedQuestionIndex'] || state;
        return {
            ...savedData
        }
    }
    return state;
}

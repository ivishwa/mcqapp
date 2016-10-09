'use strict';

import type {Action} from '../actions/types';
import { SET_QUESTION_INDEX, SUBMIT_ANSWER} from '../actions/question';
import { QUESTION_PAPER } from '../test_data/questions';
import { REHYDRATE } from 'redux-persist/constants'


export type State = {
    questions: any,
    answers: any
}

const initialState = {
    questions: undefined,
    answers: {}
}
export default function (state:State = initialState, action:Action): State {
    if (action.type === SET_QUESTION_INDEX) {
        return {
            ...state,
            selectedQuestionIndex: action.payload,
          };
    }

    if (action.type === SUBMIT_ANSWER) {
      return {
        ...state,
        answers: {
          ...state.answers,
          [ state.selectedQuestionIndex ]: action.submitedAnswer
        }
      }
    }

    if (action.type === REHYDRATE) {
        const savedData = action['payload']['selectedQuestionIndex'] || state;
        return {
            ...savedData
        }
    }
    return state;
}

'use strict'

import type {Action} from './types';

export const SUBMIT_ANSWER = "SUBMIT_ANSWER";
export const SET_QUESTION_INDEX = "SET_QUESTION_INDEX";

export function submitAnswer(submitedAnswer:any, passProps:any):Action {
	return {
		type: SUBMIT_ANSWER,
		passProps: passProps,
		submitedAnswer: submitedAnswer
	}
}

export function setQuestionIndex(index:number):Action {
	return {
		type: SET_QUESTION_INDEX,
		payload: index
	}
}

import { takeEvery, put, delay } from 'redux-saga/effects';

function* incrementAsync(){
    yield delay(5000); 
    yield put({type:'INCREMENT_ASYNC'});
}

export function* watchValueUp () {
    yield takeEvery('INCREMENT', incrementAsync);
}
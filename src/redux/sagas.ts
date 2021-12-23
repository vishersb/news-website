import { takeEvery } from 'redux-saga/effects'
import { FETCH_POSTS } from './types'
export function* sagaWatcher() {
    yield takeEvery(FETCH_POSTS, sagaWorker)
}

function* sagaWorker(){
 console.log('saga')   
}
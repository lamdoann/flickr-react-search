import { delay } from 'redux-saga';
import { takeLatest, take, put, call } from 'redux-saga/effects';
import { SEARCH, SEARCH_SUCCESS } from './actionTypes';
import { onSearch, onSuccess } from './actions';
import searchForm from '../ui/seach-form';
import itemEntity from '../entities/items';
import { flickr } from '../../api'

function* search(action) {
  try {
    const { input } = action;
    
    // dispatch request action
    yield put(searchForm.actions.onRequest());
    
    // debounce input
    yield delay(1000);
    
    // fetch photos on flickr
    const items = yield call(flickr.fetchPhotos, input);
    
    // dispatch success actions
    yield put(searchForm.actions.onSuccess());
    yield put(itemEntity.actions.onSuccess(items));
    yield put(onSuccess(items));
  } catch (error) {
    yield put(searchForm.actions.onError(error.message));
  }
}

export default function* searchFlow() {
  yield takeLatest(SEARCH, search);
}

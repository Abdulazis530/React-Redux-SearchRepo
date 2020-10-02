import { all, takeEvery, put, call } from 'redux-saga/effects';
import * as actions from '../actions';
import axios from 'axios'


const API_URL = 'https://api.github.com/'

const request = axios.create({
    baseURL: API_URL,
    timeout: 1000
});


const read = async (path) =>
    await request.get(path)
        .then(response => response.data)
        .catch(err => {
            throw err
        });



const PATH = 'users';

// load

function* searchRepo(payload) {
    const { user } = payload
    const QUERY_PATH = `${PATH}/${user}/repos`
    try {
        const data = yield call(read, QUERY_PATH)
        yield put(actions.loadRepoSucces(data));
    } catch (error) {
        console.log(error);

    }
}


//edit



export default function* rootSaga() {
    yield all([
        takeEvery('SEARCH_REPO', searchRepo),
    ]);
}



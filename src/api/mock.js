import {get,post} from '../utils/request'

//firsmock
export function firstMock(params, config) {
    return post('/first/test', params, config);
}

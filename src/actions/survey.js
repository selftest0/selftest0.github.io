import { RSAA } from 'redux-api-middleware';

export const LIST_REQUEST = '@@survey/LIST_REQUEST';
export const LIST_SUCCESS = '@@survey/LIST_SUCCESS';
export const LIST_FAILURE = '@@survey/LIST_FAILURE';

export const ITEM_REQUEST = '@@survey/ITEM_REQUEST';
export const ITEM_SUCCESS = '@@survey/ITEM_SUCCESS';
export const ITEM_FAILURE = '@@survey/ITEM_FAILURE';

export const CREATE_REQUEST = '@@survey/CREATE_REQUEST';
export const CREATE_SUCCESS = '@@survey/CREATE_SUCCESS';
export const CREATE_FAILURE = '@@survey/CREATE_FAILURE';

export const DEL_REQUEST = '@@survey/DEL_REQUEST';
export const DEL_SUCCESS = '@@survey/DEL_SUCCESS';
export const DEL_FAILURE = '@@survey/DEL_FAILURE';


export const list = params => ({
    [RSAA]: {
        endpoint: '/surveys',
        method: 'GET',
        types: [ LIST_REQUEST, LIST_SUCCESS, LIST_FAILURE ],
    },
});

export const item = id => ({
    [RSAA]: {
        endpoint: `/surveys/${id}`,
        method: 'GET',
        types: [ ITEM_REQUEST, ITEM_SUCCESS, ITEM_FAILURE ],
    },
});

export const create = params => ({
    [RSAA]: {
        endpoint: '/surveys',
        method: 'POST',
        body: params,
        types: [ CREATE_REQUEST, CREATE_SUCCESS, CREATE_FAILURE ],
    },
});

export const del = id => ({
    [RSAA]: {
        endpoint: `/surveys/${id}`,
        method: 'DELETE',
        types: [ DEL_REQUEST, DEL_SUCCESS, DEL_FAILURE ],
    },
});

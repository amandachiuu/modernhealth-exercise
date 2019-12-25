import axios from 'axios';

// ACTION TYPES
// export const LOAD_DATA_REQUEST='LOAD_DATA_REQUEST';
// export const LOAD_DATA_SUCCESS='LOAD_DATA_SUCCESS';
// export const LOAD_DATA_ERROR='LOAD_DATA_ERROR';
export const UPDATE_PROGRAMS = 'UPDATE_PROGRAMS';

// ACTION CREATORS
export function loadPrograms(listOfPrograms) {
    return {
        type: UPDATE_PROGRAMS,
        programs: listOfPrograms,
    }
}

export function fetchPrograms() {
    return function(dispatch) {
        return axios.get("http://localhost:8080/programs", {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
                'Access-Control-Allow-Credentials': 'true'
            }
        }).then(({ data }) => {
            // console.log(data);
            dispatch(loadPrograms(data));
        });
    };
}
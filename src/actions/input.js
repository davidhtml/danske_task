import { fetchPerson, fetchFacility, fetchExposure } from '../utils/http';

const fetchPersonResponse = data => ({
    type: 'FETCH_PERSON',
    payload: data,
});

const fetchFacilityResponse = data => ({
    type: 'FETCH_FACILITY',
    payload: data,
});

const fetchExposureResponse = data => ({
    type: 'FETCH_EXPOSURE',
    payload: data,
});

const multiply = (a, b) => ({
    type: 'MULT_VALUES',
    payload: a * b,
});

const fetching = () => ({
    type: 'FETCHING',
});

const setError = error => ({
    type: 'ERROR',
    error,
});

const resetForm = () => ({
    type: 'RESET',
});

const onInputSubmit = number => (dispatch, getState) => {
    dispatch(fetching());
    fetchPerson(number)
        .then(res => {
            dispatch(fetchPersonResponse(res.data));
            return fetchFacility(res.data.val1);
        })
        .then(res => {
            dispatch(fetchFacilityResponse(res.data));
            return fetchExposure(getState().app.response1.val2);
        })
        .then(res => {
            dispatch(fetchExposureResponse(res.data));
            const val2 = getState().app.response2.val3;
            // eslint-disable-next-line
            const val5 = getState().app.response3.val5;
            dispatch(multiply(val2, val5));
        })
        .catch(err => dispatch(setError(err)));
};

export { onInputSubmit, resetForm };

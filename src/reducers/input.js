const initialState = {
    response1: {},
    response2: {},
    response3: {},
    result: null,
    error: false,
    fetching: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PERSON':
            return {
                ...state,
                response1: action.payload,
            };
        case 'FETCH_FACILITY':
            return {
                ...state,
                response2: action.payload,
            };
        case 'FETCH_EXPOSURE':
            return {
                ...state,
                response3: action.payload,
            };
        case 'MULT_VALUES':
            return {
                ...state,
                result: action.payload,
                fetching: false,
            };
        case 'ERROR':
            return {
                ...state,
                error: true,
            };
        case 'FETCHING':
            return {
                ...state,
                fetching: true,
            };
        case 'RESET':
            return {
                ...initialState,
            };
        default:
            return state;
    }
};

const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(axios, { delayResponse: 1000 });

const fetchPerson = number => {
    const url = `http://fubar.com/person/${number}`;
    mock.onGet(url).reply(200, {
        val1: 1,
        val2: 2,
    });
    return axios(url);
};

const fetchFacility = val => {
    const url = `http://fubar.com/facility/${val}`;
    mock.onGet(url).reply(200, {
        val3: 3,
        val4: 4,
    });
    return axios(url);
};

const fetchExposure = val => {
    const url = `http://fubar.com/exposure/${val}`;
    mock.onGet(url).reply(200, {
        val5: 5,
    });
    return axios(url);
};

export { fetchPerson, fetchFacility, fetchExposure };

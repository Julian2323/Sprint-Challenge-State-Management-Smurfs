import axios from 'axios';

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";

export const fetchRandomSmurf = () => {

    return function(dispatch) {
        dispatch({type: FETCH_SMURF_START });
        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                console.log(res.data);
                const results = [];
                    res.data.forEach(data => {
                        data.forEach(d => results.push(d));
                    });
                console.log(results);
                dispatch({type: FETCH_SMURF_SUCCESS, payload: res.data})
            })
            .catch(err => console.log(err));
    };
};
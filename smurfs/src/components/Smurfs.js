import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {fetchRandomSmurf} from '../actions/index';
import { Link } from 'react-router-dom';


const Smurfs = (props) => {
    useEffect(()=> {
        props.fetchRandomSmurf();
    },[]);

    if(props.isFetching) {
        return <h2>fetching smurf data</h2>;
    };
    return (
        <div className='container'>
            <h2>{props.smurfName}</h2>
            <button onClick={props.fetchRandomSmurf}>Smurf</button>
            <Link to='/SmurfForm'>Click Here To Add a Smurf</Link>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isFetching: state.isFetching,
        smurfName: state.smurfName
    };
};

export default connect(
    mapStateToProps,
    {fetchRandomSmurf: fetchRandomSmurf}
    )(Smurfs);

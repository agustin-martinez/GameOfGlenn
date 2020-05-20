import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../features/worlds'

const WorldsRedux = () => {
    const dispatch = useDispatch();
    const value = useSelector(state => state.worlds);
    const increase = () => dispatch(actions.increase());
    const decrease = () => dispatch(actions.decrease());
    return (
        <div className="border">
            value: {value} Med redux( detta världet ändras i hela appen) <br/>
            <button onClick={increase}> Increase </button>
            <button onClick={decrease}> Decrease </button>
        </div>
    )
}

export default WorldsRedux;

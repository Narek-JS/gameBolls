import { useContext } from 'react';
import { ThemeContext } from '../../context';

import 'animate.css';
import classes from './style.module.css';

const Start = (props) => {
    const { setisStart } = props;
    const { state, dispatch } = useContext(ThemeContext);

    const record = localStorage.getItem('record');
    const massaegePoints = `you have ${state.point} point`
    
    const start = () => {
        setisStart(false);
        dispatch({
            type: 'point',
            payload: { point: 0 }
        });
    };

    return (
        <div className={`${classes.pointStart} animate__animated animate__bounce`}>
            {state.point ? <h1>{massaegePoints}</h1> : null}
            <button className={classes.start} onClick={start}>Start</button> 
            {record && <h1>record - {record}</h1>}
        </div>
    );
};

export { Start };
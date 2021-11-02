import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../context';
import { Left } from './Left';
import { Right } from './Right';
import classes from './style.module.css';

const Asides = (props) => {
    const { isStart, setisStart, setFinishGame } = props;
    const [ time, setTime ] = useState(80);
    const { state } = useContext(ThemeContext);

    const record = localStorage.getItem('record');

    useEffect(() => {
        const intervall = setTimeout(() =>  setTime(time-1), 1000);
        if(time === 0){
            clearTimeout(intervall); 
            setFinishGame(true);
            setTime(80);
            setTimeout(() => {
                if(!record || record < state.point){
                    localStorage.setItem('record', state.point);
                };
                setisStart(true);
                setFinishGame(false);
            }, 2000);
        };
    }, [isStart, time]);
    
    return (
        <div className={classes.asides}>
            <Left />
            <Right time={time}/>
        </div>
    );
};

export { Asides };



import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context';

import sound from '../../assets/sound/sound.mp3'
import classes from './style.module.css'; 

const Boll = (props) => {
    const { boll, randomLeft } = props;
    const { state, dispatch } = useContext(ThemeContext);
    const [ top, setTop ] = useState(0);
    const [ display, setDisplay ] = useState('block'); 

    const styles = {
        top: top+"px", 
        left: randomLeft+'px',
        display:display
    };

    useEffect(() => {
        const isCatchBool = randomLeft >= state.boardLocation - 50 && 
                        randomLeft <= state.boardLocation + 200 && 
                        top >= window.innerHeight - 125;


        const intervall = setTimeout(() => {
            setTop((prevCounter) => prevCounter + boll.point);
        },  6 - boll.point );


        if(isCatchBool){
            dispatch({
                type: 'point',
                payload: {
                    point: state.point + boll.point
                }
            });
            setDisplay('none');
            new Audio(sound).play();
            clearInterval(intervall);
        } else if(top >= window.innerHeight - 60){
            setDisplay('none');
            clearInterval(intervall);
        };

    }, [top]);

    return  <img 
                src={boll.boll} 
                className={classes.bollImg} 
                style={styles}
            />
};

export { Boll };


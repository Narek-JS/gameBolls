import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context";

import classes from './style.module.css';

const Board = () => {   
    const [ counter, setCounter ] = useState(0);
    const { dispatch } = useContext(ThemeContext);

    useEffect(() => {
        window.addEventListener('keydown', (e) => {
            if(e.code === 'ArrowRight'){   
                setTimeout(() => {
                    setCounter((prevCounter) => {
                        if(prevCounter+20 < window.innerWidth-200){
                            return  prevCounter+25;
                        }
                        return prevCounter;
                    });
                });
            } else if(e.code === 'ArrowLeft'){
                setTimeout(() => {
                    setCounter((prevCounter) => prevCounter > 0 ? prevCounter - 25 :prevCounter);
                });
            };
        });
    }, []);
    useEffect(() => {
        dispatch({
            type:'board',
            payload: {
                location:counter
            }
        });
    }, [counter]);
    
    return  <div 
                className={classes.board} 
                style={{left: counter + "px"}} 
            />
};

export { Board };
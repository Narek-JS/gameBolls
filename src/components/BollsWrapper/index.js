import { bollsArr } from "../../consts";
import { Boll } from "../../components";
import { useEffect, useState } from 'react';
import { Fragment } from "react";


const BollsWrapper = () => {
    const [ bolls, setBolls ] = useState([]);

    const chanhgeState = () => {
        const randomSecond = Math.random() * 2000 + 1000;
        setTimeout(() => {
            const randomLeft = Math.random() * window.innerWidth - 120;
            const randomBoll = Math.floor(Math.random() * 10);
            setBolls([
                ...bolls,
                {
                    boll: bollsArr[randomBoll],
                    randomLeft :randomLeft < 70 ? 70 : randomLeft
                }
            ]);
        }, randomSecond);
    }
 
    useEffect(()=> {
        chanhgeState()
    }, [bolls]);

    return bolls.map((boll, i) => {
            return  <Boll boll={boll.boll} randomLeft={boll.randomLeft} key={i} />
        }
    );
    
};

export { BollsWrapper };

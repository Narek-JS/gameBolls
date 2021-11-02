import { useState,Fragment } from "react"; 
import { Start, Game } from ".."; 

import ParticlesBg from 'particles-bg';

const Container = () => {
    const [ isStart, setisStart ] = useState(true);

    return (
        <Fragment>
            <ParticlesBg type="cobweb" bg={true} />
            { isStart ? 
                <Start setisStart={setisStart}/> :
                <Game isStart={isStart} setisStart={setisStart}/> 
            }
        </Fragment>
    );
}; 

export { Container };


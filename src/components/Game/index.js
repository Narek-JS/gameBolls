import { Asides, BollsWrapper, Board } from '..';

import ParticlesBg from 'particles-bg';
import { useState, Fragment } from 'react';


const Game = (props) => {
    const { isStart, setisStart } = props; 
    const [ finishGame, setFinishGame ] = useState(false);

    return (
        <section>
            <ParticlesBg type="ball" bg={true} /> 
            <ParticlesBg type="square" bg={true} /> 
            {
                finishGame ? 
                    <ParticlesBg type="lines" bg={true} /> :
                    <Fragment>
                        <Asides 
                            isStart={isStart} 
                            setisStart={setisStart} 
                            setFinishGame={setFinishGame}
                        />
                        <BollsWrapper />
                        <Board />
                    </Fragment>
            }
        </section>
    );
};

export { Game };
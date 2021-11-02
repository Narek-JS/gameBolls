import { useMemo } from 'react';
import { bollsArr } from '../../../consts';

import classes from './style.module.css';

const Left = () => {

    const viewSingleBoll = useMemo(() => {
        return bollsArr.map((boll, i) => {
            return (
                <div className={classes.bollsTypesDiv} key={i}>
                    <img className={classes.boolImageTypes} src={boll.boll} />
                    <h1 className={classes.bollsPointTypes}>-{boll.point}</h1>
                </div>
            );
        })
    }, [bollsArr]);

    
    return (
        <aside className={classes.bollsTypes}>
            <h2 className={classes.typesTitle}>types</h2>
            {viewSingleBoll}
        </aside>
    );
};
export { Left };


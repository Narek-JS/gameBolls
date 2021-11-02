import { useContext } from 'react/cjs/react.development';
import { ThemeContext } from '../../../context';

import classes from './style.module.css';

const Right = (props) => {
    const { time } = props;
    const { state } = useContext(ThemeContext);

    return (
        <aside className={classes.timeBill}>
            <div className={classes.timetDiv}>
                <h2 className={classes.timeTitle}>time</h2>
                <h1 className={classes.time}>{time}</h1>
            </div>
            <div className={classes.ponitDiv}>
                <h2 className={classes.pointTitle}>point</h2>
                <h1 className={classes.ponit}>{state.point}</h1>
            </div>
        </aside>
    );
};

export { Right };
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Select1 from './dropdown';
import LineGraph from './graph';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
            height: 'auto'
        }
    }
}));

export default function Local({h, dailydata, country}) {
    const classes = useStyles();

    return (
        <div className={
            classes.root
        }>
            <Paper elevation={3}
                style={
                    {justifyContent: 'center'}
            }>Select Country
                <Select1 h={h}/>
            </Paper>

            <Paper elevation={3}>
                <LineGraph dailydata={dailydata}
                    country={country}/>
            </Paper>
        </div>
    );
}

import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Global from './global';
import Local from './local';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
}));

function MainGrid({h, dailydata, country}) {
    const classes = useStyles();

    return (
        <div className={
            classes.root
        }>
            <Grid container
                spacing={3}>
                <Grid item
                    xs={4}>
                    <Paper className={
                        classes.paper
                    }>
                        <Global dailydata={dailydata}
                            country={country}/>
                    </Paper>
                </Grid>
                <Grid item
                    xs={8}>
                    <Paper className={
                        classes.paper
                    }>
                        <Local h={h}
                            dailydata={dailydata}
                            country={country}/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
export default MainGrid;

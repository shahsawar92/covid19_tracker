import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {useState} from 'react';
import {useEffect} from 'react';
import NumberFormat from 'react-number-format';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
            height: theme.spacing(16)
        }
    }
}));
const useStylestypography = makeStyles({
    root: {
        width: '100%',
        maxWidth: 500
    }
});


export default function SimplePaper({country, dailydata}) {
    const classes = useStyles();
    const classtypeography = useStylestypography();

    const [globalData, setGlobalData] = useState();
    const [fetching, setfetching] = useState(false);

    useEffect(() => {

        async function FetchglobalData() {
            setfetching(true);

            const url = 'https://api.covid19api.com/summary'

            const response = await fetch(url);
            const globalD = await response.json();
            setGlobalData(globalD);
            setfetching(false);
        }
        FetchglobalData();
    }, [setGlobalData]);


   
    
    const loading = "loading..."
    if (fetching === true) {

        return (
            <div className={
                classes.root
            }>
                <Paper elevation={3}>
                    <div className={
                        classtypeography.root
                    }>
                        <Typography variant="h4" gutterBottom>
                            {loading} </Typography>


                        <Typography variant="subtitle2" gutterBottom>
                            Global Cases For Today
                        </Typography>
                    </div>
                </Paper>
                <Paper elevation={3}>
                    <div className={
                        classtypeography.root
                    }>
                        <Typography variant="h4" gutterBottom
                            style={
                                {color: 'orange'}
                        }>
                            {loading} </Typography>


                        <Typography variant="subtitle2" gutterBottom
                            style={
                                {color: 'orange'}
                        }>
                            New conformed
                        </Typography>
                    </div>
                </Paper>
                <Paper elevation={3}>
                    <div className={
                        classtypeography.root
                    }>
                        <Typography variant="h4" gutterBottom
                            style={
                                {color: 'green'}
                        }>
                            {loading} </Typography>


                        <Typography variant="subtitle2" gutterBottom
                            style={
                                {color: 'green'}
                        }>
                            Recoverd
                        </Typography>
                    </div>
                </Paper>
                <Paper elevation={3}>
                    <div className={
                        classtypeography.root
                    }>
                        <Typography variant="h4" gutterBottom
                            style={
                                {color: 'red'}
                        }>
                            {loading} </Typography>


                        <Typography variant="subtitle2" gutterBottom
                            style={
                                {color: 'red'}
                        }>
                            Deaths
                        </Typography>
                    </div>
                </Paper>
            </div>
        );
    } else if (!country) {
        return (
            <div className={
                classes.root
            }>
                <Paper elevation={3}>
                    <div className={
                        classtypeography.root
                    }>
                        <Typography variant="h4" gutterBottom>
                            <NumberFormat value={
                                    globalData?.Global?.TotalConfirmed
                                }
                                displayType={'text'}
                                thousandSeparator={true}/>

                        </Typography>


                        <Typography variant="subtitle2" gutterBottom>
                            Total Global Cases
                        </Typography>
                    </div>
                </Paper>
                <Paper elevation={3}>
                    <div className={
                        classtypeography.root
                    }>
                        <Typography variant="h4" gutterBottom
                            style={
                                {color: 'orange'}
                        }>
                            <NumberFormat value={
                                   globalData?.Global?.NewConfirmed
                                }
                                displayType={'text'}
                                thousandSeparator={true}/>
                        </Typography>


                        <Typography variant="subtitle2" gutterBottom
                            style={
                                {color: 'orange'}
                        }>
                            New Conformed Cases
                        </Typography>
                    </div>
                </Paper>
                <Paper elevation={3}>
                    <div className={
                        classtypeography.root
                    }>
                        <Typography variant="h4" gutterBottom
                            style={
                                {color: 'green'}
                        }>
                            <NumberFormat value={
                                    globalData?.Global?.TotalRecovered
                                }
                                displayType={'text'}
                                thousandSeparator={true}/>

                        </Typography>


                        <Typography variant="subtitle2" gutterBottom
                            style={
                                {color: 'green'}
                        }>
                            Total Recoverd
                        </Typography>
                    </div>
                </Paper>
                <Paper elevation={3}>
                    <div className={
                        classtypeography.root
                    }>
                        <Typography variant="h4" gutterBottom
                            style={
                                {color: 'red'}
                        }>
                            <NumberFormat value={
                                   globalData?.Global?.TotalDeaths
                                }
                                displayType={'text'}
                                thousandSeparator={true}/>

                        </Typography>


                        <Typography variant="subtitle2" gutterBottom
                            style={
                                {color: 'red'}
                        }>
                           Total Deaths
                        </Typography>
                    </div>
                </Paper>
            </div>
        );
    } else if (country) {
        return (
            <div className={
                classes.root
            }>
                <Paper elevation={3}>
                    <div className={
                        classtypeography.root
                    }>
                        <Typography variant="h4" gutterBottom>
                            <NumberFormat value={
                                    dailydata.confirmed ?. value
                                }
                                displayType={'text'}
                                thousandSeparator={true}/>

                        </Typography>


                        <Typography variant="subtitle2" gutterBottom>
                            {country}
                            Cases For Today
                        </Typography>
                    </div>
                </Paper>
                <Paper elevation={3}>
                    <div className={
                        classtypeography.root
                    }>
                        <Typography variant="h4" gutterBottom
                            style={
                                {color: 'green'}
                        }>
                            <NumberFormat value={
                                    dailydata.recovered ?. value
                                }
                                displayType={'text'}
                                thousandSeparator={true}/>

                        </Typography>


                        <Typography variant="subtitle2" gutterBottom
                            style={
                                {color: 'green'}
                        }>
                            Recoverd
                        </Typography>
                    </div>
                </Paper>
                <Paper elevation={3}>
                    <div className={
                        classtypeography.root
                    }>
                        <Typography variant="h4" gutterBottom
                            style={
                                {color: 'red'}
                        }>
                            <NumberFormat value={
                                    dailydata.deaths ?. value
                                }
                                displayType={'text'}
                                thousandSeparator={true}/>

                        </Typography>


                        <Typography variant="subtitle2" gutterBottom
                            style={
                                {color: 'red'}
                        }>
                            Deaths
                        </Typography>
                    </div>
                </Paper>
            </div>
        );
    }
}

import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    }
}));


export default function Select1({h}) {
    const [mydata, setmydata] = useState([]);
    const classes = useStyles();
    useEffect(() => {

        async function FetchcountryData() {
            const response1 = await fetch('https://covid19.mathdro.id/api/countries');
            const {countries} = await response1.json()

            setmydata(countries);
        }
        FetchcountryData();
    }, [setmydata]);


    return (<div>
        <FormControl className={
            classes.formControl
        }>
            <InputLabel htmlFor="grouped-select">select country
            </InputLabel>
            <NativeSelect defaultValue=""
                onChange={
                    (event) => h(event.target.value)
                }
                id="grouped-select">
                <option></option>
                {
                mydata.map((country, i) =>< option key = {
                    i
                } > {
                    country.name
                } < /option>)
            } </NativeSelect>
        </FormControl>
    </div>
);;
}

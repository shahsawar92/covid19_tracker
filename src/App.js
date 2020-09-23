import React, {useState, useEffect} from 'react';
import './App.css';
// import app bar
import MyAppBar from './components/appbar';
import MainGrid from './components/maingrid';


function App() {
    const [country, setCountry] = useState();
    // fetching data
    const [dailydata, setdailydata] = useState([]);

    useEffect(() => {
        if (country) {
            async function Fetchdaily() {
                const responsedaily = await fetch(`https://covid19.mathdro.id/api/countries/${country}`);
                const data = await responsedaily.json();
                setdailydata(data);
                console.log(`data of ${country} country :`, data)

            }
            Fetchdaily();
        }
        if (!country) {
            async function Fetchdaily() {
                const responsedaily = await fetch('https://covid19.mathdro.id/api/daily');
                const data = await responsedaily.json();
                setdailydata(data);
                console.log('data of dailyreport :', data)
            }
            Fetchdaily();
        }

    }, [country]);
    console.log('country selected: ', country)
    // handle for selection of country
    const h = async (country) => {
        setCountry(country);
    }
    return (
        <div>

            <MyAppBar/>
            <MainGrid h={h}
                dailydata={dailydata}
                country={country}/>
        </div>
    );
}

export default App;

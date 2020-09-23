import React from 'react';
import {Line} from 'react-chartjs-2';


export default function LineGraph({dailydata, country}) {
    console.log("daily data contain: ", dailydata)

    if (!country) {
        const data = {

            labels: dailydata.map((shah) => shah.reportDate),
            datasets: [
                {
                    label: 'Total infacted',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(0,255,0,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: dailydata.map((c) => c.confirmed.total)
                }, {
                    label: 'Total Deaths',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(255,0,0,0)',
                    borderColor: 'rgba(255,0,0,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(255,0,0,1)',
                    pointBackgroundColor: '#aaa ',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: dailydata.map((d) => d.deaths.total)
                }
            ]
        };

        return (
            <div>
                <Line data={data}/>
            </div>
        )
    }
    let c = dailydata.deaths;
    const data = {
        labels: [
            'confirmed', 'Recovered', 'Deaths'
        ],
        datasets: [
            {
                label: `${country} states`,
                backgroundColor: 'rgba(23,67,88,0.5)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [
                    dailydata.confirmed ?. value,
                    dailydata.recovered ?. value,
                    c ?. value
                ]
            },
        ]
    };
    return (
        <div>
            <Line data={data}/>
        </div>
    )
}

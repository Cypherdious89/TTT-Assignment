import React from 'react'
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale} from 'chart.js'
import {Bar} from 'react-chartjs-2'

ChartJS.register (
    BarElement,
    CategoryScale,
    LinearScale
)

const Histogram = ({arr}) => {
    const data = {
        labels: arr.map(e => e.word),
        datasets: [{
            label: 'Fequency',
            data: arr.map(e => e.frequency),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };

    var options = {
        maintainAspectRatio: false,
        scales: {},
        legend: {
            labels: {
                fontSize: 25,
            },
        },
    };

    return (
    <div className="graph">
        <h3>Word/Frequency Graph for 20 most frequent words</h3>
        <Bar
            data={data}
            height={400}
            options={options}
        />
    </div>
    )
}

export default Histogram
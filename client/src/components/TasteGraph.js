 import React, {PropTypes} from 'react';
import {Grid} from 'react-bootstrap';
const {Radar, rgba} = require("react-chartjs");
const ReactDOM = require('react-dom');

function rand(min, max, num) {
		var rtn = [];
		while (rtn.length < num) {
			rtn.push((Math.random() * (max - min)) + min);
		}
		return rtn;
	}

	var chartData = {
    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [28, 48, 40, 19, 96, 27, 100]
        }
    ]
};

	var chartOptions = {
			scale: {
				reverse: true,
				ticks: {
					beginAtZero: true
				}
			}
		};


function TasteGraph({rating}) {
	console.log("chart");
	//loop through and output one slider and one value per component
	console.log(chartData);
	console.log(chartOptions);

	return (
		<div>
		<Radar data={chartData} options={chartOptions}/>
		</div>
		);

}
TasteGraph.propTypes = {
	rating: PropTypes.array
};

TasteGraph.defaultProps = {
	rating: []
};

export default TasteGraph;

import React, {PropTypes} from 'react';
import {Grid} from 'react-bootstrap';
const {Radar} = require("react-chartjs");
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
		borderColor: "red",
		pointBackgroundColor: "rgba(179,181,198,1)",
		pointBorderColor: "#fff",
		pointHoverBackgroundColor: "#fff",
		pointHoverBorderColor: "rgba(179,181,198,1)",
		data: [65, 59, 90, 81, 56, 55, 40]
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
	//loop through and output one slider and one value per component
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

import React, {PropTypes} from 'react';
const {Radar} = require("react-chartjs");

var chartData = {
	labels: [],
	datasets: [
		{
			label: "My First dataset",
			fillColor: "rgba(0,255,0,0.2)",
			strokeColor: "red",
			pointBackgroundColor: "rgba(179,181,198,1)",
			pointBorderColor: "#fff",
			pointHoverBackgroundColor: "#fff",
			pointHoverBorderColor: "rgba(179,181,198,1)",
			data: []
		}
	]
};

var chartOptions = {
	scale: {
		reverse: true,
		ticks: {
			beginAtZero: false,
			min: 1,
			suggestedMin: 1
		}
	}
};

function TasteGraph({rating}) {
	//loop through and output one slider and one value per component
	let labels = [];
	let data = [];
	console.log(rating);
	rating.forEach(function(r) {
		labels.push(r.name);
		data.push(r.quantity);
	});
	chartData['labels']=labels;
	chartData['datasets'][0]['data']=data;

	return (
		<div>
		<Radar data={chartData} options={chartOptions} width="400" height="400" redraw/>
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

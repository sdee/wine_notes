import React, {PropTypes} from 'react';
import Slider from './Slider.js';
import { Panel, Grid, Row, Col } from 'react-bootstrap';

function TasteGraph(props) {
	console.log("inside tastegraph");
	console.log(props)
	console.log(props.rating);
	//loop through and output one slider and one value per component
	console.log("--------");
	var msg = [];
	console.log(props.rating);

	return (
		<div>
		<Grid>
		{msg}
		</Grid>
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

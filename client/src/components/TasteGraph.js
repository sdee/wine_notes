import React, {PropTypes} from 'react';
import Slider from './Slider.js';
import { Panel, Grid, Row, Col } from 'react-bootstrap';

function TasteGraph(props) {

	//loop through and output one slider and one value per component

	var msg = [];
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

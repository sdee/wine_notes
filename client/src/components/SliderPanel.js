import React, {PropTypes} from 'react';
import Slider from './Slider.js';
import { Panel, Grid, Row, Col } from 'react-bootstrap';

function SliderPanel(props) {
	console.log("inside SliderPanel");
	console.log(props)
	console.log(props.rating);
	//loop through and output one slider and one value per component
	console.log("--------");
	var msg = [];
	console.log(props.rating);

	props.rating.forEach(function(r){
		msg.push(
			<div>
			<Slider name={r.name} value={r.quantity}/>
			</div>
			);
	});

	return (
		<div>
		<Grid>
		{msg}
		</Grid>
		</div>
		);

}
SliderPanel.propTypes = {
	rating: PropTypes.array
};

SliderPanel.defaultProps = {
	rating: []
};

export default SliderPanel;

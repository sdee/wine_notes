import React, {PropTypes} from 'react';
import Slider from './Slider.js';
import { Panel, Grid, Row, Col } from 'react-bootstrap';
import _ from 'underscore';

function SliderPanel({ rating, onMoveSlider }) { ///was props
	var f = onMoveSlider;
	var msg = [];
	_.values(rating).forEach(function(r){
		msg.push(
			<div>
			<Slider name={r.name} 
				value={r.quantity} 
				onMoveSlider={f}/>
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

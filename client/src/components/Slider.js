import React, {PropTypes} from 'react';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import { Panel, Grid, Row, Col } from 'react-bootstrap';

function Slider({ name, value }) {
	return (
		<Row className="show-grid">
			<Col md={2}>
				{name}
			</Col>
			<Col md={3}>		
			<ReactBootstrapSlider
				value={value}
				change={valueChanged}
				min={0}
				max={10}
				orientation="horizontal" />
			</Col>
			<Col md={2}>
				{value}
			</Col>
		</Row>
		);
}

Slider.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.number.isRequired,
};

function valueChanged(event) {
	console.log("value changed");
}

export default Slider;
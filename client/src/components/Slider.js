import React, {PropTypes} from 'react';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import { Row, Col } from 'react-bootstrap';

function Slider( {name, value, onMoveSlider} ) {
	return (
		<Row className="show-grid">
			<Col md={2}>
				{name}
			</Col>
			<Col md={3}>
			<ReactBootstrapSlider
				value={value}
				slideStop={valueChanged}
				min={0}
				max={10}
				orientation="horizontal"
				name={name}
				f={onMoveSlider}/>
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
	onMoveSlider:PropTypes.func.isRequired
};

function valueChanged(event) {
	console.log("EVENT");
	console.log(this.name);
	console.log(event);
	this.f(this.name, event.target.value);
}

export default Slider;

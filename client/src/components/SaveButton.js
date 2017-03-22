import React, { PropTypes } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

function SaveButton({ rating, onClick }) {
	return (
		<div>
			<div>
				<Button bsStyle="success" onClick={onClick}>Save
					<Glyphicon glyph="chevron-right" />
				</Button>
			</div>
		</div>
	);
}

SaveButton.propTypes = {

};

export default SaveButton;

import React, {PropTypes} from 'react';

function TasteGraph(props) {
	console.log("inside tastegraph");
	console.log(props)
	console.log(props.rating);
	//loop through and output one slider and one value per component
	console.log("--------");
	var msg = [];
	props.rating.forEach(function(r){
		msg.push(<div><b>{r.name}</b></div>);
	});
	console.log('msg');
	console.log(msg);

	return (
		<div>
	{msg}
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

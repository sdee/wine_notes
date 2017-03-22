import React from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap';
import './App.css';

import Tasting from './containers/Tasting';
import Controls from './containers/Controls';
import SaveTasting from './containers/SaveTasting';

function App() {
	return (
		<div className="App">
			<Panel header="Tasting with thought">
				<Grid>
					<Row>
						<Col xs={5}><Tasting/></Col>
						<Col xs={6}><br/><br/><Controls/></Col>
						<SaveTasting/>
					</Row>
				</Grid>
			</Panel>
		</div>
		);
}

export default App;

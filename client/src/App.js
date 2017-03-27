import React from 'react';
import { Panel, Grid, Row, Col, FormGroup, Tabs, Tab } from 'react-bootstrap';
import './App.css';

import Tasting from './containers/Tasting';
import Controls from './containers/Controls';
import SaveTasting from './containers/SaveTasting';


function App() {
	return (
		<div className="App">
		<Tabs defaultActiveKey={1} id="tabs">
		<Tab eventKey={1} title="Choose Tenses">
		<Panel header="Tasting with thought">
		<Grid>
		<Row>
		<SaveTasting/>
		</Row>
		<Row>
		<Col xs={6}><br/><br/><Controls/></Col>
		<Col xs={5}><Tasting/></Col>

		</Row>
		</Grid>
		</Panel>
		</Tab>
		<Tab eventKey={2} title="Recent">
			<Panel header="Gallery">
			</Panel>
		</Tab>
		</Tabs>
		</div>
	);
}

export default App;

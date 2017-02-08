import React from 'react';
import { Panel } from 'react-bootstrap';
import './App.css';

import Tasting from './containers/Tasting';
import Controls from './containers/Controls';

function App() {
	return (
		<div className="App">
		<Panel header="Tasting with thought">
		<Tasting/>
		<Controls/>
		</Panel>
		</div>
		);
}

export default App;

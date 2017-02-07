import React from 'react';
import { Panel } from 'react-bootstrap';
import './App.css';

import Tasting from './containers/Tasting';
function App() {
	return (
		<div className="App">
		
		<Panel header="Tasting with thought">
		<Tasting/>
		</Panel>
		</div>
		);
}

export default App;

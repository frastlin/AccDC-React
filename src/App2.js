import React, { Component } from 'react';
import AccDC from './components/AccDC.js'

import Menu from './components/Menu'
import MenuItem from './components/MenuItem.js'

class App extends Component {
	render() {
		return (
			<AccDC>
			<Menu>
				<MenuItem primaryText="Item1" />
				<MenuItem primaryText="Item2" />
			</Menu>
			</AccDC>
		);
	}
}

export default App;
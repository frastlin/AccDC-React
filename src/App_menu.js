import React, { Component } from 'react';

import Menu from './standalone_components/Menu'
import MenuItem from './standalone_components/MenuItem'

const top_menu = [
<MenuItem primaryText="Stuff">
	<MenuItem primaryText="Cheese" />
	<MenuItem primaryText="Oranges" />
</MenuItem>,
<MenuItem primaryText="Name" />
]

class App extends Component {
	render() {
		return (
		<div>
		<h1>Hello</h1>
			<Menu>
			{top_menu}
			</Menu>
			</div>
		);
	}
}

export default App;
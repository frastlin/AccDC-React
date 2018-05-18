import React, { Component } from 'react';

import DataGrid from './standalone_components/DataGrid'


const columnNames = [
					{
					id: 'row-id',
					lbl: 'ID',
					colClass: 'gridcell-col1'
					},
					{
					id: 'personal-name',
					lbl: 'Name',
					colClass: 'gridcell-col2'
					},
					{
					id: 'personal-email',
					lbl: 'Email',
					colClass: 'gridcell-col3'
					},
					{
					id: 'personal-city',
					lbl: 'Residence',
					colClass: 'gridcell-col4'
					},
					{
					id: 'personal-university',
					lbl: 'University',
					colClass: 'gridcell-col5'
					},
					{
					id: 'personal-status',
					lbl: 'Attendance',
					colClass: 'gridcell-col6'
					}
					]

const cells = []
let spin = 2
for(let tIndex = 0; tIndex < 100; tIndex++){
	cells.push({
										'row-id':
														{
														readonly: true,
														value: tIndex
														},
										'personal-name':
														{
														value: (spin === 2 ? 'Rincewind' : spin === 1 ? 'Ponder Stibbons' : 'Hrun the Barbarian')
														},
										'personal-email':
														{
														value: (spin === 2 ? 'wizzard@whatsock.com' : spin === 1 ? 'ponder@whatsock.com' : 'aarg@whatsock.com')
														},
										'personal-city':
														{
														value: 'Ankh-Morpork'
														},
										'personal-university':
														{
														value: (spin === 2 || spin === 1 ? 'Unseen University' : 'Gruntings')
														},
										'personal-status':
														{
														type: 'toggle',
														name: 'Active',
														value: (spin === 2 ? false : true)
														}
										})
		if (!spin)
			spin = 2;

		else
			spin -= 1;
}



class App extends Component {
	render() {
		return (
		<div>
		<h1>Hello</h1>
		<DataGrid columnNames={columnNames} cells={cells} />
			</div>
		);
	}
}


export default App;
import React, { Component } from 'react';
import setupGrid from './setup.js'
import '../css/global.css'
import './css/grid.css'
import './css/extra.css'

export default class DataGrid extends Component{
	static defaultProps = {
	}

	constructor(props){
		super(props)
		this.state = {
			columnNames: props.columnNames,
			cells: props.cells
		}
	}

	componentDidMount(){
		this.grid = setupGrid({
			columnNames: this.state.columnNames
		})
		this.setCells()
	}

	setCells(){
		this.state.cells.map((row, tIndex)=>{
				this.grid.add({
						id: tIndex,
						cells: row
						});

		if (tIndex == 10)
			// Render the first page and load all other records in the background
			this.grid.openPage(1);
		})
	}


	render(){
		return(
			<div>
			<span id="pTotal"></span>

			<div id="dataGridId"></div>

			<div role="region" aria-label="pagination" className="paginate clearfix" id="pgn">
			<button className="paginate" id="btnFirst" title="First Page"><span aria-hidden="true">&#8656;</span></button>
			<button className="paginate" id="btnPrev" title="Previous Page"><span aria-hidden="true">&#8592;</span></button>
			<button className="paginate" id="btnNext" title="Next Page"><span aria-hidden="true">&#8594;</span></button>
			<button className="paginate" id="btnLast" title="Last Page"><span aria-hidden="true">&#8658;</span></button>
			<input title="Page" type="text" id="goTo" />
			<button className="paginate" id="btnGo"><span>Go</span></button>
			</div>
			</div>
	)
	}
}
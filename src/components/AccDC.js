import React, { Component } from 'react';

export default class AccDC extends Component{
	constructor(props){
		super(props)
		this.state = {}
	}

	render(){
		return(
			<div>
			{this.props.children}
		</div>
	)
	}
}
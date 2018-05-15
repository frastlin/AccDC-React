import React, { Component } from 'react';

export default class Menu extends Component{
	static defaultProps = {
		element: 'div',
		className: 'menu-item',
		tabIndex: -1
	}

	constructor(props){
		super(props)
		this.state = {
			tabIndex: props.tabIndex,
			primaryText: this.props.primaryText
		}
	}

	changePrimaryText(text){
		this.setState({primaryText:text})
	}

	render(){
		return(
			<this.props.element className={this.props.className} role="menuitem" tabIndex={this.state.tabIndex} aria-haspopup="false">
			{this.state.primaryText}
		</this.props.element>
		)
	}
}

import React, { Component } from 'react';

export default class MenuButton extends Component{
	static defaultProps = {
		id: 0,
		element: 'button',
		title: "Menu",
		expanded: false,
		nextItem: 'ArrowDown',
		previousItem: 'ArrowUp',
		exit: 'Escape'
	}

	constructor(props){
		super(props)
		this.state = {}
		this.id = this.props.id
		MenuButton.defaultProps.id += 1

		this.handleKeyDown = this.handleKeyDown.bind(this)
		this.handleClick = this.handleClick.bind(this)
		this.handleFocus = this.handleFocus.bind(this)
		this.handleBlur = this.handleBlur.bind(this)
		this.handleMouseOver = this.handleMouseOver.bind(this)
		this.handleMouseOut = this.handleMouseOut.bind(this)
	}

	handleButtonKeyDown(e){
		return
	}

	handleKeyDown(e){
		return
	}

	handleClick(e){
		return
	}

	handleFocus(e){
		return
	}

	handleBlur(e){
		return
	}

	handleMouseOver(e){
		return
	}

	handleMouseOut(e){
		return
	}

	render(){
		return(
		<div>
		<button
			aria-haspopup="true"
			aria-controls={this.props.menuId}
			id={`menubutton-${this.id}`}
			onKeyDown={this.handleButtonKeyDown}
			onClick={this.handleClick}
		>
				{this.props.text}
		</button>
		</div>
		)
	}
}
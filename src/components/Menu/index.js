import React, { Component } from 'react';

import MenuButton from './MenuButton.js'

export default class Menu extends Component{
	static defaultProps = {
		id: 0,
		element: 'ul',
		onChange: ()=>{},
		title: "Menu",
		allowCascade: true,
		expanded: false,
		nextItem: 'ArrowDown',
		previousItem: 'ArrowUp',
		exit: 'Escape'
	}

	constructor(props){
		super(props)
		this.state = {}
		this.id = this.props.id
		Menu.defaultProps.id += 1

	//for the menu
	this.open = this.open.bind(this)
	this.close = this.close.bind(this)
		this.handleKeyDown = this.handleKeyDown.bind(this)
		this.handleClick = this.handleClick.bind(this)
		this.handleFocus = this.handleFocus.bind(this)
		this.handleBlur = this.handleBlur.bind(this)
		this.handleMouseOver = this.handleMouseOver.bind(this)
		this.handleMouseOut = this.handleMouseOut.bind(this)
	}

	open(focus){
		if(focus == -1){
			return
		} else {
			return
		}
	}

	close(){
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
//aria-haspopup={true} aria-expanded={false}
		return(
		<div>
		<MenuButton
			menuId={`menu-${this.id}`}
			text={this.props.text}
			openMenu={this.open}
			closeMenu={this.close}
		/>

			<this.props.element role="menu" id={`menu-${this.id}`} title={this.props.title} aria-labelledby={`menubutton-${this.id}`} onChange={this.props.onChange} aria-expanded={this.props.expanded}>
				{this.props.children.map(child=>
					<li role="none" key={child.props.primaryText}>{child}</li>
				)}
			</this.props.element>
		</div>
		)
	}
}
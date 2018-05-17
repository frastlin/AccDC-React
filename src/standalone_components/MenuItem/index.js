import React, { Component } from 'react';
import '../css/global.css'
import '../Menu/css/menus.css'

export default class MenuItem extends Component{
	constructor(props){
		super(props)
		this.id = props.id || this.createId(props.primaryText)
		this.primaryText = this.props.PrimaryText
		this.className = props.children ? "submenu" : "link"
	}

	createId(primaryText){
		return "-" + primaryText.replace(/[.,\/#!$%\^&\*;:{}=\`~()]/g,"").trim().replace(/ /g, "-").toLowerCase()
	}

	render(){
		return(
			<a href={this.id} className={this.className} id={this.id}> {this.primaryText} </a>
		)
	}
}
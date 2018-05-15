import React, { Component } from 'react';
import setupMenu from './setup.js'
import '../css/global.css'
import './css/menus.css'

const options = <div id="hiddenDivId" className="hidden">
	<ol data-autoposition="11" data-offsetleft="25" title="Options" className="menu" id="menu-options">
		<li><a href="#" className="submenu" id="-profile"> Profile</a></li>
		<li><a href="#" className="submenu" id="-settings"> Settings</a></li>
		<li><a href="#" className="submenu" id="-account"> Account</a></li>
		<li><a href="#" className="submenu" id="-services"> Services</a></li>
		<li><a href="#" className="link" id="-properties"> Properties...</a></li>
		<li><a href="#" className="link" id="-help"> Help...</a></li>
	</ol>
	<ol title="Profile" className="menu" id="menu-options-profile">
		<li><a href="#" className="submenu" id="-personal"> Personal</a></li>
		<li><a href="#" className="submenu" id="-business"> Business</a></li>
		</ol>
		<ol title="Personal" className="menu" id="menu-options-profile-personal">
		<li><a href="#" className="link" id="-name"> Name</a></li>
		<li><a href="#" className="link" id="-interests"> Interests</a></li>
		<li><a href="#" className="link" id="-education"> Education</a></li>
		</ol>
		<ol title="Business" className="menu" id="menu-options-profile-business">
		<li><a href="#" className="link" id="business-name"> Name</a></li>
		<li><a href="#" className="link" id="business-contact"> Contact</a></li>
		</ol>
		<ol title="Settings" className="menu" id="menu-options-settings">
		<li><a href="#" className="link" id="settings-search"> Search</a></li>
		<li><a href="#" className="link" id="settings-cookies"> Cookies</a></li>
		<li><a href="#" className="link" id="settings-layout"> Layout</a></li>
		</ol>
		<ol title="Account" className="menu" id="menu-options-account">
		<li><a href="#" className="link" id="account-username"> Username</a></li>
		<li><a href="#" className="link" id="account-password"> Password</a></li>
		<li><a href="#" className="link" id="account-email"> Email</a></li>
		</ol>
		<ol title="Services" className="menu" id="menu-options-services">
		<li><a href="#" className="link" id="services-campaigns"> Campaigns</a></li>
		<li><a href="#" className="link" id="services-payments"> Payments</a></li>
		<li><a href="#" className="link" id="services-billing"> Billing</a></li>
		</ol>
</div>



export default class Menu extends Component{
	constructor(props){
		super(props)
		this.state = {}
	}

	componentDidMount(){
		setupMenu()
	}

	render(){
		return(
			<div>
			<h1 id="fofo">Hello</h1>
			<button className="menu">Options (Vertical Dropdown)</button>

			{options}
			</div>
		)
	}
}
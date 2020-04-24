import React from 'react';
import ReactDOM from 'react-dom';
import { RootState } from '../../store';
import { selectCurrentUser, addNewUser } from '../../store/profiles/actions';
import { User, crtUserGenInfo, crtUserInterests, crtUserContactInfo } from '../../store/profiles/types';
import { Grid, Menu, Segment, Input, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { JSXElement } from '@babel/types';

// https://react.semantic-ui.com/collections/menu/#variations-attached-tabular
// class MenuExampleAttachedTabular extends React.Component {
// 	constructor (props: any) {
// 		super (props);
// 		this.state = { activeItem: 'tab1' }
// 	}
	
// 	handleItemClick = (e: any, { name }) => this.setState({ activeItem: name })
	
// 	render() {
// 		let activeItem: string;
// 		{ activeItem } = this.state
	
// 		return (
// 			<div>
// 				<Menu attached='top' tabular>
// 				<Menu.Item
// 					name='tab1'
// 					active={activeItem === 'tab1'}
// 					onClick={this.handleItemClick}
// 				/>
// 				<Menu.Item
// 					name='tab2'
// 					active={activeItem === 'tab2'}
// 					onClick={this.handleItemClick}
// 				/>
// 				</Menu>
		
// 				<Segment attached='bottom'>
// 				There are many variations of passages of Lorem Ipsum available, but
// 				the majority have suffered alteration in some form, by injected
// 				humour, or randomised words which don't look even slightly believable.
// 				If you are going to use a passage of Lorem Ipsum, you need to be sure
// 				there isn't anything embarrassing hidden in the middle of text. All
// 				the Lorem Ipsum generators on the Internet tend to repeat predefined
// 				chunks as necessary, making this the first true generator on the
// 				Internet. It uses a dictionary of over 200 Latin words, combined with
// 				a handful of model sentence structures, to generate Lorem Ipsum which
// 				looks reasonable. The generated Lorem Ipsum is therefore always free
// 				from repetition, injected humour, or non-characteristic words etc.
// 				</Segment>
// 			</div>
// 		)
// 	}
// }

 interface IUserProfilesProps {
	selectCurrentUser: typeof selectCurrentUser,
	addNewUser: typeof addNewUser,
	users: User[],
	crtUserGenInfo: crtUserGenInfo,
	crtUserInterests: crtUserInterests,
	crtUserContactInfo: crtUserContactInfo
}

interface IUserProfilesState {
	pageContent: JSX.Element
}

export class UserProfiles extends React.Component<IUserProfilesProps, IUserProfilesState> {
	constructor (props: any) {
		super(props);
		this.state = { pageContent: this.genInfo() }
	}
	genInfo = (): JSX.Element => {		// returns a JSX var with user's General Info
		let contentGenInfo: JSX.Element;
		if (this.props.crtUserGenInfo.name == "USER NOT FOUND!")
			contentGenInfo = (<h2>{"USER NOT FOUND!"}</h2>);
		else
			contentGenInfo = (
				<div>
					<h2>General Information:</h2>
					<ul>
						<li>User ID: {this.props.crtUserGenInfo.id}</li>
						<li>Full Name: {this.props.crtUserGenInfo.name}</li>
						<li>User Name: {this.props.crtUserGenInfo.username}</li>
						<li>Age: {this.props.crtUserGenInfo.age}</li>
						<li>Gender: {this.props.crtUserGenInfo.gender}</li>
					</ul>
				</div>
			);
		return contentGenInfo;
	}
	interests = (): JSX.Element => {	// returns a JSX var with user's Personal Interests
		let contentInterests: JSX.Element;
		if (this.props.crtUserGenInfo.name == "USER NOT FOUND!")
			contentInterests = (<h2>{"USER NOT FOUND!"}</h2>);
		else
			contentInterests = (
				<div>
					<h2>Personal Interests:</h2>
					<p>{this.props.crtUserInterests.interests}</p>
				</div>
			);
		return contentInterests;
	}
	contact = (): JSX.Element => {		// returns a JSX var with user's Contact Info
		let contentContactInfo: JSX.Element;
		if (this.props.crtUserGenInfo.name == "USER NOT FOUND!")
			contentContactInfo = (<h2>{"USER NOT FOUND!"}</h2>);
		else
			contentContactInfo = (
				<div>
					<h2>Contact Information:</h2>
					<ul>
						<li>E-mail: {this.props.crtUserContactInfo.email}</li>
						<li>Address: {this.props.crtUserContactInfo.address.street}, suite {this.props.crtUserContactInfo.address.suite}, {this.props.crtUserContactInfo.address.city}, {this.props.crtUserContactInfo.address.zipcode}</li>
						<li>In case you need to drop a bomb on them, set the bomb target coordinates to:<br/>Lat: {this.props.crtUserContactInfo.address.geo.lat}<br/>Long: {this.props.crtUserContactInfo.address.geo.lng}</li>
						<li>Phone: {this.props.crtUserContactInfo.phone}</li>
						<li>Website: {this.props.crtUserContactInfo.website}</li>
						<li>Company: {this.props.crtUserContactInfo.company.name}</li>
					</ul>
				</div>
			);
		return contentContactInfo;
	}
	showGenInfo = () => { this.setState ( { pageContent: this.genInfo() } ); }
	showInterests = () => { this.setState ( { pageContent: this.interests() } ); }
	showContact = () => { this.setState ( { pageContent: this.contact() } ); }
	render () {
		return (
			<div>
				<form><input type="text" /></form>
				<nav id="p-tabs">
					<a onClick={this.showGenInfo}>General Information</a>
					<a onClick={this.showInterests}>Activities</a>
					<a onClick={this.showContact}>Contact Information</a>
				</nav>
				<div id="p-page">{this.state.pageContent}</div>
			</div>
		);
	}
}

// Retrieve "items" from our "global" redux state.
const mapStateToProps = ( state: RootState ) => {
	return {
	  users: state.profiles.users,
	  crtUserGenInfo: state.profiles.crtUserGenInfo,
	  crtUserInterests: state.profiles.crtUserInterests,
	  crtUserContactInfo: state.profiles.crtUserContactInfo
	}
}

export default connect (
	mapStateToProps,
	{ selectCurrentUser, addNewUser }
) ( UserProfiles )
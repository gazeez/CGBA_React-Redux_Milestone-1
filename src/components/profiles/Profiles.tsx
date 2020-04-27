import React, { FormEvent } from 'react';
// import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom'
import { RootState } from '../../store';
import { selectCurrentUser, addNewUser } from '../../store/profiles/actions';
import { User, crtUserGenInfo, crtUserInterests, crtUserContactInfo } from '../../store/profiles/types';
// import { Grid, Menu, Segment, Input, Button } from 'semantic-ui-react';
import { connect, useStore } from 'react-redux';
// import { JSXElement } from '@babel/types';
import './Profiles.css';
import store from '../../store/index';

interface ITabPageProps {
}

interface ITabPageState {
	activeItem: string
}

// https://react.semantic-ui.com/collections/menu/#variations-attached-tabular
// class TabPage extends React.Component<ITabPageProps, ITabPageState> {
// 	constructor (props: any) {
// 		super (props);
// 		this.state = { activeItem: 'tab1' }
// 	}
	
// 	handleItemClick = ( e: any ) => {
// 		const name: string = e.target.name;
// 		this.setState({ activeItem: name })
// 	}
	
// 	render() {
// 		let activeItem = this.state.activeItem
	
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
	page: string,
	pageContent: JSX.Element
}

export class UserProfiles extends React.Component<IUserProfilesProps, IUserProfilesState> {
	constructor (props: any) {
		super(props);
		this.state = {
			page: 'tab1',
			pageContent: this.genInfo()
		}
	}
	genInfo = (): JSX.Element => {		// returns a JSX var with user's General Info
		if (this.props.crtUserGenInfo.name === "USER NOT FOUND!")
			return (<h2>{"USER NOT FOUND!"}</h2>);
		else
			return (
				<div className="user-info user-gen-info">
					<section>
						<img className="user-photo" alt="blahblah and spare me the bullshit you stupid react" src={this.props.crtUserGenInfo.photo}></img>
					</section>
					<section>
						<h2>General Information:</h2>
						<ul>
							<li>User ID: {this.props.crtUserGenInfo.id}</li>
							<li>Full Name: {this.props.crtUserGenInfo.name}</li>
							<li>User Name: {this.props.crtUserGenInfo.username}</li>
							<li>Age: {this.props.crtUserGenInfo.age}</li>
							<li>Gender: {this.props.crtUserGenInfo.gender}</li>
						</ul>
					</section>
				</div>
			);
	}
	genInfo1 = (): JSX.Element => {		// returns a JSX var with user's General Info - pulls data directly from the Redux store!
		const crtUserGenInfo: crtUserGenInfo = Object.assign ({}, store.getState().profiles.crtUserGenInfo);
		if (crtUserGenInfo.name === "USER NOT FOUND!")
			return (<h2>{"USER NOT FOUND!"}</h2>);
		else
			return (
				<div className="user-info user-gen-info">
					<section>
						<img className="user-photo" alt="blahblah and spare me the bullshit you stupid react" src={crtUserGenInfo.photo}></img>
					</section>
					<section>
						<h2>General Information:</h2>
						<ul>
							<li>User ID: {crtUserGenInfo.id}</li>
							<li>Full Name: {crtUserGenInfo.name}</li>
							<li>User Name: {crtUserGenInfo.username}</li>
							<li>Age: {crtUserGenInfo.age}</li>
							<li>Gender: {crtUserGenInfo.gender}</li>
						</ul>
					</section>
				</div>
			);
	}
	interests = (): JSX.Element => {	// returns a JSX var with user's Personal Interests
		if (this.props.crtUserGenInfo.name === "USER NOT FOUND!")
			return (<h2>{"USER NOT FOUND!"}</h2>);
		else
			return (
				<div className="user-info">
					<h2>Personal Interests:</h2>
					<p>{this.props.crtUserInterests.interests}</p>
				</div>
			);
	}
	interests1 = (): JSX.Element => {	// returns a JSX var with user's Personal Interests - pulls data directly from the Redux store!
		const crtUserGenInfo: crtUserGenInfo = Object.assign ({}, store.getState().profiles.crtUserGenInfo);
		const crtUserInterests: crtUserInterests = Object.assign ({}, store.getState().profiles.crtUserInterests)
		if (crtUserGenInfo.name === "USER NOT FOUND!")
			return (<h2>{"USER NOT FOUND!"}</h2>);
		else
			return (
				<div className="user-info">
					<h2>Personal Interests:</h2>
					<p>{crtUserInterests.interests}</p>
				</div>
			);
	}
	contact = (): JSX.Element => {		// returns a JSX var with user's Contact Info
		if (this.props.crtUserGenInfo.name === "USER NOT FOUND!")
			return (<h2>{"USER NOT FOUND!"}</h2>);
		else
			return (
				<div className="user-info">
					<h2>Contact Information:</h2>
					<ul>
						<li>E-mail: {this.props.crtUserContactInfo.email}</li>
						<li>Address: {this.props.crtUserContactInfo.address.street}, suite {this.props.crtUserContactInfo.address.suite}, {this.props.crtUserContactInfo.address.city}, {this.props.crtUserContactInfo.address.zipcode}</li>
						<li>In case you need to drop a bomb on them, set the bomb target coordinates to:
							<ul>
								<li>Lat: {this.props.crtUserContactInfo.address.geo.lat}</li>
								<li>Long: {this.props.crtUserContactInfo.address.geo.lng}</li>
							</ul>
						</li>
						<li>Phone: {this.props.crtUserContactInfo.phone}</li>
						<li>Website: {this.props.crtUserContactInfo.website}</li>
						<li>Company: {this.props.crtUserContactInfo.company.name}</li>
					</ul>
				</div>
			);
	}
	contact1 = (): JSX.Element => {		// returns a JSX var with user's Contact Info - pulls data directly from the Redux store!
		const crtUserGenInfo: crtUserGenInfo = Object.assign ({}, store.getState().profiles.crtUserGenInfo);
		const crtUserContactInfo: crtUserContactInfo = Object.assign ({}, store.getState().profiles.crtUserContactInfo);
		if (crtUserGenInfo.name === "USER NOT FOUND!")
			return (<h2>{"USER NOT FOUND!"}</h2>);
		else
			return (
				<div className="user-info">
					<h2>Contact Information:</h2>
					<ul>
						<li>E-mail: {crtUserContactInfo.email}</li>
						<li>Address: {crtUserContactInfo.address.street}, suite {crtUserContactInfo.address.suite}, {crtUserContactInfo.address.city}, {crtUserContactInfo.address.zipcode}</li>
						<li>In case you need to drop a bomb on them, set the bomb target coordinates to:
							<ul>
								<li>Lat: {crtUserContactInfo.address.geo.lat}</li>
								<li>Long: {crtUserContactInfo.address.geo.lng}</li>
							</ul>
						</li>
						<li>Phone: {crtUserContactInfo.phone}</li>
						<li>Website: {crtUserContactInfo.website}</li>
						<li>Company: {crtUserContactInfo.company.name}</li>
					</ul>
				</div>
			);
	}
	showGenInfo = () => { this.setState ( { page: 'tab1', pageContent: this.genInfo() } ); }
	showGenInfo1 = () => { this.setState ( { page: 'tab1', pageContent: this.genInfo1() } ); }
	showInterests = () => { this.setState ( { page: 'tab2', pageContent: this.interests() } ); }
	showInterests1 = () => { this.setState ( { page: 'tab2', pageContent: this.interests1() } ); }
	showContact = () => { this.setState ( { page: 'tab3', pageContent: this.contact() } ); }
	showContact1 = () => { this.setState ( { page: 'tab3', pageContent: this.contact1() } ); }

	lookupUser = ( event: any ) => {	// This is an onSubmit handler
		event.preventDefault();

		let formFieldValue: string = ''; let userid: number = -1;

		// ======== Next we can go either like this: (if using lookupUser(event:FormEvent) =========
		// const formElement: HTMLFormElement = event.target as HTMLFormElement;
		// const formField: HTMLInputElement = formElement.children[1] as HTMLInputElement;
		// if ( formField !== null ) { userid = Number(formField.value) } else { userid = -1; }
		// =================== Or like this: (if using lookupUser(event:any) =======================
		// const formField: HTMLInputElement | null = document.querySelector('[id="userid"]');
		// if ( formField !== null ) {formFieldValue = formField.value; userid = Number(formFieldValue);}
		// =================== Or like this: (if using lookupUser(event:any) =======================
		if ( event.target !== null ) { userid = Number(event.target.children[1].value) } else { userid = -1; }

		// console.log("Component sending out ID = " + formField.value + " as " + userid + " from " + formElement.tagName);		// just testing
		console.log( "========== Component sending out ID = " +
					 event.target.children[1].value + " as " +
					 userid + " from " + event.target.tagName );					// just testing -> correct ID sent out of the text input.

		this.props.selectCurrentUser ( userid );			// the test console.log in the reducer shows it works properly, user found.
		console.log( "========== Current Redux state is:\n", store.getState() );	// just testing -> Redux state changed correctly.
		console.log( "========== Component received ID = " +
					 this.props.crtUserGenInfo.id );								// just testing -> Oops! Props not updated
															// Bottom line: Redux is a bunch of code & time wasting bullshit !!!
															// We'll just have to get the data directly from the Redux state !!!
															// I hereby just proved connect() is a piece of crap !!!
		this.showGenInfo1();								// That's why here we will use showGenInfo1() instead of showGenInfo() !!!
	}														// Compare the two on lines 90 and 112 above, for educational purposes !!!
	// ########### SO IF YOU WANT TO SEE REDUX CONNECT() DUMBNESS, REPLACE showGenInfo1 showInterests1 showContact1 BELOW
	// ########### WITH showGenInfo showInterests showContact !!! Then try to search an user ID of 1...10 and watch the browser console.
	render () {
		let tab1style = {backgroundColor: (this.state.page==='tab1')?'lightblue':'white'}
		let tab2style = {backgroundColor: (this.state.page==='tab2')?'lightblue':'white'}
		let tab3style = {backgroundColor: (this.state.page==='tab3')?'lightblue':'white'}
		return (
			<div id='profiles'>
				<h1>User Profiles</h1>
				<form onSubmit={this.lookupUser}><label>Look up user by ID#: </label><input id="userid" type="text" /></form>
				<nav id="p-tabs">							{/* Using showGenInfo1, showInterests1, showContact1 because Redux is a piece of crap! */}
					<button id='tab1' onClick={this.showGenInfo1} style={tab1style}>General Information</button>
					<button id='tab2' onClick={this.showInterests1} style={tab2style}>Activities</button>
					<button id='tab3' onClick={this.showContact1} style={tab3style}>Contact Information</button>
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

export default withRouter ( connect (
	mapStateToProps,
	{ selectCurrentUser, addNewUser }
) ( UserProfiles ) )
import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import HomePage from './components/TEST/HomePage';
import NewsFeed from './components/TEST/NewsFeed';
import Profiles from './components/profiles/Profiles';
import './App.css';
import Login from './components/homepage/login';
import Menu from './components/homepage/menu';
import Signup from './components/homepage/signup';

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
	public render() {
		return (
			<Grid centered>
				{/* <Router> */}
					<Grid.Row>
						<NavBar />
					</Grid.Row>
					<Grid.Row>
						<Switch>
							<Redirect exact from='/' to='/home' />
							<Route exact path='/home' component={HomePage} />
							<Route exact path='/newsfeed' component={NewsFeed} />
							<Route exact path='/profiles' component={Profiles} />
						</Switch>
					</Grid.Row>
				{/* </Router> */}
			</Grid>
		);
	}
}

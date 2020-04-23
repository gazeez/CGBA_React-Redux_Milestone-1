import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Route, Switch } from "react-router-dom";
import NavBar from './components/navbar/Navbar';
import Home from './components/home/Home';
import NewsFeed from './components/newsfeed/NewsFeed';
import Profiles from './components/profiles/Profiles';
import './App.css';

function App() {
	return (
		<Grid centered>
			<Grid.Row>
				<NavBar />
			</Grid.Row>
			<Grid.Row>
				<Switch>
					<Route path='/home' component={Home} />
					<Route path='/newsfeed' component={NewsFeed} />
					<Route path='/profiles' component={Profiles} />
				</Switch>
			</Grid.Row>
		</Grid>
	);
}

export default App;

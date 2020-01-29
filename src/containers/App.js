import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import { robots } from './robots';
// Put the line above back in to read straight from the JSON file
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';



// React props are one-way data flow (inputs)  that we can deconstruct {} on the other
// side - these are called pure functions (or dumb functions)

// We can also have STATES which are essentially APP memory
// STATE (parent) >> props (child)

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount()
	{
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response =>  response.json())
			.then(users => this.setState({robots: users}));
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}

	render() {
		const {robots, searchfield} = this.state;
			// event.target.value gives you the value of the search box
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})

		 return !robots.length ?
			 <h1>Loading</h1> :
			 (
					<div className = 'tc'>
						<h1 className = 'f1'> Robot Friends </h1>
						<SearchBox searchChange = { this.onSearchChange } />
						<Scroll>
							<ErrorBoundary>
								<CardList robots = { filteredRobots } />
							</ErrorBoundary>
						</Scroll>
					</div>
		);
		}	
}

export default App;
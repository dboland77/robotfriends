import React, { Component } from 'react';

class ErrorBoundary extends Component 
{
	constructor(props) 
	{
		super(props)
		this.state = 
			{
				hasError: false
			}
	}

	//The method below is called a lifecycle "hook"
	componentDidCatch(error, info) 
		{
			this.setState({ hasError: true })
		}

	render() 
		{
			if(this.state.hasError) 
				{
						return <h1> Oops. That is not good </h1>
				}

				return this.props.children
		}

}


export default ErrorBoundary;
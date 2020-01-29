import React from 'react';
import Card from './Card';


const CardList = ({ robots }) => 
{
	//Throw an error so we can test the Error Boundary we created
	//The Error boundary will kick in when we put the app in production
	//You can test this by hitting refresh or looking at the production build
	//In production you get the error boundary message rather than the low level
	//detail from the throw statement below

	//if(true) {
	//	throw new Error('NOOOOO!');
	//}
	return (
		<div>
			{
					robots.map((user,i) => 
						{
							return (
								<Card 
									key = {robots[i].id} 
									id = {robots[i].id} 
									name = {robots[i].name} 
									email = {robots[i].email}
								/>
						);
					})
				}
		</div>
	);
}

export default CardList;
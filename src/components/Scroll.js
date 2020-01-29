import React from 'react';

// we have props, state and children
// children is where a component "wraps around" like <Scroll> </Scroll>
const Scroll = (props) => {
	return (
			<div style = {{overflowY: 'scroll', border: '5px solid black', height: '1050px'}}>
				{props.children}
			</div>
		); 
};

export default Scroll;
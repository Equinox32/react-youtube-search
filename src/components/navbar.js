import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class SearchBar extends React.Component {
	render() {
		return (
			<div className="">
				<Navbar bg="dark" variant="dark">
					<Navbar.Brand href="#home">Youtube Search App</Navbar.Brand>
				</Navbar>
			</div>
		);
	}
}

export default SearchBar;

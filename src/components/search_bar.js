import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			term: ''
		};
	}
	onInputChange(term) {
		this.setState({
			term
		});
		this.props.onSearchTermSearch({
			term
		});
	}
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<Form className="form-horizontal">
							<FormControl
								type="text"
								placeholder="Search"
								className="form-control"
								value={this.state.term}
								onChange={event =>
									this.onInputChange(event.target.value)
								}
							/>
						</Form>
					</div>
				</div>
			</div>
		);
	}
}

export default SearchBar;

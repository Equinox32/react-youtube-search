import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { OverlayTrigger } from 'react-bootstrap';
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
	renderTooltip = props => (
		<div
			{...props}
			style={{
				backgroundColor: 'rgba(0, 0, 0, 0.85)',
				padding: '2px 10px',
				color: 'white',
				borderRadius: 3,
				...props.style
			}}
		>
			Go ahead and search for some YouTube videos! I'm having to use{' '}
			<a href="https://lodash.com/" target="_blank">
				Lodash
			</a>{' '}
			to <i>slow down</i> the search speed!
		</div>
	);

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col">
						<OverlayTrigger
							placement="right-start"
							delay={{ show: 250, hide: 250 }}
							trigger="click"
							defaultShow="true"
							overlay={this.renderTooltip}
						>
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
						</OverlayTrigger>
					</div>
				</div>
			</div>
		);
	}
}

export default SearchBar;

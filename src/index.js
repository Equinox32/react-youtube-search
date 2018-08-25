import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyDhC2esTZVGXLuIa-xW4pAZ3xtNfegogJE';

// const App = () => {
// 	return (
// 		<div>
// 			<SearchBar />
// 		</div>
// 	);
// };

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { videos: [] };

		YTSearch({ key: API_KEY, term: 'bmw' }, videos => {
			// ES6 syntax for this.setState({ videos: videos});
			this.setState({ videos });
		});
	}
	render() {
		return (
			<div>
				<SearchBar />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

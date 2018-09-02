import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import VideoList from './components/video_list';
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
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

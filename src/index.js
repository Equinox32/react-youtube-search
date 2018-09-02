import React from 'react';
import ReactDOM from 'react-dom';
import VideoList from './components/video_list';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'; // import Bootstrap CSS library
import './index.css'; // in addition, import our own CSS specs
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDhC2esTZVGXLuIa-xW4pAZ3xtNfegogJE';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { videos: [], selectedVideo: null };

		YTSearch({ key: API_KEY, term: 'bmw' }, videos => {
			// ES6 syntax for this.setState({ videos: videos});
			this.setState({ videos });
		});
	}
	render() {
		return (
			<div>
				<SearchBar />
				<div className="row">
					<VideoDetail video={this.state.videos[0]} />
					<VideoList videos={this.state.videos} />
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

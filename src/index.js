import React from 'react';
import ReactDOM from 'react-dom';
import VideoList from './components/video_list';
import 'bootstrap/dist/css/bootstrap.min.css'; // import Bootstrap CSS library
import './index.css'; // in addition, import our own CSS specs
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';
import _ from 'lodash';
require('dotenv').config();

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null
		};
		this.videoSearch('bmw M235i');
	}
	videoSearch(term) {
		YTSearch(
			{
				key: API_KEY,
				term: term
			},
			videos => {
				// ES6 syntax for this.setState({ videos: videos});
				this.setState({
					videos: videos,
					selectedVideo: videos[0]
				});
			}
		);
	}
	render() {
		const videoSearch = _.debounce(term => {
			this.videoSearch(term);
		}, 500);

		return (
			<div>
				<SearchBar onSearchTermSearch={videoSearch} />{' '}
				<div className="row">
					<VideoDetail video={this.state.selectedVideo} />{' '}
					<VideoList
						onVideoSelect={selectedVideo =>
							this.setState({
								selectedVideo
							})
						}
						videos={this.state.videos}
					/>{' '}
				</div>{' '}
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));

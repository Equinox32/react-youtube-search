import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyDhC2esTZVGXLuIa-xW4pAZ3xtNfegogJE';

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';

const VideoDetail = ({ video }) => {
	if (!video) {
		return <div>Loading...</div>;
	}

	const videoId = video.id.videoId;
	// ES6 syntax for
	// const url = 'https://www.youtube.com/embed/' + 'videoId';
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<div>
					<iframe
						className="embed-responsive-item"
						src={url}
						title={video.snippet.title}
					/>
				</div>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail;

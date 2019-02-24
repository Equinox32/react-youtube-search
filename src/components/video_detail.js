import React from 'react';
import moment from 'moment';

const VideoDetail = ({ video }) => {
	if (!video) {
		return <div>Loading...</div>;
	}

	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;
	const publishDate = video.snippet.publishedAt;

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
				<div>
					<small>
						{moment(publishDate).format('MMMM Do YYYY, h:mm:ss a')}
					</small>
				</div>
			</div>
		</div>
	);
};

export default VideoDetail;

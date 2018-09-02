import React from 'react';

const VideoListItem = ({ video }) => {
	const imageUrl = video.snippet.thumbnails.default.url;
	const title = video.snippet.title;

	return (
		<li className="list-group-item">
			<div className="video-list media">
				<div className="media-body">
					<div className="media-heading">{title}</div>
				</div>
				<img className="media-object" src={imageUrl} alt="" />
			</div>
		</li>
	);
};

export default VideoListItem;

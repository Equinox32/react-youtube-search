import React from 'react';
import moment from 'moment';

const VideoListItem = ({ video, onVideoSelect }) => {
	const imageUrl = video.snippet.thumbnails.default.url;
	const title = video.snippet.title;
	const publishDate = video.snippet.publishedAt;

	return (
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
			<div className="video-list media">
				<div className="media-body">
					<div className="media-heading">{title}</div>
					<div>
						<small>
							{moment(publishDate).format(
								'MMMM Do YYYY, h:mm:ss a'
							)}
						</small>
					</div>
				</div>
				<img className="media-object" src={imageUrl} alt="" />
			</div>
		</li>
	);
};

export default VideoListItem;

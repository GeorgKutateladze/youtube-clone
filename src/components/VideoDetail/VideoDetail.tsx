import React from 'react';
import './VideoDetail.css';

interface IProps {
    video: any;
}

const VideoDetail: React.FC<IProps> = ({video}) => {
    return (
        <div className="video-detail">
            <iframe title="youtube" frameBorder="0" width="600" height="450"
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}>
            </iframe>
            <h4 className="video-title">{video.snippet.title} - {video.snippet.channelTitle}</h4>
            <p className="video-channel">{video.snippet.channelTitle}</p>
            <p className="video-description">{video.snippet.description}</p>
        </div>
    );
};

export default VideoDetail;

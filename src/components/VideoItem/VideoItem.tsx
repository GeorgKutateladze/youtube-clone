import React from 'react';
import './VideoItem.css';
import {useDispatch} from "react-redux";
import {GetData} from "../../_store/actions/actions";

interface IProps {
    video: any;
}

const VideoItem: React.FC<IProps> = ({video}) => {

    const dispatch = useDispatch();

    const onClick = () => {
        dispatch({type: GetData.Pending, payload: video.snippet.title})
    };


    return (
        <div className="video-item" onClick={onClick}>
            <img className="video-image" width={200} src={video.snippet.thumbnails.medium.url} alt="thumbnail"/>
            <h4 className="video-title">{video.snippet.title}</h4>
        </div>
    );
};

export default VideoItem;

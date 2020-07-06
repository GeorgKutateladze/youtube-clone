import React from 'react';
import VideoItem from "../VideoItem/VideoItem";
import './VideoList.css';

interface IProps {
    list: any[];
}

const VideoList: React.FC<IProps> = ({list}) => {

    const listJSX = list.map((item: any) => {
        return <VideoItem key={item.id + Math.random()} video={item}/>
    });

    return (
        <div className="video-list" style={{display: "flex", flexDirection: "column"}}>
            {listJSX}
        </div>
    );
};

export default VideoList;

import React from 'react';
import { SearchBar, VideoDetail, VideoList } from "./components";
import './App.css';
import {useSelector} from "react-redux";
import {IStore} from "./_store";

const App = () => {

    const videos = useSelector((store: IStore) => store.data.collection.items);
    console.log(videos);
    return (
        <div className="App">
            <SearchBar/>
            <div className="container">
                {videos[0] && <VideoDetail video={videos[0]}/>}
                <VideoList list={videos}/>
            </div>
        </div>
    );
};

export default App;

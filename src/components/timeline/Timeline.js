import React from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "../timeline/Timeline.css";

const TimeLine =()=>{
    return (
        <div className="timeline">
            {/*Header*/}
            <div className="timeline--header">
                <h2>ホーム</h2>
            </div>
            {/*TweetBox*/}
            <TweetBox/>
            {/*Post*/}
            <Post/>
        </div>
    );
}
export default TimeLine;
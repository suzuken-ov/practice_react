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
            <Post
                displayName="プログラミングチュートリアル"
                userName="Shin_Enginner"
                verified={true}
                text="初めてのツイート"
                avatar="http://shincode.info/wp-content/uploads/2021/12/icon.png"
                image="https://source.unsplash.com/random"
            />
        </div>
    );
}
export default TimeLine;
import React from "react";
import "../timeline/Timeline.css";
import "../timeline/TweetBox.css";
import { Avatar, Button } from "@mui/material";

const TweetBox =()=>{
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox--input">
                    <Avatar/>
                    <input placeholder="いまどうしてる？" type={"text"}></input>
                </div>
                <input 
                    className="tweetBox--imageInput" 
                    placeholder="画像のURLを入力してください"
                    type={"text"}>
                </input>
                <Button className="tweetBox--tweetButton" type="submit">
                     ツイートする
                </Button>
            </form>
        </div>
    );
}
export default TweetBox;
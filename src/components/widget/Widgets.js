import { Search } from '@mui/icons-material'
import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import "./Widgets.css"

const Widgets=()=> {
  return (
    <div className="widgets">
        <div className="widgets--input">
            <Search className="widgets--searchIcon"/>
            <input placeholder="キーワード検索" type="text"/>
        </div>
        <div className="widgets--widgetContainer">
            <h2>いまどうしてる？</h2>
            <TwitterTweetEmbed tweetId={"1384131410349367300"}/>
            <TwitterTimelineEmbed 
                sourceType="profile"
                screenName="ZDGr79Wk34Lyiy5"
                options={{height:400}}
            />
            <TwitterShareButton 
                url="https://twitter.com/ZDGr79Wk34Lyiy5"
                options={{text:"#React.js勉強中",via:"ZDGr79Wk34Lyiy5"}}
            />
        </div>
    </div>
  );
}
export default Widgets;

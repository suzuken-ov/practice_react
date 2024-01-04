import React,{useState} from "react";
import "../timeline/Timeline.css";
import "../timeline/TweetBox.css";
import { Avatar, Button } from "@mui/material";
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import db from "../../firebase";

const TweetBox =()=>{

    const [tweetMessage,setTweetmessage]=useState("");
    const [tweetImage,setTweetImage]=useState("");
    
    const sendTweet = (e)=>{
        /* firebaseにテキストを送る */
        /*毎回読み込むのを防ぐ*/
        e.preventDefault();
        /*  dbに保存する*/
        addDoc(collection(db,"posts"),{
            displayName:"プログラミングチュートリアル",
            userName:"ShinEnginer",
            verified:true,
            text:tweetMessage,
            avatar:"http://shincode.info/wp-content/uploads/2021/12/icon.png",
            image:tweetImage,
            timestamp:serverTimestamp(),
        });
        /*入力欄からツイートボタン押下後に入力した文字を消す*/
        setTweetmessage("");
        setTweetImage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox--input">
                    <Avatar/>
                    <input 
                        value={tweetMessage}//テキスト消す
                        placeholder="いまどうしてる？"
                        type={"text"}
                        onChange={(e)=>setTweetmessage(e.target.value)}>
                    </input>
                </div>
                <input 
                    value={tweetImage}//テキスト消す
                    className="tweetBox--imageInput" 
                    placeholder="画像のURLを入力してください"
                    type={"text"}
                    onChange={(e)=>setTweetImage(e.target.value)}>
                </input>
                <Button 
                    className="tweetBox--tweetButton"
                    type="submit"
                    onClick={sendTweet}
                >
                     ツイートする
                </Button>
            </form>
        </div>
    );
}
export default TweetBox;
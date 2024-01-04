import React, { useEffect, useState } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "../../firebase";
import { collection, getDocs, query, orderBy, onSnapshot } from "firebase/firestore"; 
import "../timeline/Timeline.css";
import FlipMove from 'react-flip-move';


const TimeLine =()=>{

    const [posts,setPosts]=useState([]);

    useEffect(()=>{
        const postData = collection(db,"posts");
        const querySortData = query(postData,orderBy("timestamp","desc"));/* dbの値をtimestampのdescでsort*/
        // getDocs(querySortData).then((querySnapshot)=>{
        //     setPosts(querySnapshot.docs.map((doc)=>doc.data()));
        // })
        /*リアルタイムでデータを取得*/
        onSnapshot(querySortData,(querySnapshot)=>{
            setPosts(querySnapshot.docs.map((doc)=>doc.data()))
        })
    },[]);
    
    return (
        <div className="timeline">
            {/*Header*/}
            <div className="timeline--header">
                <h2>ホーム</h2>
            </div>
            {/*TweetBox*/}
            <TweetBox/>
            {/*Post*/}
            <FlipMove>
                {posts.map((post)=>(
                    <Post
                        key={post.text}//ユニークキーとしてはUUIDなど一意が望ましい暫定対応
                        displayName={post.displayName}
                        userName={post.userName}
                        verified={post.verified}
                        text={post.text}
                        avatar={post.avatar}
                        image={post.image}
                    />
                ))}
            </FlipMove>
        </div>
    );
}
export default TimeLine;
import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import db from "./firebase";
import FlipMove from "react-flip-move";


function Feed() {
  const [posts, setPosts] = useState([]);
 
  
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <>
      <TweetBox />
      </>
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            verified={post.verified}
            text={post.text}
            user={post.user}
            image={post.image}
          />
        ))}
      </FlipMove>
      
    </div>
    // flipMove pour l annimation 
  );
}

export default Feed;

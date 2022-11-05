import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db, { auth } from "./firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";


function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const user =useSelector(selectUser);
  
  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      user:user
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar onClick={()=>{auth.signOut()}} src={user.photo} />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage} // hade ghir khsna dima ndero l value ach ktsawi ms mhm mknkhdmoch biha
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;

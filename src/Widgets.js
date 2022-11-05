import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1443402537206419460"} />
        <TwitterTweetEmbed tweetId={"1443774194827862023"} />    
        <TwitterTweetEmbed tweetId={"1444678730748764167"} /> 
        <TwitterTweetEmbed tweetId={"1443913637777784841"} />
        <TwitterTweetEmbed tweetId={"1439090465698041861"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="medi1tv"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />
      </div>

    </div>
    //shows a specific tweet that has this id.
    //that shows the latest Tweets on qazi's account ?
    //share a post on twitter?
  );
}

export default Widgets;

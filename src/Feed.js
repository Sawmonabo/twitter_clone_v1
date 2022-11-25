import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
// import db from "./firebase";

function Feed() {

  var post = {
    displayName : "Jay Irey",
    username : "canIgetAHooyah",
    verified : true,
    text : "I love big booty hoes",
    avatar : null,
    image : null
  }

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <Post
        displayName={post.displayName}
        username={post.username}
        verified={post.verified}
        text={post.text}
        avatar={post.avatar}
        image={post.image}
      />
    </div>
  );
}

export default Feed;

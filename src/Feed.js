import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
// [1] note, the below will break the app
//import { username } from "../.wundergraph/wundergraph.server.ts";

function Feed() {

  var posts = [{
    displayName : "Jay Irey",
    username : "canIgetAHooyah",
    verified : true,
    text : "I love big booty hoes",
    avatar : null,
    image : null
  }];

  // [1]
  //console.log(username); 

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      {posts.map((post) => (
        <Post
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default Feed;

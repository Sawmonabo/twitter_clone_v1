import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import { useQuery } from './lib/wundergraph';

function Feed() {
  const [tweets, setTweets] = useState([]);

  const posts = [{
    displayName : "Jay Irey",
    username : "canIgetAHooyah",
    verified : true,
    text : "I love big booty hoes",
    avatar : null,
    image : null
  }];

  const { data, error, isValidating, isLoading, mutate } = useQuery({
    operationName: 'Tweets',
    enabled: true,
  });

  useEffect(() => {
    console.log(`tweets = ${tweets}`);
  });

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      {data?.tweets_findManytweets?.map((post) => (
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

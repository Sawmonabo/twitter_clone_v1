import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import { useQuery } from './lib/wundergraph';

function Feed() {
  const tweets = useQuery({
    operationName: 'Tweets',
    liveQuery: true,
		requiresAuthentication: true,
  });

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox/>
      {tweets.data?.tweets_findManytweets?.map((tweet) => (
        <Post
          displayName={tweet.displayName}
          username={tweet.username}
          verified={tweet.verified}
          text={tweet.text}
          avatar={tweet.avatar}
          image={tweet.image}
          key={tweet.id}
        />
      ))}
    </div>
  );
}

export default Feed;

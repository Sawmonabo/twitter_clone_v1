import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
// import db from "./firebase";
import "./TweetBox.css";
// import TwiiterLogo from './twitter_clone_logo.svg';
import { useMutation } from './lib/wundergraph';


function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = () => {
    console.log(tweetMessage);
    trigger({ data : {
        displayName: "Jay Patel",
        username: "happystark",
        verified: true,
        text: tweetMessage,
        avatar: null,
        image: null,
        date: "2099-03-01T08:00:00Z"
      }
    });
    // e.preventDefault();

    setTweetMessage("");
    setTweetImage("");
  };

  const { trigger } = useMutation({
      operationName: 'AddTweet',
      requiresAuthentication: false
  });

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="./twitter_clone_logo.svg" />
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          placeholder="Optional: Enter image URL"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          type="text"
          className="tweetBox__imageInput"
        />
        <Button onClick={sendTweet} type="submit" className="tweetBox__button">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;

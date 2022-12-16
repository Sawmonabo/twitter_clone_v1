import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import "./TweetBox.css";
// import TwiiterLogo from './twitter_clone_logo.svg';
import { useMutation } from './lib/wundergraph';
import {userContext} from './user';


function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const { trigger } = useMutation({
      operationName: 'AddTweet',
      requiresAuthentication: false
  });

  const user = React.useContext(userContext);  

  const sendTweet = () => {
    if (tweetMessage != "")
    {
      trigger({ data : {
          displayName: user.firstName,
          username: user.firstName + "_" + user.lastName,
          verified: true,
          text: tweetMessage,
          avatar: null,
          image: null,
          date: new Date()
        }
      });
    }

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <div className="tweetBox__input">
        <Avatar src="./twitter_clone_logo.svg" />
        <input
          value={tweetMessage}
          onChange={(textFieldContents) => setTweetMessage(textFieldContents.target.value)}
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
    </div>
  );
}

export default TweetBox;

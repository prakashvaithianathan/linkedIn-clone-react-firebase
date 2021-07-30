import React, { useState, useEffect } from "react";
import style from "./Feed.module.css";
import Upload from "./upload/Upload";
import { db } from "../../../../firebase/firebase";
import Post from "./post/Post";

const Feed = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapShot) => {
        setPost(
          snapShot.docs.map((doc) => {
            return {
              id: doc.id,
              data: doc.data(),
            };
          })
        );
      });
  }, []);

  return (
    <div className={style.feed}>
      <Upload></Upload>
      {post.map((post) => {
        return (
          <Post
            key={post.id}
            profilePic={post.data.profile}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
          ></Post>
        );
      })}
    </div>
  );
};

export default Feed;

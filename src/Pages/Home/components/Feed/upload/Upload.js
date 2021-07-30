import React, { useEffect, useState } from "react";
import style from "./Upload.module.css";
import { useSelector } from "react-redux";
import { Photo, YouTube, Event, Description } from "@material-ui/icons";
import { db, timestamp, storage } from "../../../../../firebase/firebase";
import { LinearProgress } from "@material-ui/core";

const Upload = () => {
  const {user} = useSelector((state) => state.user);
  const [input, setInput] = useState("");
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);

  const sendFile = (e) => {
    e.preventDefault();
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapShot) => {
        const progress =
          Math.round(snapShot.bytesTransferred / snapShot.totalBytes) * 100;
        setProgress(progress);
      },
      (err) => {
        console.log(err);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) =>
            db.collection("posts").add({
              message: input,
              timestamp,
              profile: user.photoURL,
              username: user.displayName,
              image: url,
            })
          )
          .catch((err) => console.log(err));
        setProgress(0);
        setInput("");
        setImage("");
      }
    );
  };

  return (
    <form>
      <div className={style.uploadBox}>
        <div className={style.uploadContainer}>
          <img src={user.photoURL} alt="logo" />

          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="Start a post"
          />
        </div>
       
          {progress > 0 && (
            <LinearProgress
              variant="determinate"
              value={progress}
              className={style.progress}
            ></LinearProgress>
          )}
        

        <div className={style.options}>
          <div className={style.photoBox}>
            <input
              type="file"
              id="file"
              accept="image/*"
              className={style.file}
              onChange={(e) => setImage(e.target.files[0])}
            />

            <label htmlFor="file" className={style.photoBox}>
              <Photo></Photo>
              <p>Photo</p>
            </label>
          </div>
          <div className={style.videoBox}>
            <YouTube></YouTube>
            <p>Video</p>
          </div>
          <div className={style.eventBox}>
            <Event></Event>
            <p>Event</p>
          </div>
          <div className={style.descBox}>
            <Description></Description>
            <p>Article</p>
          </div>
        </div>
      </div>
      <button onClick={sendFile} type="submit" className={style.submit}>
        Submit
      </button>
    </form>
  );
};

export default Upload;

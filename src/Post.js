import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';



function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>Name</h2>
          <p>Description</p>
        </div>
      </div>

      <div className="post__body">
        <p>Message goes here</p>
      </div>

      <div className="post__buttons">
       <InputOption />
      </div>

    </div>
  );
}

export default Post;

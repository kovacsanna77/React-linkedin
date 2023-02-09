import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import InputOption from "./InputOption.js"
import { CommentOutlined, SendOutlined, ShareOutlined } from "@mui/icons-material";


function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpOffAltIcon} title ="Like" color='gray'/>
        <InputOption Icon={CommentOutlined} title ="Comment" color='gray'/>
        <InputOption Icon={ShareOutlined} title ="Share" color='gray'/>
        <InputOption Icon={SendOutlined} title ="Send" color='gray'/>
      </div>

    </div>
  );
}

export default Post;

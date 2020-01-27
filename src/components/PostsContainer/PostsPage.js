//Complete the necessary code in this file
import React from "react";

import Post from "./Post";
import "./Posts.css";

const PostsPage = props => {
  console.log("the props", props);
  return (
    <div className="posts-container-wrapper">
      {props.postData.map(post => (
        <Post
          key={post.imageUrl}
          data={post}
        />
      ))}
    </div>
  );
};

export default PostsPage;



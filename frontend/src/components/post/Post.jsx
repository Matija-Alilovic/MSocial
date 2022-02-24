import React from 'react';

import { useState, useEffect, useContext } from 'react';

import './post.css';
import {
  MoreHorizOutlined,
  FavoriteBorderOutlined,
  CommentOutlined,
  ShareOutlined,
} from '@material-ui/icons';

import axios from 'axios';
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const {user:currentUser} = useContext(AuthContext)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  
  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);

      setUser(res.data);
    };

    fetchUser();
  }, [post.userId]);

  function likeHandler() {
    try {
      axios.put("/posts/" + post._id + "/like", {userId: currentUser._id});
    } catch (error) {
      
    }

    if (!isLiked) {
      setLike((prevState) => prevState + 1);
      setIsLiked(true);
    } else {
      setLike((prevState) => prevState - 1);
      setIsLiked(false);
    }
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={user.profilePicture ? PF + user.profilePicture : PF + 'people/no-avatar.jpg'}
                alt=""
                srcset=""
              />
            </Link>

            <div className="postTextUpper">
              <span className="postUsername">{user.username}</span>
              <span className="postDate">{format(post.createdAt)}</span>
            </div>
          </div>
          <div className="postTopRight">
            <MoreHorizOutlined />
          </div>
        </div>
        <span className="postText">{post?.desc}</span>
        <div className="postCenter">
          <div className="postImg">
            <img src={PF + post.img} alt="" srcSet="" />
          </div>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postComment">{post.comment} comments</span>
            <span className="postComment">5 shares</span>
          </div>
        </div>
        <hr />
        <div className="postLikeCommShare">
          <div onClick={likeHandler}>
            <FavoriteBorderOutlined className="likeIcon" />
            <span>Like</span>
          </div>
          <div>
            <CommentOutlined className="likeIcon" />
            <span>Comment</span>
          </div>
          <div>
            <ShareOutlined className="likeIcon" />
            <span>Share</span>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Post;

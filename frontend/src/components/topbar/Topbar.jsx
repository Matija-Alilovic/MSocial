import React,{ useContext } from 'react';
import './topbar.css';
import {
  SearchOutlined,
  PersonOutlined,
  ChatOutlined,
  NotificationsOutlined,
} from '@material-ui/icons';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function Topbar() {
  const {user} = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="topbarContainer active">
      <div className="topbarLeft">
        <Link to="/" style={{textDecoration: "none"}}>
          <span className="logo">MatkoSocial</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchOutlined className="searchIcon" />
          <input
            placeholder="Search for something here..."
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonOutlined></PersonOutlined>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <ChatOutlined></ChatOutlined>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsOutlined></NotificationsOutlined>
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link style={{textDecoration: "none"}} to={`/profile/${user.username}`}> 
          <div className="imgContainer">
            <span>{user.username}</span>
            <img src={user.profilePicture ? PF + user.  profilePicture : PF + "people/no-avatar.jpg"}   alt="" className="topbarImg" />
          </div>
        </Link>
       
      </div>
    </div>
  );
}

export default Topbar;

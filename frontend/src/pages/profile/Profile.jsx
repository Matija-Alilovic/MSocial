import './profile.css';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import {
  PersonOutlineOutlined,
  CakeOutlined,
  LocationCityOutlined,
  WebAssetOutlined,
} from '@material-ui/icons';

function UserInfo({ user }) {
  return (
    <div className="rightbar">
      <div className="userInfoWrapper">
        <h2>About</h2>
        <ul>
          <li>
            <PersonOutlineOutlined /> Male
          </li>
          <li>
            <WebAssetOutlined /> eke.com
          </li>
          <li>
            <CakeOutlined /> {user.from}
          </li>
          <li>
            <LocationCityOutlined /> {user.city}
          </li>
          <li>54 000 followers</li>
        </ul>
      </div>
    </div>
  );
}

function Profile() {
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);

      setUser(res.data);
    };

    fetchUser();
  }, [username]);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={user.coverPicture || PF + 'cover.jpg'}
                alt=""
              />
              <img
                className="profileUserImg"
                src={user.profilePicture || PF + 'people/no-avatar.jpg'}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <UserInfo user={user} />
            <Feed username={username} />
            <Rightbar></Rightbar>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;

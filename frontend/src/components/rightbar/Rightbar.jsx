import './rightbar.css';
import { MoreHorizOutlined, SearchOutlined } from '@material-ui/icons';
import { Users } from '../../dummyData';

import Online from '../online/Online';

function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="searchbar">
          <SearchOutlined className="searchIcon" />
          <input placeholder="Search friends..." className="searchInput" />
        </div>
        <div className="rightbarTop">
          <h4 className="rightbarTitle">Friends</h4>
          <MoreHorizOutlined />
        </div>
        <ul className="rightbarFriendList">
          {Users.map((user) => {
            return <Online key={user.id} user={user} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Rightbar;

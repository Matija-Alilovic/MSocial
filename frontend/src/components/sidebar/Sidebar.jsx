import './sidebar.css';
import {
  RssFeedOutlined,
  PeopleAltOutlined,
  MessageOutlined,
  NotificationsOutlined,
  ExploreOutlined,
  PersonOutlineOutlined,
  SettingsOutlined,
  ArrowBackOutlined,
} from '@material-ui/icons';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeedOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <PeopleAltOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">My Community</span>
          </li>
          <li className="sidebarListItem">
            <MessageOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Messages</span>
          </li>
          <li className="sidebarListItem">
            <NotificationsOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Notification</span>
          </li>
          <li className="sidebarListItem">
            <ExploreOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Explore</span>
          </li>
          <li className="sidebarListItem">
            <PersonOutlineOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Profile</span>
          </li>
          <li className="sidebarListItem">
            <SettingsOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Settings</span>
          </li>
          <li className="sidebarListItem">
            <ArrowBackOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Log out</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

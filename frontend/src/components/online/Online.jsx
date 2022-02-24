import './online.css';

function Online({ user }) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img
          className="rightbarProfileImg"
          src="assets/people/1.jpg"
          alt=""
          srcset=""
        />
        <span className="rightbarUsername">{user.username}</span>
      </div>
      <span className="rightbarOnline"></span>
    </li>
  );
}

export default Online;

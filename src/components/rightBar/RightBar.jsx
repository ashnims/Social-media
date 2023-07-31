import "./rightbar.css";

function RightBar() {
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        <div className="birthdayContainer">
          <img src="" alt="birthday-Person" className="birthadayImg" />
          <span className="birthdayText">
            <b>Krupal Tasare</b> and <b>3 other friends</b> have a birthday
            today
          </span>
        </div>
        <img src="" alt="AD" className="rightBarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightBarFriendList">
          <li className="rightbarFriend">
            <div className="rightBarProfileImgContainer">
              <img src="" alt="" className="rightBarProfileImg" />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUsername">John Carter</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightBarProfileImgContainer">
              <img src="" alt="" className="rightBarProfileImg" />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUsername">John Carter</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightBarProfileImgContainer">
              <img src="" alt="" className="rightBarProfileImg" />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUsername">John Carter</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RightBar;

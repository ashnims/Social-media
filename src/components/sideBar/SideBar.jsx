import {
  Chat,
  Event,
  HelpOutline,
  PlayArrowRounded,
  RssFeed,
  School,
  WorkOutline,
} from "@mui/icons-material";
import "./sideBar.css";

function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <RssFeed className="sideBarIcon" />
            <spam className="sideBarListIconText">Feed</spam>
          </li>
          <li className="sideBarListItem">
            <Chat className="sideBarIcon" />
            <spam className="sideBarListIconText">Chat</spam>
          </li>
          <li className="sideBarListItem">
            <PlayArrowRounded className="sideBarIcon" />
            <spam className="sideBarListIconText">Videos</spam>
          </li>
          <li className="sideBarListItem">
            <RssFeed className="sideBarIcon" />
            <spam className="sideBarListIconText">Bookmarks</spam>
          </li>
          <li className="sideBarListItem">
            <HelpOutline className="sideBarIcon" />
            <spam className="sideBarListIconText">Question</spam>
          </li>
          <li className="sideBarListItem">
            <WorkOutline className="sideBarIcon" />
            <spam className="sideBarListIconText">Jobs</spam>
          </li>
          <li className="sideBarListItem">
            <Event className="sideBarIcon" />
            <spam className="sideBarListIconText">Events</spam>
          </li>
          <li className="sideBarListItem">
            <School className="sideBarIcon" />
            <spam className="sideBarListIconText">Courses</spam>
          </li>
        </ul>
        <button className="sideBarButton">Show More</button>
        <hr className="sideBarHr" />
        <ul className="sideBarFriendslist">
          <li className="sideBarFriends">
            <img src="" alt="" className="sideBarFriendImg" />
            <span className="sideBarFriendname">Zooro Yine</span>
          </li>
          <li className="sideBarFriends">
            <img src="" alt="" className="sideBarFriendImg" />
            <span className="sideBarFriendname">Zooro Yine</span>
          </li>
          <li className="sideBarFriends">
            <img src="" alt="" className="sideBarFriendImg" />
            <span className="sideBarFriendname">Zooro Yine</span>
          </li>
          <li className="sideBarFriends">
            <img src="" alt="" className="sideBarFriendImg" />
            <span className="sideBarFriendname">Zooro Yine</span>
          </li>
          <li className="sideBarFriends">
            <img src="" alt="" className="sideBarFriendImg" />
            <span className="sideBarFriendname">Zooro Yine</span>
          </li>
          <li className="sideBarFriends">
            <img src="" alt="" className="sideBarFriendImg" />
            <span className="sideBarFriendname">Zooro Yine</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;

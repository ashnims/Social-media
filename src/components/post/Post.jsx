import { MoreVert } from "@mui/icons-material";
import boy from "../assets/anime-boy.jpg";
import girl from "../assets/anime-girl-sunset.jpg";

import "./post.css";

function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={boy} alt="" className="postProfileImg" />
            <span className="postUserName">Vedant Gawande</span>
            <spam className="postDate">5 min ago</spam>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText"> Hey@! it's</span>
          <img src={girl} alt=" its me" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="" alt="" className="likeIcon" />
            <img src="" alt="" className="likeIcon" />
            <span className="postLikeCounter">32 likes</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;

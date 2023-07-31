import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";

function Feeds() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default Feeds;

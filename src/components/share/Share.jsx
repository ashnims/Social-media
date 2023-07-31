import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material";
import "./share.css";

function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="" alt="" className="shareprofileImg" />
          <input
            placeholder="what is in your mind Shark ?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareoptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <spam className="shareOptionText">Photo & Video</spam>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <spam className="shareOptionText">Tag</spam>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <spam className="shareOptionText">Location</spam>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <spam className="shareOptionText">Feeling</spam>
            </div>
          </div>
          <button className="shareBtn">Share</button>
        </div>
      </div>
    </div>
  );
}

export default Share;

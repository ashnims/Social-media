import "./home.css";
import Topbar from "../components/topbar/Topbar";
import RightBar from "../components/rightBar/RightBar";
import SideBar from "../components/sideBar/SideBar";
import Feeds from "../components/feed/Feeds";

function Home() {
  return (
    <div>
      <Topbar />
      <div className="homeContainer">
        <SideBar />
        <Feeds />
        <RightBar />
      </div>{" "}
    </div>
  );
}

export default Home;

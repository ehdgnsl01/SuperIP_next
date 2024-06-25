import { FaChevronRight } from "react-icons/fa";
import Header from "./Header";
import CreateStory from "./Card/CreateStory_Card";
import PredictHit from "./Card/PredictHit_Card";
import StoryArchive from "./Card/StoryArchive_Card";
import Recommend from "./Card/Recommend_Card";
import Navbar from "./Navbar";
import "../Layout/Main.css";

export default function Home() {
  return (
    <div className="main-page">
      <Header />
      <div className="title-wrapper">
        <div className="circle-icon"></div>
        <div className="title">
          <h1>Create Story</h1>
          <Navbar />
        </div>
        <FaChevronRight className="nav-arrow" />
      </div>
      <div className="card-container">
        <CreateStory />
        <PredictHit />
        <StoryArchive />
        <Recommend />
      </div>
    </div>
  );
}

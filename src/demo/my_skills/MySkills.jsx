import GraphicDesign from "../graphic_design/GraphicDesign";
import Server from "../server/Server";
import VideoEditing from "../video_editing/VideoEditing";
import WebDevelopment from "../web_development/WebDevelopment";

const MySkills = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="section my_skills" id="skills">
            <WebDevelopment />
            <Server />
            <GraphicDesign />
            <VideoEditing />
          </div>
        </div>
      </div>
    </>
  );
};
export default MySkills;

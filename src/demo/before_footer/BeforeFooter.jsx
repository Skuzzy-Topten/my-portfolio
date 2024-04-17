import ContactMe from "../contact_me/ContactMe";
import Experience from "../experience/Experience";
import Qualification from "../qualification/Qualification";
import SocialMedia from "../social_media/SocialMedia";

const BeforeFooter = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="flex flex-wrap">
            <Qualification />
            <Experience />
            <ContactMe />
            <SocialMedia />
          </div>
        </div>
      </div>
    </>
  );
};
export default BeforeFooter;

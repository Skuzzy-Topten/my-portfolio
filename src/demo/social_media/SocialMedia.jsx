import { Button } from "@/components/ui/button";
import SocialLinksData from "./SocialLinksData";
const SocialMedia = () => {
  return (
    <>
      <div className="section social_media">
        <div className="section contact_me title">Social Media</div>
        <div className="contact_me social_media_links">
          {SocialLinksData.map((SocialLinkData) => (
            <a
              key={SocialLinkData.social_link_id}
              href={SocialLinkData.link}
              target="_blank"
            >
              <Button className="contact-me social_media btn">
                {SocialLinkData.icon}
              </Button>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
export default SocialMedia;

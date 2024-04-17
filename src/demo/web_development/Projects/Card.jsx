import { CarouselItem } from "@/components/ui/carousel";
import WebProjectsData from "./WebProjectsData";
const WebProjectsCard = () => {
  return (
    <>
      {WebProjectsData.map((WebProjectData) => (
        <CarouselItem
          key={WebProjectData.project_id}
          className="xl:basis-1/5 lg:basis-1/4 md:basis-1/2 sm:basis-1/2"
        >
          <div className="web_projects card">
            <p className="web_projects number">{WebProjectData.project_id}</p>
            <h3 className="web_projects name">{WebProjectData.name}</h3>
            <h3 className="web_projects type">{WebProjectData.type}</h3>
            <h5 className="web_projects language">{WebProjectData.language}</h5>
            <a href={WebProjectData.link} target="_blank">
              <button className="web_projects btn_link">
                {WebProjectData.buttonText}
              </button>
            </a>
          </div>
        </CarouselItem>
      ))}
    </>
  );
};
export default WebProjectsCard;

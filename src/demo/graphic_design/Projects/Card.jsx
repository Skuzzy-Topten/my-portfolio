import { CarouselItem } from "@/components/ui/carousel";
import GraphicDesignProjectsData_FEB_2024 from "./FEB/GraphicDesignProjectsData";
import GraphicDesignProjectsData_MAR_2024 from "./MAR/GraphicDesignProjectsData";
import GraphicDesignProjectsData_APR_2024 from "./APR/GraphicDesignProjectsData";
import GraphicDesignProjectsData_MAY_2024 from "./MAY/GraphicDesignProjectsData";
const GraphicDesignCard = () => {
  return (
    <>
      {GraphicDesignProjectsData_MAY_2024.map((MAY_2024) => (
        <CarouselItem
          key={MAY_2024.project_id}
          className="xl:basis-1/5 lg:basis-1/4 md:basis-1/3 sm:basis-1/2"
        >
          <div className="graphic_design_projects card">
            <div>
              <img
                src={MAY_2024.image}
                alt={MAY_2024.alt}
                className="graphic_design_projects img"
              />
            </div>
            <h3 className="graphic_design_projects name">{MAY_2024.name}</h3>
            <p className="graphic_design_projects campaign">
              {MAY_2024.campaign}
            </p>
          </div>
        </CarouselItem>
      ))}
      {GraphicDesignProjectsData_APR_2024.map((APR_2024) => (
        <CarouselItem
          key={APR_2024.project_id}
          className="xl:basis-1/5 lg:basis-1/4 md:basis-1/3 sm:basis-1/2"
        >
          <div className="graphic_design_projects card">
            <div>
              <img
                src={APR_2024.image}
                alt={APR_2024.alt}
                className="graphic_design_projects img"
              />
            </div>
            <h3 className="graphic_design_projects name">{APR_2024.name}</h3>
            <p className="graphic_design_projects campaign">
              {APR_2024.campaign}
            </p>
          </div>
        </CarouselItem>
      ))}
      {GraphicDesignProjectsData_MAR_2024.map((MAR_2024) => (
        <CarouselItem
          key={MAR_2024.project_id}
          className="xl:basis-1/5 lg:basis-1/4 md:basis-1/3 sm:basis-1/2"
        >
          <div className="graphic_design_projects card">
            <div>
              <img
                src={MAR_2024.image}
                alt={MAR_2024.alt}
                className="graphic_design_projects img"
              />
            </div>
            <h3 className="graphic_design_projects name">{MAR_2024.name}</h3>
            <p className="graphic_design_projects campaign">
              {MAR_2024.campaign}
            </p>
          </div>
        </CarouselItem>
      ))}
      {GraphicDesignProjectsData_FEB_2024.map((FEB_2024) => (
        <CarouselItem
          key={FEB_2024.project_id}
          className="xl:basis-1/5 lg:basis-1/4 md:basis-1/3 sm:basis-1/2"
        >
          <div className="graphic_design_projects card">
            <div>
              <img
                src={FEB_2024.image}
                alt={FEB_2024.alt}
                className="graphic_design_projects img"
              />
            </div>
            <h3 className="graphic_design_projects name">{FEB_2024.name}</h3>
            <p className="graphic_design_projects campaign">
              {FEB_2024.campaign}
            </p>
          </div>
        </CarouselItem>
      ))}
    </>
  );
};
export default GraphicDesignCard;

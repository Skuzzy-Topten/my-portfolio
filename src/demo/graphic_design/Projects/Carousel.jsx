import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import GrphicDesignCard from "./Card";
const GraphicDesignProjectsCarousel = () => {
  return (
    <>
      <div className="section graphic_design_projects">
        <h2 className="section graphic_design_projects title">
          Graphic Design Projects
        </h2>
        <p className="section graphic_design_projects paragraph">
          I've successfully designed and created over 40 graphic design projects
          using my variety of design softwares.
        </p>
        <Carousel className="graphic_design_projects carousel">
          <CarouselContent>
            <GrphicDesignCard />
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};
export default GraphicDesignProjectsCarousel;

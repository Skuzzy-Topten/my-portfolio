import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import WebProjectsCard from "./Card";
const WebDevelopmentProjectsCarousel = () => {
  return (
    <>
      <div className="section web_projects">
        <h2 className="section web_projects title">Web Projects</h2>
        <p className="section web_projects paragraph">
          I've successfully developed and maintained over 50 web projects using
          my variety of technologies.
        </p>
        <Carousel className="web_projects carousel">
          <CarouselContent>
            <WebProjectsCard />
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};
export default WebDevelopmentProjectsCarousel;

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Card from "./Card";
const WebDevelopmentCarousel = () => {
  return (
    <>
      <div className="section web_development">
        <h2 className="section web_development title">Web Development</h2>
        <div className="web_development carousel">
          <Carousel
            opts={{
              align: "start",
              peek: 0,
            }}
            orientation="vertical"
            className="w-full"
          >
            <CarouselContent className="web_development carousel_content">
              <Card />
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  );
};
export default WebDevelopmentCarousel;

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Card from "./Card";
const ServerCarousel = () => {
  return (
    <>
      <div className="section server">
        <h2 className="section server title">Server</h2>
        <div className="server carousel">
          <Carousel
            opts={{
              align: "start",
              peek: 0,
            }}
            orientation="vertical"
            className="w-full"
          >
            <CarouselContent className="server carousel_content">
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
export default ServerCarousel;

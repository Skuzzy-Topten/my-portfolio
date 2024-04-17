import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Card from "./Card";
const GraphicDesignCarousel = () => {
  return (
    <>
      <div className="section graphic_design">
        <h2 className="section graphic_design title">Graphic Design</h2>
        <div className="graphic_design carousel">
          <Carousel
            opts={{
              align: "start",
              peek: 0,
            }}
            orientation="vertical"
            className="w-full"
          >
            <CarouselContent className="graphic_design carousel_content">
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
export default GraphicDesignCarousel;

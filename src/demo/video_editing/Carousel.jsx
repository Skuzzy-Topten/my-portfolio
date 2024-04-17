import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Card from "./Card";
const VideoEditingCarousel = () => {
  return (
    <>
      <div className="section video_editing">
        <h2 className="section video_editing title">Video Editing</h2>
        <div className="video_editing carousel">
          <Carousel
            opts={{
              align: "start",
              peek: 0,
            }}
            orientation="vertical"
            className="w-full"
          >
            <CarouselContent className="video_editing carousel_content">
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
export default VideoEditingCarousel;

import { CarouselItem } from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Data from "./Data";
const Card = () => {
  return (
    <>
      {Data.map((language) => (
        <CarouselItem
          key={language.id}
          className="xl:basis-1/5 lg:basis-1/4 md:basis-1/3 sm:basis-1/2"
        >
          <div className="server card">
            <img
              src={language.image}
              alt={language.alt}
              className="server logo"
            />
            <h3 className="server name">{language.name}</h3>
            <h5 className="server type">{language.type}</h5>
          </div>
        </CarouselItem>
      ))}
    </>
  );
};
export default Card;

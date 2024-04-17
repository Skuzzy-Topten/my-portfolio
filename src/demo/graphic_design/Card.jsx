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
          <div className="graphic_design card">
            <img
              src={language.logo && language.logo.image}
              alt={language.logo && language.logo.alt}
              className="graphic_design logo"
            />
            <h3 className="graphic_design name">{language.name}</h3>
            <h5 className="graphic_design type">{language.type}</h5>
            <Accordion type="single" collapsible>
              {language.course && language.course.length > 0 && (
                <AccordionItem value="item-1">
                  <AccordionTrigger className="graphic_design course_lists title">
                    Courses
                  </AccordionTrigger>
                  <AccordionContent>
                    <ol className="graphic_design course_lists">
                      {language.course &&
                        language.course.map((Course) => (
                          <li key={`${language.id}-${Course.course_id}`}>
                            {Course.title}
                          </li>
                        ))}
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              )}
              {language.website && language.website.length > 0 && (
                <AccordionItem value="item-2">
                  <AccordionTrigger className="graphic_design course_lists title">
                    Websites
                  </AccordionTrigger>
                  <AccordionContent>
                    <ol className="graphic_design course_lists">
                      {language.website &&
                        language.website.map((Website) => (
                          <li key={`${language.id}-${Website.website_id}`}>
                            {Website.name}
                          </li>
                        ))}
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              )}
              {language.certificate && language.certificate.length > 0 && (
                <AccordionItem value="item-3">
                  <AccordionTrigger className="graphic_design course_lists title">
                    Certificates
                  </AccordionTrigger>
                  <AccordionContent>
                    <ol className="graphic_design course_lists">
                      {language.certificate &&
                        language.certificate.map((Certificate) => (
                          <li
                            key={`${language.id}-${Certificate.certificate_id}`}
                          >
                            <a href={Certificate.link} target="_blank">
                              {Certificate.website}
                            </a>
                          </li>
                        ))}
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              )}
              {language.project && language.project.length > 0 && (
                <AccordionItem value="item-4">
                  <AccordionTrigger className="graphic_design course_lists title">
                    Projects
                  </AccordionTrigger>
                  <AccordionContent>
                    <ol className="graphic_design course_lists">
                      {language.project &&
                        language.project.map((Project) => (
                          <li key={`${language.id}-${Project.project_id}`}>
                            <a href={Project.link} target="_blank">
                              {Project.name}
                            </a>
                          </li>
                        ))}
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              )}
            </Accordion>
          </div>
        </CarouselItem>
      ))}
    </>
  );
};
export default Card;

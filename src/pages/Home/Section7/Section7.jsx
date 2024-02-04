import Accordion from "./Accordion";

const Section7 = () => {
  return (
    <div className="mx-20 mb-28">
      <div data-aos="fade-up">
        <h1 className="text-lg text-center">FAQ</h1>
        <h4 className="text-4xl font-semibold mt-5 text-center">
          Frequently Asked Question
        </h4>
      </div>
      <div className="flex justify-between mt-16">
        <div>
          <div className="container mx-auto " data-aos="fade-up">
            <Accordion
              title="Why choose our medical for your family?"
              content="Diagnosy always try to provide the most common of get the prope for cure Healthcare are most popular package. You can  check-up body very small period of time and we send you report online."
            />
            <Accordion
              title="How to get Appointment for Emergency?"
              content="Diagnosy always try to provide the most common of get the prope for cure Healthcare are most popular package. You can  check-up body very small period of time and we send you report online."
            />
            <Accordion
              title="Will vitamin D save my Life?"
              content="Diagnosy always try to provide the most common of get the prope for cure Healthcare are most popular package. You can  check-up body very small period of time and we send you report online."
            />
            <Accordion
              title="Is Lab instrument are latest and modern?"
              content="Diagnosy always try to provide the most common of get the prope for cure Healthcare are most popular package. You can  check-up body very small period of time and we send you report online."
            />
            {/* Add more Accordions as needed */}
          </div>
        </div>
        <div data-aos="fade-up">
          <Accordion
            title="How to get Codiv 19 test result quick?"
            content="Diagnosy always try to provide the most common of get the prope for cure Healthcare are most popular package. You can  check-up body very small period of time and we send you report online."
          />
          <Accordion
            title="Do you have full body check-up Package?"
            content="Diagnosy always try to provide the most common of get the prope for cure Healthcare are most popular package. You can  check-up body very small period of time and we send you report online."
          />
          <Accordion
            title="Is there any arrangement for Vaccination?"
            content="Diagnosy always try to provide the most common of get the prope for cure Healthcare are most popular package. You can  check-up body very small period of time and we send you report online."
          />
          <Accordion
            title="Do you have full body check-up Package?"
            content="Diagnosy always try to provide the most common of get the prope for cure Healthcare are most popular package. You can  check-up body very small period of time and we send you report online."
          />
          {/* Add more Accordions as needed */}
        </div>
      </div>
    </div>
  );
};

export default Section7;

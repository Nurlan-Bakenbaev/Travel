import React from "react";
import "../../App.css";
import FactCard from "../FactsCard";
import ServiceCard from "../ServiceCard";

const Services = () => {
  const photos = [
    "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0e/bc/de/93.jpg",
    "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0e/bc/df/36.jpg",
    "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0f/9b/80/97.jpg",
  ];
  const photos2 = [
    "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/95/a1/08.jpg",
    "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/95/a1/0a.jpg",
    "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/95/a1/16.jpg",
  ];
  const photos3 = [
    "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-540x360/09/97/ef/c8.jpg",
    "https://aveneerdmc.com/sites/default/files/be%20inspired%20tamgaly%202.jpg",
    "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0f/ec/6e/52.jpg",
  ];

  return (
    <>
      <div className="services-container">
        <h1>
          {" "}
          <span className="awesome">Awesome</span> Tours here
        </h1>
        <div className="service-grid">
          <div className="service-card">
            <ServiceCard
              photos={photos}
              title={"Kolsai Kaindy Lakes and Charyn Canyon"}
              time={"6+"}
              description={
                "This tour is the best way to visit the most popular natural places of Almaty region in 1 day and if you do not have the …"
              }
              rating={"96%"}
              price={"120"}
            />
            <ServiceCard
              photos={photos2}
              title="Big Almaty Lake "
              time="5 "
              description="Almaty is lucky to be one of the few cities in the world to have such unique and diverse surroundings as mountain ranges…"
              rating="96%"
              price="120"
            />
            <ServiceCard
              photos={photos3}
              title="Tamgaly-Tas Petroglyphs and city of Nomads"
              time="6"
              description="This day tour gives you a wonderful opportunity not only to get acquainted with the most beautiful natural landscapes of…"
              rating="96%"
              price="150"
            />
          </div>

          <FactCard />
        </div>
      </div>
    </>
  );
};

export default Services;

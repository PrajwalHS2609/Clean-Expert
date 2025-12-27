import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import HomeCleanService from "../../components/HomePage/HomeCleanService/HomeCleanService";

import civilWork from "../../images/serviceImgs/Civil Works.png";
import bathroom from "../../images/serviceImgs/Bathroom Renovation.png";
import marble from "../../images/serviceImgs/Marbles Polishing.png";
import painting from "../../images/serviceImgs/Painting Services.png";
import pest from "../../images/serviceImgs/Pest Control.png";
import shower from "../../images/serviceImgs/Shower Cubicle.png";
import waterProofing from "../../images/serviceImgs/Water Proofing.png";
import cleaningService from "../../images/serviceImgs/Cleaning Service.png";

export default function CleaningServices() {
  const services = [
    { img: civilWork, title: "Civil Work" },
    { img: bathroom, title: "Bathroom" },
    { img: marble, title: "Marble Polishing" },
    { img: painting, title: "Painting" },
    { img: pest, title: "Pest Control" },
    { img: shower, title: "House Renovation" },
    { img: waterProofing, title: "Waterproofing" },
  ];

  const subServices = [
    { name: "Bathroom" },
    { name: "Kitchen" },
    { name: "Full House" },
    { name: "Sofa" },
    { name: "Chimney" },
    { name: "Mattress" },
    { name: "Carpet" },
    { name: "Window" },
    { name: "Chair" },
    { name: "Balcony" },
  ];

  return (
    <div>
      <ServiceHeader
        banner={cleaningService}
        title="Cleaning Services"
        para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eaque est a provident qui consequuntur dolores eos? Eius, odio vel. Architecto labore ex aspernatur itaque laborum a aliquid culpa dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eaque est a provident qui consequuntur dolores."
        services={services}
        subServices={subServices}
      />

      <HomeCleanService />
    </div>
  );
}

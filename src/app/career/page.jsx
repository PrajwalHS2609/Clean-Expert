import Career from "../../components/Career/Career";
import ServiceHerosite from "../../components/ServiceComponents/ServiceHerosite/ServiceHerosite";
import careerBanner from "./../../images/careerBanner.jpg"

export default function CareerPage() {
  return (
    <div>
      <ServiceHerosite title="Career" banner={careerBanner} />

      <Career />
    </div>
  );
}

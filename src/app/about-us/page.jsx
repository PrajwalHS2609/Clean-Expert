import AboutUsKnowUs from "../../components/AboutUs/AboutUsKnowUs";
import ServiceHerosite from "../../components/ServiceComponents/ServiceHerosite/ServiceHerosite";
import HomeTransformation from "./../../components/HomePage/HomeTransformation/HomeTransformation";
import HomeHow from "./../../components/HomePage/HomeHow/HomeHow";
import HomeTestimonial from "./../../components/HomePage/HomeTestimonial/HomeTestimonial";
import aboutBanner from "./../../images/AboutUs/aboutBanner.png";
export default function AboutUs() {
  return (
    <div>
      <ServiceHerosite title="About Us" banner= {aboutBanner} />
      <AboutUsKnowUs />
      <HomeTransformation />
      <HomeHow />
      <HomeTestimonial />
    </div>
  );
}

import LpPaintServices from "./../../components/LandingPage/PaintLandingPage/LpPaintServices/LpPaintServices";
import LpPaintContact from "./../../components/LandingPage/PaintLandingPage/LpPaintContact/LpPaintContact";
import LpPaintFaq from "./../../components/LandingPage/PaintLandingPage/LpPaintFaq/LpPaintFaq";
import LpPaintHeader from "./../../components/LandingPage/PaintLandingPage/LpPaintHeader/LpPaintHeader";
import LpPaintWhy from './../../components/LandingPage/PaintLandingPage/LpPaintWhy/LpPaintWhy';
import LpPaintTestimonial from './../../components/LandingPage/PaintLandingPage/LpPaintTestimonial/LpPaintTestimonial';
import LpPaintPartner from './../../components/LandingPage/PaintLandingPage/LpPaintPartner/LpPaintPartner';

export default function LpPaint() {
  return (
    <div>
      <LpPaintHeader />
      <LpPaintPartner/>
      <LpPaintServices />
      {/* <LpPaintBeforeAfter/> */}
      <LpPaintWhy/>
      <LpPaintTestimonial/>
      {/* <LpPaintSteps /> */}
      <LpPaintContact />
      <LpPaintFaq />
    </div>
  );
}

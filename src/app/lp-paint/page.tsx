import LpPaintServices from "./../../components/LandingPage/PaintLandingPage/LpPaintServices/LpPaintServices";
import LpPaintSteps from "./../../components/LandingPage/PaintLandingPage/LpPaintSteps/LpPaintSteps";
import LpPaintContact from "./../../components/LandingPage/PaintLandingPage/LpPaintContact/LpPaintContact";
import LpPaintFaq from "./../../components/LandingPage/PaintLandingPage/LpPaintFaq/LpPaintFaq";
import LpPaintHeader from "./../../components/LandingPage/PaintLandingPage/LpPaintHeader/LpPaintHeader";
import LpPaintWhy from './../../components/LandingPage/PaintLandingPage/LpPaintWhy/LpPaintWhy';

export default function LpPaint() {
  return (
    <div>
      <LpPaintHeader />
      <LpPaintServices />
      <LpPaintWhy/>
      <LpPaintSteps />
      <LpPaintContact />
      <LpPaintFaq />
    </div>
  );
}

import HomeHeader from './../components/HomePage/HomeHeader/HomeHeader';
import HomePaintingService from './../components/HomePage/HomePaintingService/HomePaintingService';
import HomeCivilWork from './../components/HomePage/HomeCivilWork/HomeCivilWork';
import HomePestControl from './../components/HomePage/HomePestControl/HomePestControl';
import HomeTransformation from './../components/HomePage/HomeTransformation/HomeTransformation';
import HomeAdvantage from './../components/HomePage/HomeAdvantage/HomeAdvantage';
import HomeCleanService from './../components/HomePage/HomeCleanService/HomeCleanService';
import HomeHeroSite from './../components/HomePage/HomeHeroSite/HomeHeroSite';
import HomeServices from './../components/HomePage/HomeServices/HomeServices';
import HomeHow from './../components/HomePage/HomeHow/HomeHow';
import HomeTestimonial from '@/components/HomePage/HomeTestimonial/HomeTestimonial';

export default function HomePage() {
  return (
    <div>
      <HomeHeroSite />
      <HomeServices />
      {/* <HomeHeader/> */}
      <HomeTransformation />
      <HomeCleanService />
      <HomePaintingService />
      <HomeCivilWork />
      <HomePestControl />
      <HomeHow />
      <HomeAdvantage />
      <HomeTestimonial/>
    </div>
  )
}
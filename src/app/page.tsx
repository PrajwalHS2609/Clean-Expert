import HomeHeader from './../components/HomePage/HomeHeader/HomeHeader';
import HomePaintingService from './../components/HomePage/HomePaintingService/HomePaintingService';
import HomeCivilWork from './../components/HomePage/HomeCivilWork/HomeCivilWork';
import HomePestControl from './../components/HomePage/HomePestControl/HomePestControl';
import HomeTransformation from './../components/HomePage/HomeTransformation/HomeTransformation';
import HomeAdvantage from './../components/HomePage/HomeAdvantage/HomeAdvantage';
import HomeCleanService from './../components/HomePage/HomeCleanService/HomeCleanService';
import HomeHeroSite from './../components/HomePage/HomeHeroSite/HomeHeroSite';

export default function HomePage(){
  return(
    <div>
      <HomeHeroSite/>
      <HomeHeader/>
      <HomeTransformation/>
      <HomeCleanService/>
      <HomePaintingService/>
      <HomeCivilWork/>
      <HomePestControl/>
      <HomeAdvantage/>
    </div>
  )
}
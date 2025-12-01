import HomeHeader from './../components/HomePage/HomeHeader/HomeHeader';
import HomePaintingService from './../components/HomePage/HomePaintingService/HomePaintingService';
import HomeCivilWork from './../components/HomePage/HomeCivilWork/HomeCivilWork';
import HomePestControl from './../components/HomePage/HomePestControl/HomePestControl';
import HomeTransformation from './../components/HomePage/HomeTransformation/HomeTransformation';
import HomeAdvantage from './../components/HomePage/HomeAdvantage/HomeAdvantage';

export default function HomePage(){
  return(
    <div>
      <HomeHeader/>
      <HomeTransformation/>
      <HomePaintingService/>
      <HomeCivilWork/>
      <HomePestControl/>
      <HomeAdvantage/>
    </div>
  )
}
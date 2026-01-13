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
import HomeFaq from './../components/HomePage/HomeFaq/HomeFaq';
import HomeBlog from './../components/HomePage/HomeBlog/HomeBlog';
export const metadata = {
  title: "Home Cleaning Services in Bangalore | Office Cleaning Services in Bangalore",
  description:
    "Home & Office Cleaning Services in Bangalore at Best Price. Our trained experts use safe products and advanced methods to deliver deep cleaning with minimal disruption, ensuring a healthier and more comfortable living environment.",
  canonical:
    "https://primecleanco.in/",

};
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
      <HomeTestimonial />
      <HomeFaq />
      <HomeBlog />
    </div>
  )
}
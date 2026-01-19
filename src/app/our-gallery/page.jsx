import ServiceHerosite from "./../../components/ServiceComponents/ServiceHerosite/ServiceHerosite";
import OurGallery from './../../components/OurGallery/OurGallery';
import galleryBanner from "@/images/ourGallery.jpg"
export default function OurGalleryPage() {
  return (
    <div>
      <ServiceHerosite title="Our Gallery" banner={galleryBanner}/>
      <OurGallery/>
    </div>
  );
}

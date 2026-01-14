import ContactUsContacts from "../../components/ContactUs/ContactUsContacts";
import ContactUsLocation from "../../components/ContactUs/ContactUsLocation";
import ServiceHerosite from "../../components/ServiceComponents/ServiceHerosite/ServiceHerosite";
import contactBanner from "./../../images/contactBannerImg.jpeg"
export default function ContactUs(){
    return(
        <div>
            <ServiceHerosite title="Contact Us" banner={contactBanner}/>
            <ContactUsContacts/>
            <ContactUsLocation/>
        </div>
    )
}
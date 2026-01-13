import ContactUsContacts from "../../components/ContactUs/ContactUsContacts";
import ContactUsLocation from "../../components/ContactUs/ContactUsLocation";
import ServiceHerosite from "../../components/ServiceComponents/ServiceHerosite/ServiceHerosite";

export default function ContactUs(){
    return(
        <div>
            <ServiceHerosite title="Contact Us" />
            <ContactUsContacts/>
            <ContactUsLocation/>
        </div>
    )
}
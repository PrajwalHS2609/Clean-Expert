"use client";
import React from "react";
import "./HomeFaq.css";
import { Accordion } from "react-bootstrap";
import faqImg from "@/images/faq.png";
import Image from "next/image";
import HeadingProps from "@/components/HeadingProps/HeadingProps";
const HomeFaq = () => {
  return (
    <div className="homeFaq-container">
      <HeadingProps title="Frequently Asked Questions" para="" />
      <div className="homeFaq-wrapper">
        <div className="homeFaq-content">
          <Accordion defaultActiveKey="0">
            <Accordion.Item className="homeFaq-accItem" eventKey="0">
              <Accordion.Header className="homeFaq-accHeader">
                <h5>1. What services does Prime Clean offer under one roof?</h5>
              </Accordion.Header>
              <Accordion.Body className="homeFaq-body">
                <div className="homeFaq-item">
                  <p>
                    Prime Clean provides Painting Services, House Cleaning, Pest
                    Control, and Civil Works, so you don’t have to coordinate
                    with multiple vendors. One team, one point of contact, zero
                    hassle.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="homeFaq-accItem" eventKey="1">
              <Accordion.Header className="homeFaq-accHeader">
                <h5>2. Are your technicians trained and verified?</h5>
              </Accordion.Header>
              <Accordion.Body className="homeFaq-body">
                <div className="homeFaq-item">
                  <p>
                    Yes. All Prime Clean professionals are background-verified,
                    trained, and experienced in their respective services to
                    ensure safety, quality, and professional conduct at your
                    home or site.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="homeFaq-accItem" eventKey="2">
              <Accordion.Header className="homeFaq-accHeader">
                <h5>3. Do you use safe and eco-friendly products?</h5>
              </Accordion.Header>
              <Accordion.Body className="homeFaq-body">
                <div className="homeFaq-item">
                  <p>
                    {" "}
                    Absolutely. We use approved, eco-friendly, and family-safe
                    products, especially for house cleaning and pest
                    control—safe for children, pets, and senior citizens.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="homeFaq-accItem" eventKey="3">
              <Accordion.Header className="homeFaq-accHeader">
                <h5>4. How do I get a quotation and is it transparent?</h5>
              </Accordion.Header>
              <Accordion.Body className="homeFaq-body">
                <div className="homeFaq-item">
                  <p>
                    You can request a free inspection and quotation. Our pricing
                    is clear, itemized, and transparent—no hidden charges or
                    last-minute surprises.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="homeFaq-accItem" eventKey="4">
              <Accordion.Header className="homeFaq-accHeader">
                <h5>
                  5. Will my home get damaged during painting or civil work?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="homeFaq-body">
                <div className="homeFaq-item">
                  <p>
                    No worries. We follow protective procedures such as covering
                    floors, furniture, and fittings. Clean-up is done after
                    completion so your space is left neat and damage-free.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="homeFaq-accItem" eventKey="5">
              <Accordion.Header className="homeFaq-accHeader">
                <h5>6. How long will the service take to complete?</h5>
              </Accordion.Header>
              <Accordion.Body className="homeFaq-body">
                <div className="homeFaq-item">
                  <p>
                    Timelines depend on the service type and area size. However,
                    Prime Clean is known for on-time completion, and we clearly
                    communicate schedules before starting the work.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="homeFaq-accItem" eventKey="6">
              <Accordion.Header className="homeFaq-accHeader">
                <h5>7. Do you provide warranty or service guarantee?</h5>
              </Accordion.Header>
              <Accordion.Body className="homeFaq-body">
                <div className="homeFaq-item">
                  <p>
                    Yes. We offer service warranties on painting, pest control,
                    and civil works, along with post-service support if you face
                    any issues after completion.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="homeFaq-accItem" eventKey="7">
              <Accordion.Header className="homeFaq-accHeader">
                <h5>
                  8. Can I book services on weekends or at flexible timings?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="homeFaq-body">
                <div className="homeFaq-item">
                  <p>
                    Yes. We offer flexible scheduling, including weekends and
                    convenient time slots, to suit working professionals and
                    families.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="homeFaq-accItem" eventKey="9">
              <Accordion.Header className="homeFaq-accHeader">
                <h5>9. Is pest control safe, and how long does it last?</h5>
              </Accordion.Header>
              <Accordion.Body className="homeFaq-body">
                <div className="homeFaq-item">
                  <p>
                    Our pest control treatments are safe and effective, with
                    results typically lasting several months. We also provide
                    guidance on precautions and after-care.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="homeFaq-accItem" eventKey="10">
              <Accordion.Header className="homeFaq-accHeader">
                <h5>
                  10. Why should I choose Prime Clean over other service
                  providers?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="homeFaq-body">
                <div className="homeFaq-item">
                  <p>
                    Prime Clean stands out for quality workmanship, transparent
                    pricing, trained professionals, timely delivery, and
                    excellent customer support—making home maintenance
                    stress-free and reliable.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
          </Accordion>
        </div>
        <div className="homeFaq-content">
          <Image src={faqImg} alt="faqImg" />
        </div>
      </div>
    </div>
  );
};

export default HomeFaq;

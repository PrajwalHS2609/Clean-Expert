"use client";
import React from "react";
import "./LpPaintFaq.css";
import { Accordion } from "react-bootstrap";
import faqImg from "@/images/faqImg.png";
import Image from "next/image";
const LpPaintFaq = () => {
  return (
    <div className="lpPaintFaq-container">
      <h2>Frequently Asked Questions</h2>

      <div className="lpPaintFaq-wrapper">
        <div className="lpPaintFaq-content">
          <Accordion defaultActiveKey="0">
            <Accordion.Item className="lpPaintFaq-accItem" eventKey="0">
              <Accordion.Header className="lpPaintFaq-accHeader">
                <h5>
                  1. What home painting services does Paintkraft offer in
                  Bangalore?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="lpPaintFaq-body">
                <p>
                  Paintkraft provides complete interior and exterior home
                  painting services, including wall preparation, putty
                  application, primer coating, texture painting, waterproof
                  coatings, and repainting for apartments, villas, and
                  independent houses.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="lpPaintFaq-accItem" eventKey="1">
              <Accordion.Header className="lpPaintFaq-accHeader">
                <h5>2. How much does home painting cost in Bangalore? .</h5>
              </Accordion.Header>
              <Accordion.Body className="lpPaintFaq-body">
                <p>
                  The cost depends on factors like carpet area, paint brand,
                  surface condition, and type of finish. Paintkraft offers
                  transparent pricing with free site inspection and customized
                  quotes—no hidden charges.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="lpPaintFaq-accItem" eventKey="2">
              <Accordion.Header className="lpPaintFaq-accHeader">
                <h5>3. How long does a typical home painting project take?</h5>
              </Accordion.Header>
              <Accordion.Body className="lpPaintFaq-body">
                <p>
                  Most interior painting projects are completed within 2–5 days,
                  while exterior painting may take longer depending on weather
                  conditions and surface preparation requirements.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="lpPaintFaq-accItem" eventKey="3">
              <Accordion.Header className="lpPaintFaq-accHeader">
                <h5>
                  4. Does Paintkraft provide free inspection and color
                  consultation?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="lpPaintFaq-body">
                <p>
                  Yes. Paintkraft offers a free on-site inspection along with
                  professional color consultation to help you choose shades and
                  finishes that suit your home and lighting.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="lpPaintFaq-accItem" eventKey="4">
              <Accordion.Header className="lpPaintFaq-accHeader">
                <h5>5. Are the painters trained and supervised?</h5>
              </Accordion.Header>
              <Accordion.Body className="lpPaintFaq-body">
                <p>
                  Absolutely. Paintkraft works with trained, background-verified
                  painters under expert supervision to ensure quality
                  workmanship, safety, and timely completion.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="lpPaintFaq-accItem" eventKey="5">
              <Accordion.Header className="lpPaintFaq-accHeader">
                <h5>6. What paint brands and finishes are used?</h5>
              </Accordion.Header>
              <Accordion.Body className="lpPaintFaq-body">
                <p>
                  Paintkraft uses premium and trusted paint brands, offering
                  finishes such as matte, satin, sheen, and luxury textures.
                  Customers can choose based on budget and aesthetic preference.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="lpPaintFaq-accItem" eventKey="6">
              <Accordion.Header className="lpPaintFaq-accHeader">
                <h5>
                  7. Will my furniture and floors be protected during painting?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="lpPaintFaq-body">
                <p>
                  Yes. All furniture, flooring, switches, and fittings are
                  carefully covered using protective sheets and masking tapes.
                  Post-paint clean-up is also included.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="lpPaintFaq-accItem" eventKey="7">
              <Accordion.Header className="lpPaintFaq-accHeader">
                <h5>
                  8. Is low-noise and clean painting possible in occupied homes?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="lpPaintFaq-body">
                <p>
                  Yes. Paintkraft uses modern, mechanized painting tools that
                  reduce noise, minimize paint splatter, and ensure a cleaner,
                  faster painting experience—ideal for lived-in homes.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="lpPaintFaq-accItem" eventKey="7">
              <Accordion.Header className="lpPaintFaq-accHeader">
                <h5>
                  9. Does Paintkraft offer warranty or after-service support?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="lpPaintFaq-body">
                <p>
                  Yes. Paintkraft provides service warranty on selected painting
                  jobs and offers prompt after-service support to address
                  touch-ups or concerns, if any.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="lpPaintFaq-content">
          <Image src={faqImg} alt="faqImg" />
        </div>
      </div>
    </div>
  );
};

export default LpPaintFaq;

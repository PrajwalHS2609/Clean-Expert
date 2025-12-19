"use client"
import React from 'react'
import "./LpPaintFaq.css"
import { Accordion } from 'react-bootstrap'
const LpPaintFaq = () => {
  return (
 <div className="lpPaintFaq-container">
              <h2>Frequently Asked Questions</h2>

      <div className="lpPaintFaq-wrapper">
        <div className="lpPaintFaq-content">
          <Accordion defaultActiveKey="0">
            <Accordion.Item className="lpPaintFaq-accItem" eventKey="0">
              <Accordion.Header className="lpPaintFaq-accHeader">
                <h5>1. </h5>
              </Accordion.Header>
              <Accordion.Body className="lpPaintFaq-body">
                <p>
                  ans
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="lpPaintFaq-accItem" eventKey="1">
              <Accordion.Header className="lpPaintFaq-accHeader">
                <h5>2.</h5>
              </Accordion.Header>
              <Accordion.Body className="lpPaintFaq-body">
                <p>
                 ans
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="lpPaintFaq-accItem" eventKey="2">
              <Accordion.Header className="lpPaintFaq-accHeader">
                <h5>3.</h5>
              </Accordion.Header>
              <Accordion.Body className="lpPaintFaq-body">
                <p>
               ans
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="lpPaintFaq-accItem" eventKey="3">
              <Accordion.Header className="lpPaintFaq-accHeader">
                <h5>4.</h5>
              </Accordion.Header>
              <Accordion.Body className="lpPaintFaq-body">
                <p>
                  ans
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="lpPaintFaq-accItem" eventKey="4">
              <Accordion.Header className="lpPaintFaq-accHeader">
                <h5>5.</h5>
              </Accordion.Header>
              <Accordion.Body className="lpPaintFaq-body">
                <p>
                 ans
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="lpPaintFaq-accItem" eventKey="5">
              <Accordion.Header className="lpPaintFaq-accHeader">
                <h5>6.</h5>
              </Accordion.Header>
              <Accordion.Body className="lpPaintFaq-body">
                <p>
                  ans
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="lpPaintFaq-accItem" eventKey="6">
              <Accordion.Header className="lpPaintFaq-accHeader">
                <h5>
                  7. 
                </h5>
              </Accordion.Header>
              <Accordion.Body className="lpPaintFaq-body">
                <p>
                 ans
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="lpPaintFaq-accItem" eventKey="7">
              <Accordion.Header className="lpPaintFaq-accHeader">
                <h5>
                  8.
                </h5>
              </Accordion.Header>
              <Accordion.Body className="lpPaintFaq-body">
                <p>
                 ans
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="lpPaintFaq-content">
          {/* <Image src={faq} alt="" /> */}
        </div>
      </div>
    </div>
  )
}

export default LpPaintFaq

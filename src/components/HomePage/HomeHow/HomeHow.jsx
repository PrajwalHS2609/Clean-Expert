import React from "react";
import "./HomeHow.css";
import HeadingProps from "@/components/HeadingProps/HeadingProps";

export default function HomeHow() {
  return (
    <div className="infographic-container">
      <HeadingProps
        title="How It Works"
        para=""
      />{" "}
      <div className="infographic-wrapper">
        <div className="info-step blue">
          <span className="step-number">1</span>
          <div className="icon">📊</div>
          <h3>CHART</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="connector"></div>

        <div className="info-step pink">
          <span className="step-number">2</span>
          <div className="icon">👤</div>
          <h3>TEAM</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="connector"></div>

        <div className="info-step orange">
          <span className="step-number">3</span>
          <div className="icon">🎯</div>
          <h3>TARGET</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="connector"></div>

        <div className="info-step green">
          <span className="step-number">4</span>
          <div className="icon">⚙️</div>
          <h3>PROCESS</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="connector"></div>

        <div className="info-step yellow">
          <span className="step-number">5</span>
          <div className="icon">🌐</div>
          <h3>ONLINE</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
}

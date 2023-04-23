import { useState } from "react";
import slider from "../assets/icon-slider.svg";
import "./Price.css";
import Footer from "./Footer";

function Price() {
  const [pageViews, setPageViews] = useState<number>(3);
  const [isMonthly, setIsMonthly] = useState(true);

  const PricingData: any = {
    1: {
      pageViews: "10K",
      monthly: 8,
      yearly: 72,
    },

    2: {
      pageViews: "50K",
      monthly: 12,
      yearly: 108,
    },

    3: {
      pageViews: "100K",
      monthly: 16,
      yearly: 144,
    },

    4: {
      pageViews: "500K",
      monthly: 24,
      yearly: 216,
    },

    5: {
      pageViews: "1M",
      monthly: 36,
      yearly: 324,
    },
  };

  function handlePageViewInput(e: any) {
    console.log(e.target.value);
    setPageViews(e.target.value);
  }

  return (
    <div className="priceContainer">
      <div className="pageViews">
        {PricingData[pageViews].pageViews} PAGEVIEWS
      </div>
      <div className="packetChanger">
        <input
          className="inputRange"
          type="range"
          min={1}
          max={5}
          step={1}
          defaultValue={3}
          onInput={handlePageViewInput}
          aria-label={PricingData[pageViews][isMonthly ? "monthly" : "yearly"]}
        />
        <div className="wholeRange">
          <div
            className="fakeRange"
            style={{ width: pageViews > 1 ? `${pageViews * 20}%` : 40 }}
          >
            <div className="tracker">
              <img className="slider" alt="slider" src={slider} />
            </div>
          </div>
        </div>
        <p className="priceRange">
          ${PricingData[pageViews][isMonthly ? "monthly" : "yearly"]}.00
          <span className="graphicMethod">
            {" "}
            / {""}
            {isMonthly ? "month" : "year"}
          </span>
        </p>
        <div className="changeToggle">
          <p>Monthly Billing</p>
          <input
            type="checkbox"
            id="switch"
            onChange={() => {
              setIsMonthly(!isMonthly);
            }}
          />

          <label htmlFor="switch" className="switch"></label>

          <p>
            Yearly Billing{" "}
            <span className="discount">
              -25% <span className="desktopDiscount">discount</span>
            </span>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Price;

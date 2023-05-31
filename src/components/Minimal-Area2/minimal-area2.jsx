/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import Link from "next/link";
import { thumparallaxDown } from "../../common/thumparallax";

const MinimalArea2 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/min-area.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <h4 className="color-font">Mount. Maintain. Support.</h4>
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                Our company is one of the leading in providing mounting support, maintenance service, and service & support. We are dedicated to providing you with the best experience possible.
                </p>
              </Split>
              <ul>
                <li className="wow fadeInUp" data-wow-delay=".2s">
                We provide expert mounting support for a variety of equipment.
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                Our maintenance service ensures your equipment stays in top condition.
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  Service & support? We re there for you around the clock.
                </li>
              </ul>
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea2;

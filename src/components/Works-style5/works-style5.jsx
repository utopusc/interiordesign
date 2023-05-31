/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorksStyle5 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section className="portfolio po-arch section-padding pb-70" id="po-arch">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h2 className="wow fadeIn" data-wow-delay=".3s">
                Portfolio
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="gallery full-width">
            <div
              className="col-md-6 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                  <a className="imago wow">
                    <img src="/img/arch/work/1.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
              </div>
            </div>
            <div
              className="col-md-6 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                  <a className="imago wow">
                    <img src="/img/arch/work/2.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
              </div>
            </div>
            <div
              className="col-md-6 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                  <a className="imago wow">
                    <img src="/img/arch/work/3.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
              </div>
            </div>
            <div
              className="col-md-6 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                  <a className="imago wow">
                    <img src="/img/arch/work/4.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
              </div>
            </div>
            <div
              className="col-md-6 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                  <a className="imago wow">
                    <img src="/img/arch/work/5.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
              </div>
            </div>
            <div
              className="col-md-6 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                  <a className="imago wow">
                    <img src="/img/arch/work/6.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle5;

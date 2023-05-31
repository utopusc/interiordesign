/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class TestimonialsArch extends React.Component {
  constructor(props) {
    super(props);
  }
  renderArrows = () => {
    return (
      <div className="arrows">
        <div className="container">
          <div
            onClick={() => this.slider.slickNext()}
            className="next cursor-pointer"
          >
            <span className="pe-7s-angle-right"></span>
          </div>
          <div
            onClick={() => this.slider.slickPrev()}
            className="prev cursor-pointer"
          >
            <span className="pe-7s-angle-left"></span>
          </div>
        </div>
      </div>
    );
  };
  render() {
    return (
      <section
      id="testimonials-arch"
        className="testimonials section-padding position-re"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head  text-center">
                <h2 className="wow fadeIn" data-wow-delay=".3s">
                  Testimonials
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid position-re">
          <div className="row wow fadeInUp" data-wow-delay=".5s">
            <div className="col-lg-12">
              <Slider
                className="slic-item"
                {...{
                  ref: (c) => (this.slider = c),
                  dots: false,
                  infinite: true,
                  arrows: true,
                  centerMode: true,
                  autoplay: true,
                  rows: 1,
                  slidesToScroll: 1,
                  slidesToShow: 3,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                    {
                      breakpoint: 767,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                  ],
                }}
              >
<div className="item">
  <div className="info inf-lrg valign">
    <div className="cont">
      <div className="author">
        <h6 className="author-name color-font">
          John Anderson
        </h6>
      </div>
    </div>
  </div>
  <div className="valign">
    <p className="fz-20 fw-200">
      Outstanding service! They exceeded my expectations. I couldn t be happier with their professionalism and attention to detail.
    </p>
  </div>
</div>

<div className="item">
  <div className="info inf-lrg valign">
    <div className="cont">
      <div className="author">
        <h6 className="author-name color-font">
          Maria Smith
        </h6>
      </div>
    </div>
  </div>
  <div className="valign">
    <p className="fz-20 fw-200">
      The team is extremely dedicated and their expertise in the field is evident. They were always ready to assist and promptly addressed my concerns. Highly recommend!
    </p>
  </div>
</div>

<div className="item">
  <div className="info inf-lrg valign">
    <div className="cont">
      <div className="author">
        <h6 className="author-name color-font">
          Robert Williams
        </h6>
      </div>
    </div>
  </div>
  <div className="valign">
    <p className="fz-20 fw-200">
      Exceptional quality of service. The whole process was smooth and the end result exceeded my expectations. I appreciate their commitment to excellence.
    </p>
  </div>
</div>

<div className="item">
  <div className="info inf-lrg valign">
    <div className="cont">
      <div className="author">
        <h6 className="author-name color-font">
          Emma Brown
        </h6>
      </div>
    </div>
  </div>
  <div className="valign">
    <p className="fz-20 fw-200">
      Very impressed with the high level of professionalism and the attention to detail. The team was great to work with and Im extremely satisfied with the services received.
    </p>
  </div>
</div>

<div className="item">
  <div className="info inf-lrg valign">
    <div className="cont">
      <div className="author">
        <h6 className="author-name color-font">
          Oliver Davis
        </h6>
      </div>
    </div>
  </div>
  <div className="valign">
    <p className="fz-20 fw-200">
      The team went above and beyond to ensure everything was perfect. The quality of their work is truly remarkable. I would highly recommend them to anyone in need of their services.
    </p>
  </div>
</div>

              </Slider>
            </div>
          </div>
          {this.renderArrows()}
        </div>
      </section>
    );
  }
}

export default TestimonialsArch;

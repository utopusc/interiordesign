import React from 'react'
import Link from 'next/link'

const AboutUs6 = () => {
    return (
      <section id="about" className="about-ar section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 valign">
              <div className="img">
                <div
                  className="bg-img bg-fixed hero-bg"
                  style={{ backgroundImage: "url(/img/arch/hero.png)" }}
                ></div>
                <div className="exp valign text-center">
                  <div className="full-width">
                    <h2
                      className="bg-img bg-fixed"
                      style={{ backgroundImage: "url(/img/arch/hero.png)" }}
                    >
                      15
                    </h2>
                    <p>Years Of Experience</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 valign">
  <div className="content">
    <h6 className="sub-title main-color ls10 text-u">About Us</h6>
    <h3>Experience You Can Trust</h3>
    <p>
      At PaintMeDesign, we pride ourselves on our rich history of delivering high-quality home improvement services in Los Angeles. With 15 years of experience in the industry, we've mastered the art of exceeding our clients' expectations. Our skilled team is proficient in a broad range of services, including General Mounting, Furniture Assembly, Help Moving, Furniture Removal, Cleaning, Minor Home Repairs, Electrical Help, Plumbing, and Heavy Lifting & Loading. We're more than just a service provider, we're a partner committed to enhancing the comfort and value of your home. 
    </p>
  </div>
</div>

          </div>
        </div>
      </section>
    );
}

export default AboutUs6
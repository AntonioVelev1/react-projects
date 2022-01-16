import Latest from "../LatestAdd/Latest";
import Notification from "../common/Notification/Notification";

function Home() {
    return (
      <>
        <section id="section4" className="parallax-window" data-parallax="scroll">
        <h2>Welcome to our Cooking Book</h2>
        <h3>What are you looking for today</h3>
        <div className="testimonial-area owl-theme owl-carousel" >
          <div className="col-md-12 col-sm-12 col-xs-12 noPadding text-center">
            <div className="single-testimonial">
              <div className="testimonial-info">
                <div className="testimonial-content">
                  <p>I must explain to you how all this mistaken idea of denoung pleure and praising pain was born and I will give you a coete account of the system, and expound the actual</p>
                  <h4>David Morgan</h4>
                  <h5>Student, CSE</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-xs-12 noPadding text-center">
            <div className="single-testimonial">
              <div className="testimonial-info">
                <div className="testimonial-content">
                  <p>I must explain to you how all this mistaken idea of denoung pleure and praising pain was born and I will give you a coete account of the system, and expound the actual</p>
                  <h4>David Morgan</h4>
                  <h5>Student, CSE</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-xs-12 noPadding text-center">
            <div className="single-testimonial">
              <div className="testimonial-info">
                <div className="testimonial-content">
                  <p>I must explain to you how all this mistaken idea of denoung pleure and praising pain was born and I will give you a coete account of the system, and expound the actual</p>
                  <h4>David Morgan</h4>
                  <h5>Student, CSE</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Latest/>
      </>
    );
}

export default Home;
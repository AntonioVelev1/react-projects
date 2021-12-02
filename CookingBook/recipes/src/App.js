import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import About from "./components/About/About";

function App() {

  return (
    <div>
      <Header />
      <Login />
      <Register/>
      <section id="section1" className="topOff">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="panel panel-default">
                <div className="panel-body colorfullPanel text-center">
                  <h3>Upp to %15 off</h3>
                  <h2><span>June</span> Special Offer
                    <img className="classNameic" src="./img/new/icon.png" />

                  </h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis leo vitae lacinia congue.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="panel panel-default colorfullParent">
                <div className="panel-body colorfullPanel text-center">
                  <h3>Are You New Here?</h3>
                  <h2><span>Learn</span> About Us
                    <img className="classNameic" src="./img/new/icon.png" />

                  </h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis leo vitae lacinia congue.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="panel panel-default">
                <div className="panel-body colorfullPanel text-center">
                  <h3>Are You New Here?</h3>
                  <h2><span>Learn</span> About Us
                    <img className="classNameic" src="./img/new/icon.png" />

                  </h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis leo vitae lacinia congue.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About/>

      <div className="container">
        <div className="banner"
          style={{backgroundImage: 'url(./img/new/shopnow2.png)'}}>
          <div className="content text-center">
            <span>NEW CAKE!!! GET IT FOR $12/PAX (LIMITED)</span>
            <h2>Strawberry Pancake</h2>
            <h3>SHOP NOW</h3>
            <img className="classNameic" src="./img/new/icon.png" />
          </div>
        </div>
      </div>
      <section id="section3">
        <div className="container">

          <div className="row">
            <div className="col-xs-12">
              <div className="section-title text-center">
                <h3>Premium Quality</h3>
                <h2>Cemre Bakery Fresh Cakes</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="container">
              <div className="col-md-12 noPadding">
                <div id="news-slider" className="news-slider owl-theme owl-carousel">
                  <div className="post-slide">
                    <div className="post-img">
                      <div className="post-abs"><p>Progresso İtalian Style</p></div>
                      <img src="./img/new/productnew.png" alt="" />
                    </div>
                    <h3 className="post-title"><a href="#">Progresso İtalian Style</a></h3>
                    <p className="post-description">
                      12$
                    </p>
                  </div>

                  <div className="post-slide">
                    <div className="post-img">
                      <div className="post-abs"><p>Progresso İtalian Style</p></div>
                      <img src="./img/new/productnew.png" alt="" />

                    </div>
                    <h3 className="post-title"><a href="#">Progresso İtalian Style</a></h3>
                    <p className="post-description">
                      12$
                    </p>
                  </div>

                  <div className="post-slide">
                    <div className="post-img">
                      <div className="post-abs"><p>Progresso İtalian Style</p></div>
                      <img src="./img/new/productnew.png" alt="" />

                    </div>
                    <h3 className="post-title"><a href="#">Progresso İtalian Style</a></h3>
                    <p className="post-description">
                      12$
                    </p>
                  </div>

                  <div className="post-slide">
                    <div className="post-img">
                      <div className="post-abs"><p>Progresso İtalian Style</p></div>
                      <img src="./img/new/productnew.png" alt="" />

                    </div>
                    <h3 className="post-title"><a href="#">Progresso İtalian Style</a></h3>
                    <p className="post-description">
                      12$
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section4" className="parallax-window" data-parallax="scroll" data-image-src="./img/slider/1900x1000.png">
        <h3>What We Say</h3>
        <h2>Customer Testimonial</h2>
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
      <section id="section5" className="blog-area">
        <div className="row">
          <div className="col-xs-12">
            <div className="blog-section-title text-center">
              <h3>Cemre Bakery Blog</h3>
              <h2>Our Latest News</h2>
            </div>
          </div>
          <div className="row">
            <div className="container blog-section">
              <div className="col-md-6">
                <div className="row">
                  <div className="blog-section-date col-md-4 col-sm-4 col-xs-12 noPadding">

                    <p className="month">June</p>
                    <p className="date">6.6.1986</p>


                  </div>

                  <div className="blog-section-description col-md-8 col-sm-8 col-xs-12 noPadding">
                    <h2>I must explain to you how all this mistaken </h2>
                    <p>idea of denouncing pleure and praising pain was born and I will give you a complete account of the system</p>

                    <a href="">Shop</a>

                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="blog-section-date col-md-4 col-sm-4 col-xs-12 noPadding">

                    <p className="month">June</p>
                    <p className="date">6.6.1986</p>


                  </div>

                  <div className="blog-section-description col-md-8 col-sm-8 col-xs-12 noPadding">
                    <h2>I must explain to you how all this mistaken </h2>
                    <p>idea of denouncing pleure and praising pain was born and I will give you a complete account of the system</p>
                    <a href="">Shop</a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section6" className="contact">
        <div className="contact100-form-title container">
          <h3>Keep In Touch</h3>
          <h2>Send A Message</h2>
          <form className="contact100-form validate-form">


            <div className="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Name is required">
              <span className="label-input100">Your Name</span>
              <input className="input100" type="text" name="name" placeholder="Enter your name" />
              <span className="focus-input100"></span>
            </div>

            <div className="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
              <span className="label-input100">Email</span>
              <input className="input100" type="text" name="email" placeholder="Enter your email addess" />
              <span className="focus-input100"></span>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Message is required">
              <span className="label-input100">Message</span>
              <textarea className="input100" name="message" placeholder="Your message here..."></textarea>
              <span className="focus-input100"></span>
            </div>

            <div className="container-contact100-form-btn">
              <button className="contact100-form-btn">
                <span>
                  Submit
                  <i className="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
                </span>
              </button>
            </div>

            <div className="container-contact100-form-btn response">
              <p className="error">
              </p>
            </div>
          </form>
        </div>
      </section>


    <Footer />
    </div>
  );
}

export default App;

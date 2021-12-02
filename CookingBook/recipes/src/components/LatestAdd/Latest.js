function Latest() {
    return (
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
      </section>
    );
}

export default Latest;
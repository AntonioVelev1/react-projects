import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import All from "./components/All/All";

function App() {
  return (
    <div id="shell">
      <Header />
      <div id="main">
        <div id="content">
          <All />
          <div className="box">
            <div className="head">
              <h2>TOP RATED</h2>
              <p className="text-right"><a href="#">See all</a></p>
            </div>
            <div className="movie">
              <div className="movie-image"> <span className="play"><span className="name">TRANSFORMERS</span></span> <a href="#"><img src="images/movie7.jpg" alt="" /></a> </div>
              <div className="rating">
                <p>RATING</p>
                <div className="stars">
                  <div className="stars-in"> </div>
                </div>
                <span className="comments">12</span> </div>
            </div>
            <div className="movie">
              <div className="movie-image"> <span className="play"><span className="name">MAGNETO</span></span> <a href="#"><img src="images/movie8.jpg" alt="" /></a> </div>
              <div className="rating">
                <p>RATING</p>
                <div className="stars">
                  <div className="stars-in"> </div>
                </div>
                <span className="comments">12</span> </div>
            </div>
            <div className="movie">
              <div className="movie-image"> <span className="play"><span className="name">KUNG FU PANDA</span></span> <a href="#"><img src="images/movie9.jpg" alt="" /></a> </div>
              <div className="rating">
                <p>RATING</p>
                <div className="stars">
                  <div className="stars-in"> </div>
                </div>
                <span className="comments">12</span> </div>
            </div>
            <div className="movie">
              <div className="movie-image"> <span className="play"><span className="name">EAGLE EYE</span></span> <a href="#"><img src="images/movie10.jpg" alt="" /></a> </div>
              <div className="rating">
                <p>RATING</p>
                <div className="stars">
                  <div className="stars-in"> </div>
                </div>
                <span className="comments">12</span> </div>
            </div>
            <div className="movie">
              <div className="movie-image"> <span className="play"><span className="name">NARNIA</span></span> <a href="#"><img src="images/movie11.jpg" alt="" /></a> </div>
              <div className="rating">
                <p>RATING</p>
                <div className="stars">
                  <div className="stars-in"> </div>
                </div>
                <span className="comments">12</span> </div>
            </div>
            <div className="movie last">
              <div className="movie-image"> <span className="play"><span className="name">ANGELS &amp; DEMONS</span></span> <a href="#"><img src="images/movie12.jpg" alt="" /></a> </div>
              <div className="rating">
                <p>RATING</p>
                <div className="stars">
                  <div className="stars-in"> </div>
                </div>
                <span className="comments">12</span> </div>
            </div>
            <div className="cl">&nbsp;</div>
          </div>
          <div className="box">
            <div className="head">
              <h2>MOST COMMENTED</h2>
              <p className="text-right"><a href="#">See all</a></p>
            </div>
            <div className="movie">
              <div className="movie-image"> <span className="play"><span className="name">HOUSE</span></span> <a href="#"><img src="images/movie13.jpg" alt="" /></a> </div>
              <div className="rating">
                <p>RATING</p>
                <div className="stars">
                  <div className="stars-in"> </div>
                </div>
                <span className="comments">12</span> </div>
            </div>
            <div className="movie">
              <div className="movie-image"> <span className="play"><span className="name">VACANCY</span></span> <a href="#"><img src="images/movie14.jpg" alt="" /></a> </div>
              <div className="rating">
                <p>RATING</p>
                <div className="stars">
                  <div className="stars-in"> </div>
                </div>
                <span className="comments">12</span> </div>
            </div>
            <div className="movie">
              <div className="movie-image"> <span className="play"><span className="name">MIRRORS</span></span> <a href="#"><img src="images/movie15.jpg" alt="" /></a> </div>
              <div className="rating">
                <p>RATING</p>
                <div className="stars">
                  <div className="stars-in"> </div>
                </div>
                <span className="comments">12</span> </div>
            </div>
            <div className="movie">
              <div className="movie-image"> <span className="play"><span className="name">THE KINGDOM</span></span> <a href="#"><img src="images/movie16.jpg" alt="" /></a> </div>
              <div className="rating">
                <p>RATING</p>
                <div className="stars">
                  <div className="stars-in"> </div>
                </div>
                <span className="comments">12</span> </div>
            </div>
            <div className="movie">
              <div className="movie-image"> <span className="play"><span className="name">MOTIVES</span></span> <a href="#"><img src="images/movie17.jpg" alt="" /></a> </div>
              <div className="rating">
                <p>RATING</p>
                <div className="stars">
                  <div className="stars-in"> </div>
                </div>
                <span className="comments">12</span> </div>
            </div>
            <div className="movie last">
              <div className="movie-image"> <span className="play"><span className="name">THE PRESTIGE</span></span> <a href="#"><img src="images/movie18.jpg" alt="" /></a> </div>
              <div className="rating">
                <p>RATING</p>
                <div className="stars">
                  <div className="stars-in"> </div>
                </div>
                <span className="comments">12</span> </div>
            </div>
            <div className="cl">&nbsp;</div>
          </div>
        </div>
        {/* <div id="news">
          <div className="head">
            <h3>NEWS</h3>
            <p className="text-right"><a href="#">See all</a></p>
          </div>
          <div className="content">
            <p className="date">12.04.09</p>
            <h4>Disney's A Christmas Carol</h4>
            <p>&quot;Disney's A Christmas Carol,&quot; a multi-sensory thrill ride re-envisioned by Academy Award&reg;-winning filmmaker Robert Zemeckis, captures... </p>
            <a href="#">Read more</a> </div>
          <div className="content">
            <p className="date">11.04.09</p>
            <h4>Where the Wild Things Are</h4>
            <p>Innovative director Spike Jonze collaborates with celebrated author Maurice Sendak to bring one of the most beloved books of all time to the big screen in &quot;Where the Wild Things Are,&quot;...</p>
            <a href="#">Read more</a> </div>
          <div className="content">
            <p className="date">10.04.09</p>
            <h4>The Box</h4>
            <p>Norma and Arthur Lewis are a suburban couple with a young child who receive an anonymous gift bearing fatal and irrevocable consequences.</p>
            <a href="#">Read more</a> </div>
        </div>
        <div id="coming">
          <div className="head">
            <h3>COMING SOON<strong>!</strong></h3>
            <p className="text-right"><a href="#">See all</a></p>
          </div>
          <div className="content">
            <h4>The Princess and the Frog </h4>
            <a href="#"><img src="images/coming-soon1.jpg" alt="" /></a>
            <p>Walt Disney Animation Studios presents the musical &quot;The Princess and the Frog,&quot; an animated comedy set in the great city of New Orleans...</p>
            <a href="#">Read more</a> </div>
          <div className="cl">&nbsp;</div>
          <div className="content">
            <h4>The Princess and the Frog </h4>
            <a href="#"><img src="images/coming-soon2.jpg" alt="" /></a>
            <p>Walt Disney Animation Studios presents the musical &quot;The Princess and the Frog,&quot; an animated comedy set in the great city of New Orleans...</p>
            <a href="#">Read more</a> </div>
        </div> */}
        <div className="cl">&nbsp;</div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

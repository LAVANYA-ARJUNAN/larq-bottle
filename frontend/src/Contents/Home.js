import pic from '../Images/BABHNNA-4.png'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import pic1 from '../Images/black.png'
import pic2 from '../Images/BDMB050A.png'
import pic3 from '../Images/PAMB190A.png'
import pic4 from '../Images/BNWLL068A.png'
import pic5 from '../Images/pic5.png'
import pic6 from '../Images/pic6.png'
import pic7 from '../Images/pic7.png'
import pic8 from '../Images/pic8.png'
import bottle from '../Images/bottles.jpg'
import access from '../Images/accessories.jpg'
import pitcher from '../Images/pitchers.jpg'
import '../Contents/Larq.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import { FreeMode, Navigation } from 'swiper/modules';
import NavBar from '../Router/NavBar';
import Footer from '../Router/Footer';

function Larq() {

  return (
    <div>
      <NavBar></NavBar>

      <section className="back pb-5 text-dark">
        <h5 className="col-4 text-white" style={{ fontSize: "60px", paddingTop: "100px" }}>A handle for every mood</h5>
        <p className="col-5 text-white h4 mx-5" style={{ textAlign: "left", lineHeight: "40px" }}>Glow up your bottle with the new Neon Collection Handles—bold colors, solid grip, and clip-on swaps to match your vibe in seconds.</p>
        <button style={{ marginLeft: "-800px", padding: "10px", borderRadius: "20px 20px", marginTop: "35px" }} id="button">Shop Now</button>
        <section className="card" style={{ width: "200px", float: "inline-end", marginTop: "-180px", marginRight: "100px", height: "270px" }}>
          <img src={pic} className="card-img-top" alt="..." style={{ width: "200px", height: "270px", backgroundColor: "aquamarine" }} />
          <div class="card-body">
            <Link style={{ textDecoration: "none" }}>New</Link>
            <h5 className="h6">Larq bottle handles</h5>
          </div>
        </section>
      </section>
      <section>
        <div>
          <h1 className='container' style={{ marginLeft: "-400px", color: "black" }}>LARQ Products</h1>
          <button style={{ padding: "10px", borderRadius: "20px 20px", marginTop: "-50px", float: "right", backgroundColor: "white" }} id="button">Shop Now</button>

        </div>
        <div className='swipe'>
          <Swiper
            slidesPerView={3}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}

            freeMode={true}
            navigation={{
              clickable: true,
            }}
            modules={[FreeMode, Navigation]}
            className="mySwiper " style={{ width: "100%", height: "50%", position: 'relative', top: "30px" }}
          >

            <SwiperSlide style={{ marginTop: "50px" }}>
              <Link style={{ textDecoration: "none", color: "black", textAlign: "left" }}>
                <div className="card mx-auto" style={{ width: "100%", maxWidth: "20rem" }}>
                  <img src={pic1} className="card-img-top" alt="Hi" style={{ backgroundColor: "rgba(114, 154, 174, 0.3)" }} />
                  <div className="card-body">
                    <Link className="card-title">New</Link>
                    <p className="card-text">LARQ Bottle pure Vis<sup>TM</sup>2</p>
                    <p><strike>$129</strike>&nbsp;&nbsp;$114</p>
                  </div>
                </div>
              </Link>
              <br></br>
            </SwiperSlide>
            <SwiperSlide>
              <Link style={{ textDecoration: "none", color: "black" }}>
                <div className="card mx-auto" style={{ width: "100%", maxWidth: "20rem" }}>
                  <img src={pic2} className="card-img-top" alt="Hi" style={{ backgroundColor: "rgba(114, 154, 174, 0.3)" }} />
                  <div className="card-body">
                    <Link className="card-title">New</Link>
                    <p className="card-text">LARQ Bottle pure Vis<sup>TM</sup>2</p>
                    <p>$114</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link style={{ textDecoration: "none", color: "black" }}>
                <div className="card mx-auto" style={{ width: "100%", maxWidth: "20rem" }}>
                  <img src={pic3} className="card-img-top" alt="Hi" style={{ backgroundColor: "rgba(114, 154, 174, 0.3)" }} />
                  <div className="card-body">
                    <Link className="card-title">New</Link>
                    <p className="card-text">LARQ Bottle pure Vis<sup>TM</sup>2</p>
                    <p>$214</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link style={{ textDecoration: "none", color: "black" }}>
                <div className="card mx-auto" style={{ width: "100%", maxWidth: "20rem" }}>
                  <img src={pic4} className="card-img-top" alt="Hi" style={{ backgroundColor: "rgba(114, 154, 174, 0.3)" }} />
                  <div className="card-body">
                    <Link className="card-title">New</Link>
                    <p className="card-text">LARQ Bottle pure Vis<sup>TM</sup>2</p>
                    <p>$314</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link style={{ textDecoration: "none", color: "black" }}>
                <div className="card mx-auto" style={{ width: "100%", maxWidth: "20rem" }}>
                  <img src={pic5} className="card-img-top" alt="Hi" style={{ backgroundColor: "rgba(114, 154, 174, 0.3)" }} />
                  <div className="card-body">
                    <Link className="card-title">New</Link>
                    <p className="card-text">LARQ Bottle pure Vis<sup>TM</sup>2</p>
                    <p>$324</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link style={{ textDecoration: "none", color: "black" }}>
                <div className="card mx-auto" style={{ width: "100%", maxWidth: "20rem" }}>
                  <img src={pic6} className="card-img-top" alt="Hi" style={{ backgroundColor: "rgba(114, 154, 174, 0.3)" }} />
                  <div className="card-body">
                    <Link className="card-title">New</Link>
                    <p className="card-text">LARQ Bottle pure Vis<sup>TM</sup>2</p>
                    <p>$164</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link style={{ textDecoration: "none", color: "black" }}>
                <div className="card mx-auto" style={{ width: "100%", maxWidth: "20rem" }}>
                  <img src={pic7} className="card-img-top" alt="Hi" style={{ backgroundColor: "rgba(114, 154, 174, 0.3)" }} />
                  <div className="card-body">
                    <Link className="card-title">New</Link>
                    <p className="card-text">LARQ Bottle pure Vis<sup>TM</sup>2</p>
                    <p>$140</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link style={{ textDecoration: "none", color: "black" }}>
                <div className="card mx-auto" style={{ width: "100%", maxWidth: "20rem" }}>

                  <img src={pic8} className="card-img-top" alt="Hi" style={{ backgroundColor: "rgba(114, 154, 174, 0.3)" }} />
                  <div className="card-body">
                    <Link className="card-title">New</Link>
                    <p className="card-text">LARQ Bottle pure Vis<sup>TM</sup>2</p>
                    <p>$240</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link style={{ textDecoration: "none", color: "black" }}>
                <div
                  className="card"
                  style={{
                    width: "20rem",
                    height: "470px",
                    backgroundImage: `url(${bottle})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                >
                  <Link style={{ marginTop: "330px", textAlign: "left", color: "white", textDecoration: "none", padding: "7px", marginLeft: "30px" }}><h5>Larq products</h5></Link>
                  <button style={{ width: "100px", marginLeft: "30px" }}>Shop now</button>
                </div>
              </Link>
            </SwiperSlide>

          </Swiper>
          <br></br><br></br>

          <p className='marquee-text' style={{ color: "darkblue" }}><h3><b>How many sips does it take to be amazing? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hydrate or die-drate . &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#DrinkBrilliantly
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Friends don’t let friends dehydrate. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#DrinkBrilliantly
          </b></h3></p>
          <br></br>
          <br></br>
        </div>
      </section>
      <br></br><br></br>
      <section className='container'>
        <div className='row'>
          <div className='col-lg-4'>
            <Link style={{ textDecoration: "none", color: "black" }}>
              <div
                className="card"
                style={{
                  width: "20rem",
                  height: "490px",
                  backgroundImage: `url(${bottle})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <Link style={{ marginTop: "330px", textAlign: "left", color: "white", textDecoration: "none", padding: "7px", marginLeft: "30px" }}><h4><b>Bottles</b></h4></Link>
                <Link style={{ textAlign: "left", color: "white", textDecoration: "none", padding: "7px", marginLeft: "30px" }}><b>Browse Water Bottles that fits your needs.</b></Link>
                <button className='btn btn-light' style={{ width: "100px", marginLeft: "30px" }}>Shop now</button>

              </div>
            </Link>        </div>
          <div className='col-lg-4'>
            <Link style={{ textDecoration: "none", color: "black" }}>
              <div
                className="card"
                style={{
                  width: "20rem",
                  height: "490px",
                  backgroundImage: `url(${pitcher})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <Link style={{ marginTop: "330px", textAlign: "left", color: "white", textDecoration: "none", padding: "7px", marginLeft: "30px" }}><h4><b>Pitchers</b></h4></Link>
                <Link style={{ textAlign: "left", color: "white", textDecoration: "none", padding: "7px", marginLeft: "30px" }}><b>Equip your home with Nano Zero filtration.</b></Link>
                <button className='btn btn-light' style={{ width: "100px", marginLeft: "30px" }}>Shop now</button>
              </div>
            </Link>        </div>
          <div className='col-lg-4'>
            <Link style={{ textDecoration: "none", color: "black" }}>
              <div
                className="card"
                style={{
                  width: "20rem",
                  height: "490px",
                  backgroundImage: `url(${access})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",

                }}
              >
                <Link style={{ marginTop: "330px", textAlign: "left", color: "white", textDecoration: "none", padding: "7px", marginLeft: "30px" }}><h4><b>Accessories</b></h4></Link>
                <Link style={{ textAlign: "left", color: "white", textDecoration: "none", padding: "7px", marginLeft: "30px" }}><b>Customize your on-the-go hydration with accessories.</b></Link>
                <button className='btn btn-light' style={{ width: "100px", marginLeft: "30px" }}>Shop now</button>
              </div>
            </Link>        </div>
        </div>
      </section>
      <br></br><br></br>
      <Footer />
    </div>
  )
}
export default Larq;
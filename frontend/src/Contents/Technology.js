import React from 'react';
import access1 from '../Images/filters-tech-image.png';
import tech2 from '../Images/tech2.png';
import { Link } from 'react-router-dom';
import pic2 from '../Images/BDMB050A.png';
import pic3 from '../Images/PAMB190A.png';
import pic4 from '../Images/BNWLL068A.png';
import pic5 from '../Images/pic5.png';
import pic6 from '../Images/pic6.png';
import pic7 from '../Images/pic7.png';
import pic8 from '../Images/pic8.png';
import NavBar from '../Router/NavBar';
import Footer from '../Router/Footer';
import '../Contents/Technology.css';

const Technology = () => {
    return (
        <div>
            <NavBar />
            <div className="tech-section tech-bg-1">
                <div className="tech-flex">
                    <div className="tech-left">
                        <h1><b>Nano Zero filter technology</b></h1>
                        <h5>A new age of filtration is here. Enjoy crisp drinking water at home and on the go.</h5>
                    </div>
                    <div className="tech-img-wrapper">
                        <img src={access1} alt="tech" />
                    </div>
                    <div className="tech-right">
                        <h5><b>Pure-tasting water</b></h5>
                        <h6>
                            Pure-tasting water provides better-tasting coffee, tea, smoothies—everything—for a healthier, more sustainable lifestyle.
                            Don't settle for anything less.
                        </h6>
                    </div>
                </div>

                <div className="tech-sub-block">
                    <h5><b>Filtration for all</b></h5>
                    <h6>A new age of filtration is here. Enjoy crisp drinking water at home and on the go.</h6>
                </div>
            </div>
            <div className="product-grid">
                {[{ src: pic2, label: "LARQ Bottle PureVis™2" },
                { src: pic6, label: "LARQ Bottle Filter Straw" },
                { src: pic3, label: "LARQ Pitcher" },
                { src: pic4, label: "LARQ Bottle Filtered Swig" },
                { src: pic5, label: "LARQ Bottle Filtered Flip" }].map((item, idx) => (
                    <Link key={idx} className="product-card" to="#">
                        <img src={item.src} alt="tech"/>
                        <p>{item.label}</p>
                    </Link>
                ))}
            </div>
            <div className="tech-section tech-bg-2">
                <div className="tech-flex">
                    <div className="tech-left">
                        <h1><b>PureVis™ technology</b></h1>
                        <h5>Proprietary PureVis™ technology improves the quality of your water at home and on the go.</h5>
                    </div>
                    <div className="tech-img-wrapper">
                        <img src={tech2} alt="tech" />
                    </div>
                    <div className="tech-right">
                        <h5><b>Brilliantly clean</b></h5>
                        <h6>PureVis™ activates at the touch or self-cleans in the background to help keep your water cleaner.</h6>
                    </div>
                </div>

                <div className="tech-sub-block">
                    <h5><b>Chemical free</b></h5>
                    <h6>Non-toxic way to clean your water and bottle.</h6>
                </div>
            </div>

            <div className="product-grid">
                {[{ src: pic6, label: "LARQ Bottle Filter Straw" },
                { src: pic7, label: "LARQ Bottle Filtered Cap" },
                { src: pic8, label: "LARQ pitcher filters" },
                { src: pic2, label: "LARQ pitcher filters" },
                { src: pic4, label: "LARQ Bottle Filtered Swig" }].map((item, idx) => (
                    <Link key={idx} className="product-card" to="#">
                        <img src={item.src} alt="tech" />
                        <p>{item.label}</p>
                    </Link>
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default Technology;

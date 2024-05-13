import Nav from "../components/Nav";
import "./Home.css";
import HeroImage from '../assets/hero-images.svg'

const Home = () => {
    return (
        <div className="home">
            <main className="header">
                <Nav />
                <section className="hero-header">
                    <div className="hero-header-inner">
                        <div className="wrapper-hero-images-parent">
                            <div className="wrapper-hero-images">
                                <img
                                    className="hero-images-icon"
                                    loading="lazy"
                                    alt=""
                                    src={HeroImage}
                                />
                            </div>
                            <div className="hero-text">
                                <div className="introducing-onix-wrapper">
                                    <h3 className="introducing-onix">INTRODUCING ONIX</h3>
                                </div>
                                <h1 className="community-owned-api-of-blockch-container">
                                    <div className="community-owned">Community-owned</div>
                                    <div className="api-of-blockchains">API of blockchains.</div>
                                </h1>
                                <h1 className="onix-delivers-tamper-proof">
                                    Onix delivers tamper-proof inputs, outputs, and computations
                                    to support advanced smart contracts on any blockchain
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;

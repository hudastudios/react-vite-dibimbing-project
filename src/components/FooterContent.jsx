import "./FooterContent.css";
import platformicon from '../assets/platform-icon.png'
import shadowswirlicon from '../assets/shadowswirl.png'
import flexicon from '../assets/flexicon.png'
import logo from '../assets/logo.svg'
import stariconfour from '../assets/stariconfour.png'
import comunityicon from '../assets/comunityicon.svg'
import comunityiconone from '../assets/comunityiconone.svg'
import comunityicontwo from '../assets/comunityicontwo.svg'
import comunityiconthree from '../assets/comunityiconthree.svg'
import comunityiconfour from '../assets/comunityiconfour.svg'

const FooterContent = () => {
  return (
    <div className="footer-content">
      <div className="flex">
        <img className="platform1-icon" alt="" src={platformicon} />
        <img className="shadowswirl-icon" alt="" src={shadowswirlicon} />
        <img className="flex-icon" alt="" src={flexicon} />
      </div>
      <div className="logo-parent">
        <img className="logo-icon" loading="lazy" alt="" src={logo} />
        <div className="funding">Funding</div>
        <div className="frame-wrapper">
          <div className="community-parent">
            <div className="community">Community</div>
            <div className="technology">Technology</div>
            <div className="about-us">About us</div>
            <div className="blog">Blog</div>
            <div className="careers">Careers</div>
            <div className="contact">Contact</div>
          </div>
        </div>
      </div>
      <div className="star4-parent">
        <img className="star4-icon" alt="" src={stariconfour} />
        <div className="frame-parent">
          <div className="onix-systems-all-rights-reser-wrapper">
            <div className="onix-systems-all">
              © 2022 Onix Systems. All rights reserved.
            </div>
          </div>
          <div className="privacy-policy">Privacy policy</div>
          <div className="terms-of-use">Terms of use</div>
          <div className="community-icon-parent">
            <img
              className="community-icon"
              loading="lazy"
              alt=""
              src={comunityicon}
            />
            <img
              className="community-icon1"
              loading="lazy"
              alt=""
              src={comunityiconone}
            />
            <img
              className="community-icon2"
              loading="lazy"
              alt=""
              src={comunityicontwo}
            />
            <img
              className="community-icon3"
              loading="lazy"
              alt=""
              src={comunityiconthree}
            />
            <img
              className="community-icon4"
              loading="lazy"
              alt=""
              src={comunityiconfour}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;

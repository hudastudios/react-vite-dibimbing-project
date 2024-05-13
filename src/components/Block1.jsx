import "./Block1.css";
import bullet from '../assets/bullet.svg'
import subtract from '../assets/subtract.svg'
import subtractone from '../assets/subtractone.svg'
import platformiconfour from '../assets/platformiconfour.png'
import shadowstick from '../assets/shadowstick.png'
import stick from '../assets/stick.png'

const Block1 = () => {
  return (
    <div className="block-1">
      <div className="launch-app-button-parent">
        <div className="launch-app-button">
          <div className="text-block">
            <div className="built-by-developers-container">
              <p className="built-by-developers">Built by developers,</p>
              <p className="for-developers">for developers.</p>
            </div>
            <div className="onix-delivers-tamper-proof">
              Onix delivers tamper-proof inputs, outputs, and computations to
              support advanced smart contracts on any blockchain.
            </div>
          </div>
          <div className="list">
            <div className="li">
              <img className="bullet-icon" alt="" src={bullet} />
              <b className="fully-benefit-from">
                Fully benefit from scalable network effects
              </b>
            </div>
            <div className="li1">
              <img className="bullet-icon1" alt="" src={bullet} />
              <b className="fully-benefit-from1">
                Inherently more secure than all competitors
              </b>
            </div>
            <div className="li2">
              <img className="bullet-icon2" alt="" src={bullet} />
              <b className="fully-benefit-from2">
                More open and powerful with 0.001% downtime
              </b>
            </div>
          </div>
        </div>
        <div className="buttons">
          <div className="button-40">
            <div className="button-system">
              <div className="corner">
                <div className="subtract-wrapper">
                  <img className="subtract-icon" alt="" src={subtract} />
                </div>
                <div className="image-stick">
                  <div className="platform-shadow-star" />
                  <div className="platform-shadow-star1" />
                </div>
                <div className="subtract-container">
                  <img
                    className="subtract-icon1"
                    alt=""
                    src={subtractone}
                  />
                </div>
              </div>
              <div className="launch-app">launch app</div>
            </div>
          </div>
          <div className="read-the-docs-wrapper">
            <div className="read-the-docs">Read the docs</div>
          </div>
        </div>
      </div>
      <div className="img">
        <div className="stick-6">
          <img className="platform4-icon" alt="" src={platformiconfour} />
          <img className="shadowstick-icon" alt="" src={shadowstick} />
          <img className="stick2-icon" alt="" src={stick} />
        </div>
      </div>
    </div>
  );
};

export default Block1;

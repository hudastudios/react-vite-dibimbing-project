import "./Block.css";
import platformicon from '../assets/platformicon.png';
import shadowstaricon from '../assets/shadowstaricon.png';
import staricon from '../assets/staricon.png';
import substract from '../assets/subtract.svg';
import subtractone from '../assets/subtractone.svg'

const Block = () => {
  return (
    <div className="block-2">
      <div className="img1">
        <div className="stick-7">
          <img className="platform4-icon1" alt="" src={platformicon} />
          <img className="shadowstar-icon" alt="" src={shadowstaricon} />
          <img className="star4-icon1" alt="" src={staricon} />
        </div>
      </div>
      <div className="list-items-fully-benefit">
        <div className="text-block-wrapper">
          <div className="text-block1">
            <div className="top-blockchains-build-container">
              <p className="top-blockchains">Top blockchains</p>
              <p className="build-on-onix">build on Onix.</p>
            </div>
            <div className="onix-is-committed-container">
              <p className="onix-is-committed">
                Onix is committed to fostering the growth of Web3 applications
                by providing the infrastructure and security needed for Web3.
              </p>
              <p className="blank-line">&nbsp;</p>
              <p className="onix-believes-in">
                Onix believes in Web3 for all. Onix is a decentralised
                blockchain scaling platform that enables developers to build
                scalable user-friendly dApps with low transaction fees without
                ever sacrificing on security.
              </p>
            </div>
          </div>
        </div>
        <div className="buttons1">
          <div className="button-401">
            <div className="button-system1">
              <div className="corner1">
                <div className="subtract-frame">
                  <img className="subtract-icon2" alt="" src={substract} />
                </div>
                <div className="rectangle-parent">
                  <div className="frame-child" />
                  <div className="frame-item" />
                </div>
                <div className="subtract-wrapper1">
                  <img
                    className="subtract-icon3"
                    alt=""
                    src={subtractone}
                  />
                </div>
              </div>
              <div className="launch-app1">launch app</div>
            </div>
          </div>
          <div className="read-the-docs-container">
            <div className="read-the-docs1">Read the docs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block;

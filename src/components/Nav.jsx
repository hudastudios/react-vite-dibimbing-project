import "./Nav.css";
import logo from '../assets/logo.svg';
import subtract from '../assets/subtract.svg';
import subtrac1 from '../assets/subtractone.svg';
import menubutton from '../assets/menu-button.svg'

const Nav = () => {
    return (
        <header className="nav">
            <div className="logo-instance">
                <img className="logo-icon" loading="lazy" alt="" src={logo} />
            </div>
            <div className="button">
                <img
                    className="menu-button-icon"
                    loading="lazy"
                    alt=""
                    src={menubutton}
                />
                <div className="button-40">
                    <button className="button-system">
                        <div className="corner">
                            <div className="subtract-instance">
                                <img className="subtract-icon" alt="" src={subtract} />
                            </div>
                            <div className="button-system-instance">
                                <div className="button-system-instance-child" />
                                <div className="button-system-instance-item" />
                            </div>
                            <div className="subtract-instance1">
                                <img className="subtract-icon1" alt="" src={subtrac1} />
                            </div>
                        </div>
                        <div className="launch-app">launch app</div>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Nav;

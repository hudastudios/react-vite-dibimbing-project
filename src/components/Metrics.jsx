import "./Metrics.css";
import staricon from '../assets/staricon.png'

const Metrics = () => {
  return (
    <div className="metricswarper">
      <section className="metrics3">
        <div className="metrics4">
          <div className="number-061">
            <div className="k2">220K+</div>
            <div className="contract-creators1">Contract creators</div>
          </div>
          <div className="number-051">
            <div className="m2">$110M</div>
            <div className="avg-daily-gas1">Avg. daily gas saved</div>
          </div>
          <div className="number-041">
            <div className="div1">89</div>
            <div className="active-validators1">Active validators</div>
          </div>
          <div className="number-031">
            <div className="m3">90M+</div>
            <div className="unique-addresses1">Unique addresses</div>
          </div>
          <div className="number-021">
            <div className="k3">17.5K</div>
            <div className="delegators-on-pos1">Delegators on PoS</div>
          </div>
          <div className="number-011">
            <div className="b1">4.9B+</div>
            <div className="total-transactions1">Total transactions</div>
          </div>
        </div>
        <img className="star3-icon1" loading="lazy" alt="" src={staricon} />
      </section>
    </div>
  );
};

export default Metrics;

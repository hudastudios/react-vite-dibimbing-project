import ValuePropCardSmall from "./ValuePropCardSmall1";
import "./Solution.css";
import topfraktal from '../assets/topfraktal.png'
import topsatchel from '../assets/topsatchel.png'
import toplancer from '../assets/toplancer.png'
import topshard from '../assets/topshard.png'
import topepoc from '../assets/topepoc.png'
import topecho from '../assets/topecho.png'
import sphereicon from '../assets/sphereicon.png'
import cubeicon from '../assets/cubeicon.png'

const Solution = () => {
  return (
    <div className="solution-wrapper">
      <div className="solution">
        <main className="solution1">
          <section className="solutions">
            <div className="text-block-scaling-solution">
              <div className="scaling-solutions-amplified-wrapper">
                <h1 className="scaling-solutions-amplified">
                  Scaling solutions, amplified.
                </h1>
              </div>
              <h1 className="onixs-complete-suite">
                Onix's complete suite of blockchain-scaling solutions.
              </h1>
            </div>
            <div className="grid1">
              <div className="row-02">
                <ValuePropCardSmall
                  top1={topfraktal}
                  headline="Onix Fraktal"
                  description="EVM-compatible block sidechain, secured by a permissionless set of PoS validators."
                  oNLINE="ONLINE"
                  arrow="pending_I428:35096;198:14960;46:5845"
                />
                <ValuePropCardSmall
                  top1={topsatchel}
                  headline="Onix Satchel"
                  description="Create exchanges and marketplaces that allow anyone around the world to invest."
                  oNLINE="ONLINE"
                  arrow="pending_I428:35096;198:14961;46:5845"
                  propBackgroundColor="#ddd"
                  propColor="#89eb5b"
                  propMinWidth="37px"
                />
                <ValuePropCardSmall
                  top1={topshard}
                  headline="Onix Shard"
                  description="Bring value to gamers by letting them take their loot to another game or into the real world."
                  oNLINE="ONLINE"
                  arrow="pending_I428:35096;198:14962;46:5845"
                  propBackgroundColor="#ddd"
                  propColor="#89eb5b"
                  propMinWidth="37px"
                />
              </div>
              <div className="row-01">
                <ValuePropCardSmall
                  top1={toplancer}
                  headline="Onix Lancer"
                  description="Cryptographic proofs to connect highly accurate and available data/APIs to any smart contract."
                  oNLINE="DEVELOPMENT"
                  arrow="pending_I428:35096;198:14964;46:5845"
                  propBackgroundColor="#d9d9d9"
                  propColor="#ebb15b"
                  propMinWidth="73px"
                />
                <ValuePropCardSmall
                  top1={topecho}
                  headline="Onix Echo"
                  description="Empower your community to organize and allocate resources to its members. "
                  oNLINE="DEVELOPMENT"
                  arrow="pending_I428:35096;198:14965;46:5845"
                  propBackgroundColor="#d9d9d9"
                  propColor="#ebb15b"
                  propMinWidth="73px"
                />
                <ValuePropCardSmall
                  top1={topepoc}
                  headline="Onix Epoc"
                  description="Protect dApps from insolvency by auditing the reserves of tokens used as collateral."
                  oNLINE="VOTING"
                  arrow="pending_I428:35096;198:14966;46:5845"
                  propBackgroundColor="#d9d9d9"
                  propColor="#6f5beb"
                  propMinWidth="38px"
                />
              </div>
            </div>
            <img className="sphere2-icon" alt="" src={sphereicon} />
          </section>
          <img className="cube2-icon" alt="" src={cubeicon} />
        </main>
      </div>
    </div>
  );
};

export default Solution;

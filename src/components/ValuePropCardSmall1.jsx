import { useMemo } from "react";
import "./ValuePropCardSmall1.css";

const ValuePropCardSmall = ({
  top1,
  headline,
  description,
  oNLINE,
  arrow,
  propBackgroundColor,
  propColor,
  propMinWidth,
}) => {
  const shadow1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const oNLINE1Style = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth,
    };
  }, [propColor, propMinWidth]);

  return (
    <div className="value-prop-card-small1">
      <div className="wrapper-top3">
        <img className="top-icon5" loading="lazy" alt="" src={top1} />
      </div>
      <div className="shadow-parent1">
        <textarea
          className="shadow7"
          rows={12}
          cols={13}
          style={shadow1Style}
        />
        <div className="text-block15">
          <h1 className="headline7">{headline}</h1>
          <h2 className="description5">{description}</h2>
        </div>
      </div>
      <div className="value-prop-card-pair">
        <button className="value-prop-card-small2">
          <div className="online1" style={oNLINE1Style}>
            {oNLINE}
          </div>
        </button>
        <div className="f-r-a-m-e">
          <img className="arrow-icon7" loading="lazy" alt="" src={arrow} />
        </div>
      </div>
    </div>
  );
};

export default ValuePropCardSmall;

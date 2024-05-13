import { useMemo } from "react";
import "./ValuePropCard.css";
import arrowimage from '../assets/arrow.svg'

const ValuePropCard = ({ top1, headline, description, propColor }) => {
  const learnMoreStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="value-prop-card">
      <div className="wrapper-top">
        <img className="top-icon" loading="lazy" alt="" src={top1} />
      </div>
      <div className="shadow-parent">
        <div className="shadow" />
        <div className="text-block-card">
          <h2 className="headline">{headline}</h2>
          <div className="description">{description}</div>
        </div>
      </div>
      <div className="learn-more-parent">
        <div className="learn-more" style={learnMoreStyle}>
          Learn more
        </div>
        <div className="arrow-wrapper">
          <img className="arrow-icon" alt="" src={arrowimage} />
        </div>
      </div>
    </div>
  );
};

export default ValuePropCard;

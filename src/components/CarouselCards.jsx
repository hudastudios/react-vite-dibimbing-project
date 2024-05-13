import ValuePropCard from "./ValuePropCard";
import "./CarouselCards.css";
import cardimageone from '../assets/top@2x.png';
import cardimagetwo from '../assets/cardimageone.png';
import cardimagethree from '../assets/cardimagetwo.png';

const CarouselCards = () => {
  return (
    <div className="carousel-cards">
      <div className="cards">
        <ValuePropCard
          top1={cardimageone}
          headline="Globally-accesible, transformational API"
          description="Your data can be transformed, organized, and shared across applications for anyone to query with just a few keystrokes."
        />
        <ValuePropCard
          top1={cardimagetwo}
          headline="Resilient, automated layer security"
          description="Empower your blockchain security without sacrificing crucial resources and accessibility to its members. Empower your blockchain"
          propColor="#ebb15b"
        />
        <ValuePropCard
          top1={cardimagethree}
          headline="Seamless connection to any API tools"
          description="Your data can be transformed, organized, and shared across applications for anyone to query with just a few keystrokes."
          propColor="#89eb5b"
        />
      </div>
    </div>
  );
};

export default CarouselCards;

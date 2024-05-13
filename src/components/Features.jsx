import CarouselCards from "./CarouselCards";
import "./Features.css";

const Features = () => {
  return (
    <div className="features">
      <section className="features1">
        <h1 className="onix-makes-blockchain-container">
          <p className="onix-makes-blockchain">
            Onix makes blockchain development
          </p>
          <p className="accessible-for-everyone">accessible for everyone.</p>
        </h1>
        <CarouselCards />
      </section>
    </div>
  );
};

export default Features;

import Block1 from "./Block1";
import Block from "./Block";
import "./Frame1.css";

const Frame = () => {
  return (
    <div className="value-props-parent">
      <main className="value-props">
        <Block1 />
        <Block />
      </main>
    </div>
  );
};

export default Frame;

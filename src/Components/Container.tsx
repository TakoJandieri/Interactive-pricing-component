import "./Container.css";
import Price from "./Price";

function Container() {
  return (
    <div className="container">
      <div className="topside">
        <h1>Simple, traffic-based pricing</h1>
        <h2>
          Sign-up for our 30-day trial.
          <br className="breakline" /> No credit card required.
        </h2>
      </div>
      <Price />
    </div>
  );
}

export default Container;

import check from "../assets/icon-check.svg";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="line"></div>
        <div className="footContent">
          <div className="footFooter">
            <p>
              <img className="checkMarkIcon" alt="checkMark" src={check} />{" "}
              Unlimited websites
            </p>
            <p className="text">
              <img className="checkMarkIcon" alt="checkMark" src={check} />
              100% data ownership{" "}
            </p>
            <p>
              <img className="checkMarkIcon" alt="checkMark" src={check} />
              Email reports
            </p>
          </div>
          <button className="trialButton">Start my trial</button>
        </div>
      </div>
    </>
  );
}

export default Footer;

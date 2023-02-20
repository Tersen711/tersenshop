import React from "react";
import ".././styles/Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
        <div className="container">
            <div className="row">
                <div className="col">
                    <h4>AO GTS</h4>
                    <ul className="list-unstyled">
                        <li>+7-775-684-01-67</li>
                        <li>Astana, KZ</li>
                        <li>Mangilik El avenue, 55B</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="row">
                <p className="col-sm">
                    &copy;ТЕХНОЛОГИЧЕСКОЕ ЯДРО КИБЕРЩИТА КАЗАХСТАНА
                </p>
            </div>
        </div>
    </div>
  );
};

export default Footer;

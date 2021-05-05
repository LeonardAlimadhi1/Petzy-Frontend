import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Footer = () => {
  return (
    <footer class="ct-footer">
      <div class="container">
        <div class="ct-footer-meta text-center-sm">
          <div class="row">
            <div class="col-sm-6 col-md-2">
              <span className="footer-descriptor">Links</span>
              <br></br>

              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/team">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-md-2">
              <span className="footer-descriptor">Policies</span>
              <br></br>

              <ul>
                <li>
                  <Link to="/terms">Our Terms</Link>
                </li>
                <li>
                  <Link to="/terms">Policies</Link>
                </li>
                <li>
                  <Link to="/terms">Guarantees</Link>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-md-2">
              <span className="footer-descriptor">Others</span>
              <br></br>
              <ul>
                <li>
                  <Link to="/terms">Our Terms</Link>
                </li>
                <li>
                  <Link to="/terms">Policies</Link>
                </li>
                <li>
                  <Link to="/terms">Guarantees</Link>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-md-3 border-right hidden-xs">
              <span className="footer-descriptor">Company</span>
              <br></br>

              <address>
                Zurich, Switzerland
                <br />
                Address xxx, 32801
                <br />
                <span>
                  Phone: <a href="tel:5555555555">(555) 555-8899</a>
                </span>
              </address>
            </div>
            <div
              class="col-sm-6 col-md-3"
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column"
              }}
            >
              <p>
                Developed by
                <a href="http://www.qurve.ch" target="_blank">
                  <img
                    src="https://qurve.ch/wp-content/uploads/2019/08/qurve-black-3-uai-516x237.png"
                    width="85"
                    height="40"
                    alt="logo"
                    style={{ marginLeft: "5px" }}
                  />
                </a>
              </p>
              <br></br>
              <div class="footer-social-links mb-xs-60">
                <a href="#" title="Facebook" target="_blank">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="#" title="Twitter" target="_blank">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="#" title="LinkedIn+" target="_blank">
                  <i class="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ct-footer-post">
        <div class="container">
          <div class="inner-left">
            <ul>
              <li>
                <Link to="/terms">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/terms">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms">Shipping & Return Policy</Link>
              </li>
            </ul>
          </div>
          <div class="inner-right">
            <span>© 2019 Qurve. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

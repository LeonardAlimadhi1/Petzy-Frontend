import React, { useState } from "react";
import { useToasts } from "react-toast-notifications";
import { Link } from "react-router-dom";

import { HTTPfetch } from "../../api";
import "./styles.css";
import { HeaderBackground } from "../../components";

function Contact() {
  const { addToast } = useToasts();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    if (!email || !name || !message) {
      addToast("The fields are required!", {
        appearance: "warning",
        autoDismiss: true,
      });
    } else if (!email.match(/^[^s@]+@[^s@]+.[^s@]+$/)) {
      addToast("Not a valid email!", {
        appearance: "warning",
        autoDismiss: true,
      });
    } else {
      try {
        await HTTPfetch(`message`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ email, name, message }),
        });
        setName("");
        setEmail("");
        setMessage("");
        addToast("Message successfuly sent! Thank you for contacting us.", {
          appearance: "success",
          autoDismiss: true,
        });
      } catch (e) {
        addToast(JSON.stringify(e), {
          appearance: "warning",
          autoDismiss: true,
        });
      }
    }
  };
  return (
    <div className="page" id="top">
      <HeaderBackground nobackground />
      <section className="page-section" style={{ paddingTop: "0" }}>
        <div class="container relative">
          <div class="row mb-100">
            <div class="col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 align-center">
              <h1 class="font-alt mb-20 mb-sm-40">Have a Question?</h1>
              {/* <Underline gradient /> */}
              <div class="align-center">
                <p className="mb-20">Do not hesitate to contact us below.</p>
                <Link to="/faq">
                  <span
                    style={{
                      textDecoration: "underline",
                      color: "#317efa!important",
                    }}
                    className="highlighted"
                  >
                    OR READ OUR FAQ
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div class="row mb-60 mb-xs-40">
            <div class="col-md-8 col-md-offset-2">
              <div class="row">
                <div class="col-sm-6 col-lg-4 pt-20 pb-20 pb-xs-0">
                  <div class="contact-item">
                    <div class="ci-icon">
                      <i class="fa fa-phone" />
                    </div>
                    <div class="ci-title font-alt">Call Us</div>
                    <div class="ci-text">+0355 99 999 99 99</div>
                  </div>
                </div>

                <div class="col-sm-6 col-lg-4 pt-20 pb-20 pb-xs-0">
                  <div class="contact-item">
                    <div class="ci-icon">
                      <i class="fa fa-map-marker" />
                    </div>
                    <div class="ci-title font-alt">Address</div>
                    <div class="ci-text">Tirane, AL</div>
                  </div>
                </div>

                <div class="col-sm-6 col-lg-4 pt-20 pb-20 pb-xs-0">
                  <div class="contact-item">
                    <div class="ci-icon">
                      <i class="fa fa-envelope" />
                    </div>
                    <div class="ci-title font-alt">Email</div>
                    <div class="ci-text">info@example.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-8 col-md-offset-2">
              <div class="clearfix">
                <div class="cf-left-col">
                  <div class="form-group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      class="input-md round form-control contact-input"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div class="form-group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="input-md round form-control contact-input"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div class="cf-right-col">
                  <div class="form-group">
                    <textarea
                      name="message"
                      id="message"
                      class="input-md round form-control contact-input"
                      style={{ height: "84px" }}
                      placeholder="Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div class="clearfix">
                <div class="cf-left-col  hidden-xs">
                  <div class="form-tip pt-20">
                    <i class="fa fa-info-circle" /> All the fields are required
                  </div>
                </div>

                <div class="cf-right-col">
                  <div class="align-right pt-10">
                    <button
                      class="btn btn-mod btn-medium btn-round"
                      onClick={sendMessage}
                    >
                      Submit Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

import React, { useRef, useState } from "react";
import styles from "../styles/contact.module.css";

import {
  FiGithub,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiMessageSquare,
} from "react-icons/fi";

const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const textRef = useRef();

  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [textValue, setTextValue] = useState("");

  const submitHandler = (event) => {
    console.log(nameValue, emailValue, textValue);

    // nameRef.current.value = "";
    // emailRef.current.value = "";
    // textRef.current.value = "";
  };

  const nameChangeHandler = () => {
    setNameValue(nameRef.current.value);
  };

  const emailChangeHandler = () => {
    setEmailValue(emailRef.current.value);
  };

  const textChangeHandler = () => {
    setTextValue(textRef.current.value);
  };

  return (
    <div className={styles.body}>
      <section className={styles.contact}>
        <h1 className={styles.sectionHeader}>Contact</h1>

        <div className={styles.contactWrapper}>
          {/* <!-- Left contact page --> */}

          <form
            action="https://getform.io/f/635ebe76-d0d8-4bb5-8146-bec64904b396"
            method="POST"
            onSubmit={submitHandler}
            id="contact-form"
            className={styles.formHorizontal}
            role="form"
          >
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  onChange={nameChangeHandler}
                  type="text"
                  ref={nameRef}
                  className={styles.formControl}
                  id="name"
                  placeholder="NAME"
                  name="name"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-12">
                <input
                  onChange={emailChangeHandler}
                  type="email"
                  ref={emailRef}
                  className={styles.formControl}
                  id="email"
                  placeholder="EMAIL"
                  name="email"
                  required
                />
              </div>
            </div>

            <textarea
              onChange={textChangeHandler}
              ref={textRef}
              className={`${styles.textarea} ${styles.formControl}`}
              rows="10"
              placeholder="MESSAGE"
              name="message"
              required
            ></textarea>

            <button
              className={`btn ${styles.sendButton}`}
              id="submit"
              type="submit"
              value="SEND"
            >
              <div className={styles.altSendButton}>
                <FiMessageSquare className={styles.sendIcon}></FiMessageSquare>{" "}
                <span className={styles.sendText}>SEND</span>
              </div>
            </button>
          </form>

          {/* <!-- Left contact page --> */}

          <div
            className={
              styles.directContactContainer + `flex flex-col space-y-10`
            }
          >
            <ul className={styles.contactList + `pl-0`}>
              <li className={styles.listItem}>
                <i className="">
                  <span className={`${styles.contactText} place`}>
                    NIT Hamirpur
                  </span>
                </i>
              </li>

              <li className={styles.listItem}>
                <i className="">
                  <span className={`${styles.contactText} phone`}>
                    <a href="tel:8219266127" title="Give me a call">
                      82-192-66-127
                    </a>
                  </span>
                </i>
              </li>

              <li className={styles.listItem}>
                <i className="">
                  <span className={`${styles.contactText} gmail`}>
                    <a
                      href="mailto:20bcs018@nith.ac.in"
                      title="Send me an email"
                    >
                      20bcs018@nith.ac.in
                    </a>
                  </span>
                </i>
              </li>
            </ul>

            <ul className={styles.socialMediaList}>
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <FiGithub className={styles.icon}></FiGithub>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <FiTwitter className={styles.icon}></FiTwitter>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <FiInstagram className={styles.icon}></FiInstagram>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="contact-icon">
                  <FiLinkedin className={styles.icon}></FiLinkedin>
                </a>
              </li>
            </ul>

            <div className={styles.copyright}>
              &copy; ALL OF THE RIGHTS RESERVED
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

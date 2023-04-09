import React, { useRef, useState } from "react";
import styles from "../styles/contact.module.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { FiGithub ,FiTwitter , FiInstagram , FiLinkedin , FiMessageSquare} from "react-icons/fi"

const Contact = () => {
  const nameRef = useRef()
  const emailRef = useRef()
  const textRef = useRef()

  const [nameValue , setNameValue] = useState('')
  const [emailValue , setEmailValue] = useState('')
  const [textValue , setTextValue] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()
    console.log(nameValue , emailValue , textValue)

    nameRef.current.value = ''
    emailRef.current.value = ''
    textRef.current.value = ''
  }
  
  const nameChangeHandler= () => {
    setNameValue(nameRef.current.value)
  }
  
  const emailChangeHandler = () => {
    setEmailValue(emailRef.current.value)
  }
  
  const textChangeHandler = () => {
    setTextValue(textRef.current.value)
  }

  return (
    <div className={styles.body}>
      <section className={styles.contact}>

        <h1 className={styles.sectionHeader}>Contact</h1>

        <div className={styles.contactWrapper}>

          {/* <!-- Left contact page --> */}

          <form onSubmit={submitHandler} id="contact-form" className={styles.formHorizontal} role="form">

            <div className="form-group">
              <div className="col-sm-12">
                <input onChange={nameChangeHandler} type="text" ref={nameRef} className={styles.formControl} id="name" placeholder="NAME" name="name" required />
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-12">
                <input onChange={emailChangeHandler} type="email" ref={emailRef} className={styles.formControl} id="email" placeholder="EMAIL" name="email" required />
              </div>
            </div>

            <textarea onChange={textChangeHandler} ref={textRef} className={`${styles.textarea} ${styles.formControl}`} rows="10" placeholder="MESSAGE" name="message" required></textarea>

            <button className={`btn btn-primary ${styles.sendButton}`} id="submit" type="submit" value="SEND">
              <div className={styles.altSendButton}>
               <FiMessageSquare className={styles.sendIcon}></FiMessageSquare> <span className={styles.sendText}>SEND</span>
              </div>

            </button>

          </form>

          {/* <!-- Left contact page --> */}

          <div className={styles.directContactContainer}>

            <ul className={styles.contactList}>
              <li className={styles.listItem}><i className="fa fa-map-marker fa-2x"><span className={`${styles.contactText} place`}>City, State</span></i></li>

              <li className={styles.listItem}><i className="fa fa-phone fa-2x"><span className={`${styles.contactText} phone`}><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></i></li>

              <li className={styles.listItem}><i className="fa fa-envelope fa-2x"><span className={`${styles.contactText} gmail`}><a href="mailto:#" title="Send me an email">hitmeup@gmail.com</a></span></i></li>

            </ul>

            <hr />
            <ul className={styles.socialMediaList}>
              <li><a href="#" target="_blank" className="contact-icon">
              <FiGithub className={styles.icon}></FiGithub>
                </a>
              </li>
              <li><a href="#" target="_blank" className="contact-icon">
                <FiTwitter className={styles.icon}></FiTwitter>
              </a>
              </li>
              <li><a href="#" target="_blank" className="contact-icon">
                <FiInstagram className={styles.icon}></FiInstagram>
                </a>
              </li>
              <li><a href="#" target="_blank" className="contact-icon">
                <FiLinkedin className={styles.icon}></FiLinkedin></a>
              </li>
            </ul>
            <hr />

            <div className={styles.copyright}>&copy; ALL OF THE RIGHTS RESERVED</div>

          </div>

        </div>

      </section>


    </div>
  );
};

export default Contact;

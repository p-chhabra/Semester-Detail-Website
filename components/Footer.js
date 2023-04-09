import React from "react";
import styles from "../styles/footer.module.css";
import { FiTwitter, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer>
        <div class={styles.footer}>
          <div class={`${styles.row} flex flex-row justify-center space-x-10`}>
            <a href="#">
              <i className="hover:text-[#BB86FC]">
                <FiGithub />
              </i>
            </a>
            <a href="#">
              <i className="hover:text-[#BB86FC]">
                <FiLinkedin />
              </i>
            </a>
            <a href="#">
              <i className="hover:text-[#BB86FC]">
                <FiInstagram />
              </i>
            </a>
            <a href="#">
              <i className="hover:text-[#BB86FC]">
                <FiTwitter />
              </i>
            </a>
          </div>

          <div class={styles.row}>
            <ul>
              <li>
                <Link href="/contact">Contact us</Link>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </div>

          <div class={styles.row}>
            Copyright © 2023 All rights reserved || Designed By: Prathmesh
            Chhabra | Aaditya Gagneja | Aditya Tiwari | Jayant Saini
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

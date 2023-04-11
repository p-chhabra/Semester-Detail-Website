import React from "react";
import styles from "../styles/footer.module.css";
import { FiTwitter, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.footer}>
          <div
            className={`${styles.row} flex flex-row justify-center space-x-10`}
          >
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

          <div className={styles.row}>
            <ul>
              <li>
                <Link href="/contact">Contact us</Link>
              </li>
              <li>
                <Link href="/">All Semesters</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
            </ul>
          </div>

          <div className={styles.row}>
            Copyright © 2023 All rights reserved || Designed By: Prathmesh
            Chhabra | Aaditya Gagneja | Aditya Tiwari | Jayant Saini
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

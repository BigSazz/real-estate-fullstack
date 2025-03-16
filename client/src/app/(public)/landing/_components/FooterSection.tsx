import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const FooterSection = () => {
  return (
    <footer className="border-t border-gray-200 pt-20">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4">
            <Link href={"/"} className="text-xl font-bold" scroll={false}>
              RENTPRO
            </Link>
          </div>
          <nav className="mb-4">
            <ul className="flex space-x-6">
              <li>
                <Link href={"/"} scroll={false}>
                  About
                </Link>
              </li>
              <li>
                <Link href={"/"} scroll={false}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href={"/"} scroll={false}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href={"/"} scroll={false}>
                  Terms
                </Link>
              </li>
              <li>
                <Link href={"/"} scroll={false}>
                  Privacy
                </Link>
              </li>
            </ul>
          </nav>
          <div className="mb-4 flex space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-primary-600"
            >
              <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-primary-600"
            >
              <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-primary-600">
              <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-primary-600"
            >
              <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-primary-600">
              <FontAwesomeIcon icon={faYoutube} className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 flex justify-center space-x-4 text-center text-sm text-gray-500">
          <span>&copy; 2025 RENTPRO. All rights reserved.</span>
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms of Service</Link>
          <Link href="/">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

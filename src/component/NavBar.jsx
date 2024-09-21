import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import logoImage from '../assets/v2--45-.png';
import Button from '../component/Button';

export default function NavBar() {
    return (
    <header className="bg-transparent md:sticky top-0 fixed left-0 max-w-full z-50">
      <div className="flex items-center justify-between p-4 lg:justify-between">
        <div className="flex items-center">
          <img
            width="28"
            height="28"
            src={logoImage}
            alt="r--v2-"
            className="mr-4"
          />
          <a
            href="#home"
            className="title-font font-medium text-white"
          >
            <span className="ml-3 text-lg font-sans-serif text-white">
              Raj Kumar Singh
            </span>
          </a>
        </div>
        <nav className="hidden md:flex md:space-x-4">
          <ul className="inline-flex bg-fixed">
            <li>
          <a
            href="#about"
            className="rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
          >
            ABOUT
          </a>
          </li>
          <li>
          <a
            href="#project"
            className="rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
          >
            PROJECTS
          </a>
          </li>
          <li>
          <a
            href="#skills"
            className="rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
          >
            SKILLS
          </a>
          </li>
          <li>
          <a 
            href="#contact"
            className="rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white">
            CONTACT
          </a>
          </li>
          </ul>
        </nav>
        <div className="flex align place-items-center space-x-4 text-xl">
          <a
            href="https://www.linkedin.com/in/raj-kumar-singh-2a9635251/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white hover:text-gray-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/RajKumarSingh-in"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white hover:text-gray-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://drive.google.com/file/d/1uwngihpVHjyqKlL6wDzD7WRoyWeyva8K/view?usp=sharing"
            download="Raj-Kumar-Singh-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Resume"
            className="rounded-md px-4 py-2 text-sm font-medium text-white hover:text-white">
            <Button />
          </a>         
        </div>
      </div>
    </header>
  );
}
import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-gray-800 px-8 md:px-16 pt-16 pb-10">
      <div className="flex justify-between flex-wrap gap-10">
        {/* Logo & Contact */}
        <div className="flex flex-col gap-2 md:w-1/4">
          <h1 className="text-2xl font-bold">
            Job<span className="text-3xl text-[#fc2b2be0]">Portal</span>
          </h1>
          <a
            href="mailto:devauthorisedmail@gmail.com"
            className="hover:underline text-sm text-gray-700"
          >
            devauthorisedmail@gmail.com
          </a>
          <p className="text-sm text-gray-700">(+91) 9412000709</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm font-medium">
          <div>
            <h2 className="text-[#6A38C2] mb-2">Resources</h2>
            <ul className="space-y-1 text-gray-700">
              <li><a href="#">Career Blog</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Interview Tips</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-[#6A38C2] mb-2">Legal</h2>
            <ul className="space-y-1 text-gray-700">
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookies Policy</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-[#6A38C2] mb-2">Service</h2>
            <ul className="space-y-1 text-gray-700">
              <li><a href="#">Job Alerts</a></li>
              <li><a href="#">Career Coaching</a></li>
              <li><a href="#">Application Tracking</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-4">
        <p>© {new Date().getFullYear()} Devashish Kaushik — All rights reserved</p>
        <div className="flex gap-4 text-lg text-[#6A38C2]">
          <a href="https://www.instagram.com/devashishshsh" target="_blank" rel="noreferrer">
            <IoLogoInstagram />
          </a>
          <a href="https://www.linkedin.com/in/devashish-kaushik-612126258" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Devashish-Kaushik-DEV" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const FooterDesign= () => {
  return (
    <footer className="bg-gray-700 px-4 md:px-16 lg:px-28 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        <div>
          <h2 className="text-lg font-bold mb-5 text-white">About us</h2>
          <p className="text-gray-300">yatrisathi website</p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-5  text-white">quick link</h2>
          <ul>
            <li>
              <a href="" className="hover:underline text-gray-300">
                home
              </a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="" className="hover:underline text-gray-300">
                services
              </a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="" className="hover:underline text-gray-300">
                contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-5  text-white">Follow us</h2>

          <ul className="flex space-x-4">
            <li>
              {" "}
              <FaFacebookF className="text-blue-600" />
              <a href="" className="hover:underline text-gray-300">
                Facebook
              </a>
            </li>
          </ul>

          <ul>
            <li>
              <FaTwitter className="text-sky-300" />
              <a href="" className="hover:underline text-gray-300">
                Twitter
              </a>
            </li>
          </ul>

          <ul>
            <li>
              <FaInstagram className="text-red-400" />
              <a href="" className="hover:underline text-gray-300">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border border-gray-400 p-2  text-white text-center mt-6 ">
        <p> &copy; All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterDesign;



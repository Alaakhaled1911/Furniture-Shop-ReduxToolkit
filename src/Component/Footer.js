import { BsFacebook } from "react-icons/bs";

import { AiFillGithub } from "react-icons/ai";

import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

import { BsWhatsapp } from "react-icons/bs";

import "./footer.css";

const Footer = () => {
  return (
    <div class="bg-blackk text-gray-600 py-20 font-titleFont ">
      <div class="max-w-screen-xl mx-auto grid grid-cols-4">
        <div className="flex gap-4 text-lg text-gray-400">
          <BsFacebook className="hover:text-white duration-300 cursor-pointer" />
          <AiFillGithub className="hover:text-white duration-300 cursor-pointer" />
          <AiFillLinkedin className="hover:text-white duration-300 cursor-pointer" />
          <AiOutlineTwitter className="hover:text-white duration-300 cursor-pointer" />
          <BsWhatsapp className="hover:text-white duration-300 cursor-pointer" />
        </div>
        <div>
          <h2 class="text-2xl font-semibold mb-4">Locate us</h2>
          <div class="text-base flex flex-col gap-2">
            <p>MBD, RAB, Alex-EGYPT</p>
            <p>Mobile: 035060823</p>
            <p>Phone: 01228513749</p>
            <p>e-mail: Laptop@gmail.com</p>
          </div>
        </div>
        <div class="profile">
          <h2 class="text-2xl font-semibold text-white mb-4">Profile</h2>
          <div class="flex flex-col gap-2 text-base">
            <p class="flex items-center gap-3">
              <span>
                <i class="fas fa-user"></i>
              </span>
              my account
            </p>
            <p class="flex items-center gap-3">
              <span>
                <i class="fas fa-inbox"></i>
              </span>
              Check OUT
            </p>
            <p class="flex items-center gap-3">
              <span>
                <i class="fas fa-dingtalk"></i>
              </span>
              Orders
            </p>
            <p class="flex items-center gap-3">
              <span>
                <i class="fas fa-heart"></i>
              </span>
              help
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

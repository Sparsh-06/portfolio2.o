import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faLayerGroup, faPenNib, faU } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faInstagram, faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <div className="lg:flex hidden md:hidden w-[480px] h-screen justify-center py-12 px-5 flex-col sticky top-0">
      <div className="flex h-full w-full p-6 gap-2 rounded-lg list-none text-[#8b8a91] bg-[#1C1B23] relative flex-col text-[16px] cursor-pointer  overflow-y-auto custom-scrollbar">
        <li className="p-3 pl-6 hover:translate-y-[-2px] duration-150"><FontAwesomeIcon icon={faHouse} size="lg" className="mr-2" /> Home </li>
        <li className="p-3 pl-6 hover:translate-y-[-2px] duration-150"><FontAwesomeIcon icon={faUser} size="lg"  className="mr-2"  /> About Me </li>
        <li className="p-3 pl-6 hover:translate-y-[-2px] duration-150"><FontAwesomeIcon icon={faLayerGroup} size="lg" className="mr-2"  /> Stacks </li>
        <li className="p-3 pl-6 hover:translate-y-[-2px] duration-150"><FontAwesomeIcon icon={faPenNib} size="lg" className="mr-2"/> Projects </li>
        <h2 className="my-4">Socials</h2>
        <li className="p-3 pl-6 hover:translate-y-[-2px] duration-150"><FontAwesomeIcon icon={faInstagram} size="xl" color="purple" className="mr-2" /> Instagram </li>
        <li className="p-3 pl-[22px] hover:translate-y-[-2px] duration-150"><FontAwesomeIcon icon={faXTwitter} size="xl" color="blue" className="mr-2"  /> Twitter / X </li>
        <li className="p-3 pl-6 hover:translate-y-[-2px] duration-150"><FontAwesomeIcon icon={faLinkedinIn} size="xl" color="lightblue" className="mr-2"  /> Linkedln </li>
        <li className="p-3 pl-6 hover:translate-y-[-2px] duration-150"><FontAwesomeIcon icon={faU} size="xl" color="green" className="mr-2"/> Upwork </li>
        <li className="p-3 pl-6 hover:translate-y-[-2px] duration-150"><FontAwesomeIcon icon={faGithub} size="xl" color="black" className="mr-2"/> Github </li>

      </div>
    </div>
  );
};

export default Sidebar;

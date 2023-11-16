import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faLayerGroup,
  faPenNib,
  faU,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const DrawerSidebar = () => {
  return (
    <div className="w-80 flex justify-start p-10 bg-[#14131A] text-white h-screen" role="presentation">
      <List>
        <ListItem>
          <FontAwesomeIcon icon={faHouse} size="lg" className="mr-2" />
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem>
          <FontAwesomeIcon icon={faUser} size="lg" className="mr-2" />
          <ListItemText primary="About Me" />
        </ListItem>
        <ListItem>
          <FontAwesomeIcon icon={faLayerGroup} size="lg" className="mr-2" />
          <ListItemText primary="Stacks" />
        </ListItem>
        <ListItem>
          <FontAwesomeIcon icon={faPenNib} size="lg" className="mr-2" />
          <ListItemText primary="Projects" />
        </ListItem>
        <h2 className="my-4">Socials</h2>
        <ListItem>
          <FontAwesomeIcon
            icon={faInstagram}
            size="xl"
            color="purple"
            className="mr-2"
          />
          <ListItemText primary="Instagram" />
        </ListItem>
        <ListItem>
          <FontAwesomeIcon
            icon={faXTwitter}
            size="xl"
            color="blue"
            className="mr-2"
          />
          <ListItemText primary="Twitter / X" />
        </ListItem>
        <ListItem>
          <FontAwesomeIcon
            icon={faLinkedinIn}
            size="xl"
            color="lightblue"
            className="mr-2"
          />
          <ListItemText primary="Linkedln" />
        </ListItem>
        <ListItem>
          <FontAwesomeIcon icon={faU} size="xl" color="green" className="mr-2" />
          <ListItemText primary="Upwork" />
        </ListItem>
        <ListItem>
          <FontAwesomeIcon
            icon={faGithub}
            size="xl"
            color="black"
            className="mr-2"
          />
          <ListItemText primary="Github" />
        </ListItem>
      </List>
    </div>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseDrawer = () => {
    setMenuOpen(false);
  };

  return (
    <div className="flex justify-end items-center h-16 sticky w-full top-0 bg-[#14131A] z-50 mb-4">
      <button className="bg-lime-500 p-1.5 px-2 rounded-md mr-20 text-sm">
        Contact Me
      </button>
      <div
        className="hamburger flex mr-11 lg:hidden text-white cursor-pointer"
        onClick={handleMenuClick}
      >
        {menuOpen ? (
          <CloseIcon fontSize="medium" />
        ) : (
          <MenuIcon fontSize="medium" />
        )}
      </div>
      <Drawer
        anchor="right"
        open={menuOpen}
        onClose={handleCloseDrawer}
        ModalProps={{ BackdropProps: { invisible: true } }}
      >
        <DrawerSidebar />
      </Drawer>
    </div>
  );
};

export default Navbar;

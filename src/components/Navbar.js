'use client'
import { Box, Button, Drawer, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import BrandLogo from "./icons/brand_logo.png"
const Navbar = () => {
  const [showBackground, setShowBackground] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const TOP_OFFSET = 1000;
  useEffect(() => {
    // const handleScroll = () => {
    //   if (window.scrollY >= TOP_OFFSET) {
    //     setShowBackground(true);
    //   } else {
    //     setShowBackground(false);
    //   }
    // };
    // window.addEventListener("scroll", handleScroll);
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);
  return (
    <Box
      position={"fixed"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      top={0}
      // p={"10px 0"}
      zIndex={100}
      width={"100%"}
      boxShadow={"rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"}
      bgcolor={setShowBackground ? "#FFF" : "#fff"}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        className={"global_width"}
      >
        <Box display={"flex"} alignItems={"center"} gap={"10px"}>
          <img
            style={{
              borderRadius: "50px",
              width: "80px",
              height: "80px",
              objectFit: "cover",
            }}
            src={BrandLogo.src}
            alt="logo"
          />
          <Typography variant="p" color={"#7947df"} fontSize={"14px"}>
            Prathamesh Chavan
          </Typography>
        </Box>
        <Box
          display={["none", "none", "flex", "flex"]}
          alignItems={"center"}
          gap={"30px"}
        >
          <Typography variant="p" className="hover-underline-animation">
            Home
          </Typography>
          <Typography variant="p" className="hover-underline-animation">
            About
          </Typography>
          <Typography variant="p" className="hover-underline-animation">
            Projects
          </Typography>
          <Typography variant="p" className="hover-underline-animation">
            Contact
          </Typography>
        </Box>
        <Box display={["flex", "flex", "none", "none"]}>
          <MenuIcon
            sx={{ cursor: "pointer" }}
            onClick={() => setOpenDrawer(true)}
          />
        </Box>
      </Box>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Box
          sx={{
            width: "300px",
            height: "100%",
            color: "#fff",
          }}
          className={"gradient-bg"}
        >
          <Box display={"flex"} justifyContent={"right"} m={"10px"}>
            {" "}
            <CloseIcon
              sx={{ cursor: "pointer" }}
              onClick={() => setOpenDrawer(false)}
            />
          </Box>

          <ul className="drawer-menu-items">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;

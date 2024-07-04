import { Box, IconButton } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Box sx={{ position: "relative" }}>
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;

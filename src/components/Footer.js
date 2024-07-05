"use client";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FavoriteIcon from '@mui/icons-material/Favorite';
const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#2a1454", display:"flex", gap:"20px", flexDirection:"column", padding:"20px"}}>
      <Box className="social-media-container-footer" item xs={12} md={6}>
        <IconButton className="outlined-icon-btn-footer">
          <TwitterIcon />
        </IconButton>
        <IconButton className="outlined-icon-btn-footer">
          <LinkedInIcon />
        </IconButton>
        <IconButton className="outlined-icon-btn-footer">
          <GitHubIcon />
        </IconButton>
      </Box>
      <Box display={"flex"} justifyContent={"center"} color={"#fff"} alignItems={"center"}>
        <Typography><FavoriteIcon sx={{color:"red", mb:"-7px"}}/> Made with love by Prathamesh Chavan</Typography>
      </Box>
    </Box>
  );
};

export default Footer;

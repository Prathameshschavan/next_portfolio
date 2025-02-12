/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/Layout";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DP from "../components/icons/display_profile.jpg";
import React from "react";
import TypewriterEffect from "@/components/TypeWriter";
import SocialAndCV from "@/components/SocialAndCV";

const Landing = () => {
  const numerics = [
    { desc1: "Years of", desc2: "Experience", number: 2 },
    { desc1: "Project", desc2: "Completed", number: 5 },
    { desc1: "Happy", desc2: "Client", number: 4 },
    { desc1: "Certification", desc2: "Acquired", number: 3 },
  ];

  return (
    <Box
      width={"100%"}
      height={"100%"}
      position={"relative"}
      id="home"
      // border={"2px solid red"}
    >
      <Box height={"100%"} className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </Box>

      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
        pt={["100px", "100px", "100px", "130px"]}
        position={"relative"}
        // border={"2px solid red"}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          className="context global_width"
        >
          <Box className="global_width">
            <Box>
              <Grid container>
                <Grid item xs={12} md={6} lg={6}>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    height={"100%"}
                    justifyContent={"center"}
                    alignItems={"start"}
                  >
                    <Typography
                      fontWeight={"bolder"}
                      fontSize={["1.5rem", "1.5rem", "1.5rem", "2rem"]}
                      variant="h6"
                    >
                      I am Prathamesh Chavan
                    </Typography>
                    <Box
                      sx={{
                        height: ["auto", "130px", "130px", "180px"],
                        width: ["auto", "400px", "400px", "auto"],
                      }}
                    >
                      <TypewriterEffect />
                    </Box>

                    <Typography
                      mt={"10px"}
                      fontSize={["0.8rem", "1rem", "1rem", "1rem"]}
                      color={"gray"}
                      variant="p"
                    >
                      I break down complex user experience problems to create
                      thoughtful solutions that enhance user engagement.
                    </Typography>

                    <SocialAndCV />
                  </Box>
                </Grid>
                <Grid
                  item
                  mt={["50px", "50px", "0px", "0px"]}
                  xs={12}
                  md={6}
                  lg={6}
                >
                  <Box textAlign={"center"}>
                    <img className="tilt-img" src={DP.src} alt="my-pic" />
                  </Box>
                </Grid>
                <Grid
                  className="small-screen-outline-btn-container"
                  item
                  xs={12}
                  md={12}
                  lg={6}
                  mt={"1rem"}
                ></Grid>
              </Grid>
            </Box>

            <Grid
              mt={"8%"}
              mb={"8%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              color={"#8750f7"}
              container
              spacing={"50px"}
            >
              {numerics.map((num, key) => (
                <Grid key={key} item xs={12} sm={6} lg={3}>
                  <Box
                    display={"flex"}
                    gap={"15px"}
                    // width={"200px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Typography fontWeight={"bold"} fontSize={"70px"}>
                      {num.number}+
                    </Typography>
                    <Typography fontSize={"18px"} variant="p">
                      {num.desc1} <br /> {num.desc2}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Landing;

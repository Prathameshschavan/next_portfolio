import Layout from "@/components/Layout";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";

const Landing = () => (
  <Box
    width={"100%"}
    display={"flex"}
    justifyContent={"center"}
    mt={["100px", "100px", "190px", "190px"]}
  >
    <Box
      // minWidth={["250px", "800px", "1000px", "1200px"]}
      // maxWidth={["1000px"]}
      className="global_width"
    >
      <Box>
        <Grid container>
          <Grid item xs={12} md={12} lg={6}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              height={"100%"}
              justifyContent={"center"}
              alignItems={"start"}
            >
              <Typography
                fontWeight={"bolder"}
                fontSize={["25px", "25px", "25px", "30px"]}
                variant="h6"
                color={"#2a1454"}
              >
                I am Prathamesh
              </Typography>
              <Typography
                fontWeight={"bolder"}
                fontSize={["50px", "50px", "55px", "70px"]}
                variant="h5"
                className="gradient-font"
              >
                Full Stack <br /> Web Developer
              </Typography>
              <Typography
                mt={"10px"}
                fontSize={["15px", "20px", "20px", "20px"]}
                color={"gray"}
                variant="p"
              >
                I break down complex user experinece problems to create
                integritiy focussed solutions that connect billions of people
              </Typography>
            </Box>
          </Grid>
          <Grid item mt={["50px", "50px", "0px", "0px"]} xs={12} md={12} lg={6}>
            <Box textAlign={"center"}>
              <img
                className="tilt-img"
                src="https://i.pinimg.com/736x/e9/d5/d5/e9d5d525d1630f1c1c903161e155c7dc.jpg"
                alt="my-pic"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Box
              mt={"60px"}
              gap={"10px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Grid container >
                <Grid
                  display={"flex"}
                  justifyContent={"center"}
               
                  item
                  xs={12}
                  md={6}
                >
                  <Button
                    className="outlined-btn"
                    variant="outlined"
                    endIcon={<DownloadIcon />}
                    size="large"
                  >
                    Download CV
                  </Button>
                </Grid>
                <Grid
                  className="social-media-container"
                  item
                  xs={12}
                  md={6}
                >
                  <IconButton className="outlined-icon-btn">
                    <TwitterIcon />
                  </IconButton>
                  <IconButton className="outlined-icon-btn">
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton className="outlined-icon-btn">
                    <GitHubIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Grid
        mt={"8%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        color={"#8750f7"}
        container
        spacing={"50px"}
      >
        {[0,0,0,0].map((item, key)=><Grid key={key} item xs={12} md={6} lg={3}>
          <Box
            display={"flex"}
            gap={"15px"}
            // width={"200px"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography fontWeight={"bold"} fontSize={"70px"}>
              14+
            </Typography>
            <Typography fontSize={"18px"} variant="p">
              Years of <br/> Experience
            </Typography>
          </Box>
        </Grid>)}

        {/* <Grid  item xs={12} md={6} lg={3}>
          <Box
            display={"flex"}
            gap={"15px"}
            // width={"200px"}
            alignItems={"center"}
            justifyContent={"center"}
         
          >
            <Typography fontWeight={"bold"} fontSize={["60px", "60px", "75px", "70px"]}>
              10+
            </Typography>
            <Typography fontSize={["15px", "15px", "18px", "18px"]} variant="p">
              Project <br/> Completed
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Box
            display={"flex"}
            gap={"15px"}
            // width={"200px"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography fontWeight={"bold"} fontSize={["60px", "60px", "75px", "70px"]}>
              10+
            </Typography>
            <Typography fontSize={["15px", "15px", "18px", "18px"]} variant="p">
              Happy <br/> Clients
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Box
            display={"flex"}
            gap={"15px"}
            // width={"200px"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography fontWeight={"bold"} fontSize={["60px", "60px", "75px", "70px"]}>
              1+
            </Typography>
            <Typography fontSize={["15px", "15px", "18px", "18px"]} variant="p">
              Years of <br/> Experience
            </Typography>
          </Box>
        </Grid> */}
      </Grid>
    </Box>
  </Box>
);

export default Landing;

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
    height={["100%", "100%", "100%", "100%"]}
    position={"relative"}
  >
    <Box height={["100%", "100%", "100%", "100%"]} className="area">
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
    >
      <Box display={"flex"}
      justifyContent={"center"}  class="context global_width">
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
                    color={"#2a1454"}
                  >
                    I am Prathamesh
                  </Typography>
                  <Typography
                    fontWeight={"bolder"}
                    fontSize={["2.5rem", "3rem", "3rem", "4rem"]}
                    variant="h5"
                    className="gradient-font"
                  >
                    Full Stack Web Deveper
                  </Typography>
                  <Typography
                    mt={"10px"}
                    fontSize={["0.8rem", "1rem", "1rem", "1rem"]}
                    color={"gray"}
                    variant="p"
                  >
                    I break down complex user experinece problems to create
                    integritiy focussed solutions that connect billions of
                    people
                  </Typography>

                  <Box
                    mt={"30px"}
                    gap={"10px"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    className={"big-screen-outline-btn-container"}
                  >
                    <Grid spacing={1} container>
                      <Grid
                        display={"flex"}
                        justifyContent={"center"}
                        item
                        xs={6}
                        md={6}
                      >
                        <Button
                          className="outlined-btn"
                          variant="outlined"
                          endIcon={<DownloadIcon />}
                        >
                          Download CV
                        </Button>
                      </Grid>
                      <Grid
                        className="social-media-container"
                        item
                        xs={6}
                        md={6}
                      >
                        <IconButton target="_blank" href="https://x.com/Prathamesh_2117" className="outlined-icon-btn">
                          <TwitterIcon sx={{ fontSize: "20px" }} />
                        </IconButton>
                        <IconButton target="_blank" href="https://www.linkedin.com/in/prathamesh-chavan-5532261b4/" className="outlined-icon-btn">
                          <LinkedInIcon sx={{ fontSize: "20px" }} />
                        </IconButton>
                        <IconButton target="_blank" href="https://github.com/Prathameshschavan" className="outlined-icon-btn">
                          <GitHubIcon sx={{ fontSize: "20px" }} />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Box>
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
                  <img
                    className="tilt-img"
                    src="https://i.pinimg.com/736x/e9/d5/d5/e9d5d525d1630f1c1c903161e155c7dc.jpg"
                    alt="my-pic"
                  />
                </Box>
              </Grid>
              <Grid
                className="small-screen-outline-btn-container"
                item
                xs={12}
                md={12}
                lg={6}
                mt={"1rem"}
              >
                <Box
                  mt={"30px"}
                  gap={"10px"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Grid spacing={1} container>
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
                        <TwitterIcon sx={{ fontSize: "20px" }} />
                      </IconButton>
                      <IconButton className="outlined-icon-btn">
                        <LinkedInIcon sx={{ fontSize: "20px" }} />
                      </IconButton>
                      <IconButton className="outlined-icon-btn">
                        <GitHubIcon sx={{ fontSize: "20px" }} />
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
            {[0, 0, 0, 0].map((item, key) => (
              <Grid key={key} item xs={12} md={6} lg={3}>
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
                    Years of <br /> Experience
                  </Typography>
                </Box>
              </Grid>
            ))}

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
    </Box>
  </Box>
);

export default Landing;

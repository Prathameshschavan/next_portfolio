import Layout from "@/components/Layout";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import EastIcon from "@mui/icons-material/East";
const Service = () => {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      mt={"45px"}
      p={"4% 0"}
      bgcolor={"#f6f3fc"}
    >
      <Box className="global_width">
        <Box textAlign={"center"} margin={"auto"} mb={"30px"}>
          <Typography className="gradient-font heading" variant="h5">
            {" "}
            My Quality Services
          </Typography>
          <Typography fontSize={"14px"}>
            We put your ideas and thus your wishes in the form of a unique web
            project <br /> that inspires you and you customers.
          </Typography>
        </Box>

        <Box>
          {[0, 0, 0, 0].map((item, key) => (
            <Box data-aos="fade-up" data-aos-duration="2000" key={key}>
              <Box className="service-container big-device-service-container">
                <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                  <Typography className="service-header" variant="h6">
                    01
                  </Typography>
                  <Typography className="service-header" fontSize={"25px"}>
                    Brand Designing
                  </Typography>
                </Box>
                <Box>
                  <Typography className="service-info">
                    I break down complex user experinece problems to create
                    integritiy focussed solutions that connect billions of
                    people
                  </Typography>
                </Box>
                <Box>
                  <EastIcon className="service-arrow" />
                </Box>
              </Box>

              <Box className="service-container  small-device-service-container">
                <Box display={"flex"} alignItems={"center"} mb={"10px"}  justifyContent={"space-between"}>
                  <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                    <Typography className="service-header" variant="h6">
                      01
                    </Typography>
                    <Typography className="service-header" fontSize={"25px"}>
                      Brand Designing
                    </Typography>
                  </Box>
                  <Box>
                    <EastIcon className="service-arrow" />
                  </Box>
                </Box>
                <Box>
                  <Typography className="service-info">
                    I break down complex user experinece problems to create
                    integritiy focussed solutions that connect billions of
                    people
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Service;

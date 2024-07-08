import Layout from "@/components/Layout";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import EastIcon from "@mui/icons-material/East";
const Service = () => {
  const qualities = [
    {
      title: "Web Development",
      desc: "I develop responsive and dynamic websites tailored to your specific needs, ensuring a seamless user experience across all devices.",
    },
    {
      title: "Brand Designing",
      desc: "I create unique and memorable brand identities that resonate with your target audience and communicate your core values.",
    },
    {
      title: "UI/UX Design",
      desc: "I design intuitive and engaging user interfaces and experiences that enhance user satisfaction and drive conversions.",
    },
    {
      title: "E-commerce Solutions",
      desc: "I build robust e-commerce platforms that offer a seamless shopping experience, integrating payment gateways, inventory management, and customer support.",
    },
  ];
  return (
    <Box
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
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
          {qualities.map((quality, key) => (
            <Box data-aos="fade-up" data-aos-duration="2000" key={key}>
              <Box className="service-container big-device-service-container">
                <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                  <Typography className="service-header" variant="h6">
                    {"0" + (key + 1)}
                  </Typography>
                  <Typography
                    sx={{ whiteSpace: "nowrap", width: "250px" }}
                    className="service-header"
                    fontSize={"25px"}
                  >
                    {quality.title}
                  </Typography>
                </Box>
                <Box>
                  <Typography className="service-info">
                    {quality.desc}
                  </Typography>
                </Box>
                <Box>
                  <EastIcon className="service-arrow" />
                </Box>
              </Box>

              <Box className="service-container  small-device-service-container">
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  mb={"10px"}
                  justifyContent={"space-between"}
                >
                  <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                    <Typography className="service-header" variant="h6">
                      {"0" + (key + 1)}
                    </Typography>
                    <Typography className="service-header" fontSize={"25px"}>
                      {quality.title}
                    </Typography>
                  </Box>
                  <Box>
                    <EastIcon className="service-arrow" />
                  </Box>
                </Box>
                <Box>
                  <Typography className="service-info">
                    {quality.desc}
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

import Layout from "@/components/Layout";
import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import CallIcon from "@mui/icons-material/Call";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const Contact = () => {
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
        <Grid container>
          <Grid item lg={6} md={12} sm={12}>
            <Box
              data-aos="fade-right"
              data-aos-duration="2000"
              padding={"40px"}
              borderRadius={"20px"}
              bgcolor={"#fff"}
              mb="30px"
            >
              <Box mb={"20px"}>
                <Typography className="gradient-font heading" variant="h5">
                  Let’s work together!
                </Typography>
                <Typography fontSize={"14px"}>
                  I design and code beautifully simple things and i love what i
                  do. Just simple like that!
                </Typography>
              </Box>
              <form>
                <Grid container spacing={2}>
                  <Grid item sm={6} xs={6}>
                    <TextField fullWidth placeholder="First name" />
                  </Grid>
                  <Grid item sm={6} xs={6}>
                    <TextField fullWidth placeholder="Last name" />
                  </Grid>
                  <Grid item sm={6} xs={6}>
                    <TextField fullWidth placeholder="Email address" />
                  </Grid>
                  <Grid item sm={6} xs={6}>
                    <TextField fullWidth placeholder="Phone number" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={8}
                      placeholder="Message"
                    />
                  </Grid>
                </Grid>
                <Button
                  className="gradient-bg"
                  sx={{
                    color: "#fff",
                    borderRadius: "50px",
                    mt: "20px",
                  }}
                  variant="outlined"
                  size="large"
                >
                  Send Message
                </Button>
              </form>
            </Box>
          </Grid>

          <Grid width={"100%"} item lg={6} md={12} sm={12}>
            <Box
              width={"100%"}
              height={"100%"}
              display={"flex"}
              alignItems={["start", "start", "center", "start"]}
              justifyContent={["center", "center", "space-between", "center"]}
              flexDirection={["column", "column", "row", "column"]}
              gap={"20px"}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"left"}
                gap={"10px"}
                data-aos="fade-left"
                data-aos-duration="2000"
                ml={[0, 0, 0, "25%"]}
              >
                <Box>
                  <IconButton
                    className="gradient-bg pointer"
                    sx={{
                      color: "#fff",
                      width: "60px",
                      height: "60px",
                    }}
                    href="tel:+919860204367"
                  >
                    <CallIcon />
                  </IconButton>
                </Box>
                <Box>
                  <Box sx={{ marginLeft: "10px" }}>
                    <Typography
                      variant="p"
                      fontSize={["15px", "15px", "15px", "18px"]}
                    >
                      Phone
                    </Typography>
                    <Typography
                      onClick={() => {
                        window.open("tel:+919860204367");
                      }}
                      variant="h6"
                      className="pointer"
                      fontSize={["18px", "18px", "18px", "22px"]}
                    >
                      +91 9860204367
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={"10px"}
                data-aos="fade-left"
                data-aos-duration="2000"
                ml={[0, 0, 0, "25%"]}
              >
                <Box>
                  <IconButton
                    className="gradient-bg pointer"
                    sx={{
                      color: "#fff",
                      width: "60px",
                      height: "60px",
                    }}
                    href="mailto:prathameshschavan.work@gmail.com"
                  >
                    <AlternateEmailIcon />
                  </IconButton>
                </Box>
                <Box>
                  <Box sx={{ marginLeft: "10px" }}>
                    <Typography
                      variant="p"
                      fontSize={["15px", "15px", "15px", "18px"]}
                    >
                      Email
                    </Typography>
                    <Typography
                      variant="h6"
                      fontSize={["18px", "18px", "18px", "22px"]}
                      onClick={() => {
                        window.open("mailto:prathameshschavan.work@gmail.com");
                      }}
                      className="pointer"
                    >
                      cprathamesh94@gmail.com
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={"10px"}
                data-aos="fade-left"
                data-aos-duration="2000"
                ml={[0, 0, 0, "25%"]}
              >
                <Box>
                  <IconButton
                    className="gradient-bg pointer"
                    sx={{
                      color: "#fff",
                      width: "60px",
                      height: "60px",
                    }}
                    target="_blank"
                    href="https://www.google.com/maps/place/Virar,+Maharashtra/@19.462578,72.7637375,13z/data=!3m1!4b1!4m6!3m5!1s0x3be7aa23dce7efbf:0x99bd87871748d8f4!8m2!3d19.4563596!4d72.7924612!16zL20vMDQxYmdr?entry=ttu"
                  >
                    <LocationOnIcon />
                  </IconButton>
                </Box>
                <Box>
                  <Box sx={{ marginLeft: "10px" }}>
                    <Typography
                      variant="p"
                      fontSize={["15px", "15px", "15px", "18px"]}
                    >
                      Address
                    </Typography>
                    <Typography
                      variant="h6"
                      fontSize={["18px", "18px", "18px", "22px"]}
                      onClick={() => {
                        window.open(
                          "https://www.google.com/maps/place/Virar,+Maharashtra/@19.462578,72.7637375,13z/data=!3m1!4b1!4m6!3m5!1s0x3be7aa23dce7efbf:0x99bd87871748d8f4!8m2!3d19.4563596!4d72.7924612!16zL20vMDQxYmdr?entry=ttu",
                          "_blank"
                        );
                      }}
                      className="pointer"
                    >
                      Virar, Mumbai, India
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;

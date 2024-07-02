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
      <Box minWidth={"1200px"} maxWidth={"1000px"}>
        <Grid container>
          <Grid item md={6} sm={12}>
            <Box
              data-aos="fade-right"
              data-aos-duration="2000"
              padding={"40px"}
              borderRadius={"20px"}
              bgcolor={"#fff"}
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
                  <Grid item sm={6}>
                    <TextField fullWidth placeholder="First name" />
                  </Grid>
                  <Grid item sm={6}>
                    <TextField fullWidth placeholder="Last name" />
                  </Grid>
                  <Grid item sm={6}>
                    <TextField fullWidth placeholder="Email address" />
                  </Grid>
                  <Grid item sm={6}>
                    <TextField fullWidth placeholder="Phone number" />
                  </Grid>
                  <Grid item sm={12}>
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

          <Grid item md={6} sm={12}>
            <Box
              width={"100%"}
              height={"100%"}
              display={"flex"}
              alignItems={"start"}
              justifyContent={"center"}
              flexDirection={"column"}
              gap={"20px"}
              paddingLeft={"25%"}
             
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={"10px"}
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <Box>
                  <IconButton
                    className="gradient-bg"
                    sx={{
                      color: "#fff",
                      width: "60px",
                      height: "60px",
                    }}
                  >
                    <CallIcon />
                  </IconButton>
                </Box>
                <Box>
                  <Box sx={{ marginLeft: "10px" }}>
                    <Typography variant="p" fontSize={"18px"}>
                      Phone
                    </Typography>
                    <Typography variant="h6" fontSize={"22px"}>
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
              >
                <Box>
                  <IconButton
                    className="gradient-bg"
                    sx={{
                      color: "#fff",
                      width: "60px",
                      height: "60px",
                    }}
                  >
                    <AlternateEmailIcon />
                  </IconButton>
                </Box>
                <Box>
                  <Box sx={{ marginLeft: "10px" }}>
                    <Typography variant="p" fontSize={"18px"}>
                      Email
                    </Typography>
                    <Typography variant="h6" fontSize={"22px"}>
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
              >
                <Box>
                  <IconButton
                    className="gradient-bg"
                    sx={{
                      color: "#fff",
                      width: "60px",
                      height: "60px",
                    }}
                  >
                    <LocationOnIcon />
                  </IconButton>
                </Box>
                <Box>
                  <Box sx={{ marginLeft: "10px" }}>
                    <Typography variant="p" fontSize={"18px"}>
                      Address
                    </Typography>
                    <Typography variant="h6" fontSize={"22px"}>
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

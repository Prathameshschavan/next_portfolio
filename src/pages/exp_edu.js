import Layout from "@/components/Layout";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SchoolIcon from "@mui/icons-material/School";
const Exp_Edu = () => {
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
        <Grid container spacing={10}>
          <Grid item md={6} sm={12}>
            <Box
              textAlign={"center"}
              margin={"auto"}
              width={"100%"}
              mb={"30px"}
            >
              <Typography className="gradient-font heading" variant="h5">
                <EmojiEventsIcon
                  sx={{
                    fontSize: "50px",
                    color: "#7947df",
                    mb: "-10px",
                    mr: "10px",
                  }}
                />
                My Experience
              </Typography>

              {[1, 2, 3, 4].map((item) => (
                <Box
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  key={item}
                  className="exp_edu_card"
                >
                  <Typography className="exp_edu_duration" variant="h6">
                    2022 - Present
                  </Typography>
                  <Typography className="exp_edu_title" variant="h5">
                    LEAD DEVELOPER
                  </Typography>
                  <Typography className="exp_edu_desc" variant="p">
                    Blockdots, London
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid item md={6} sm={12}>
            <Box
              textAlign={"center"}
              margin={"auto"}
              width={"100%"}
              mb={"30px"}
            >
              <Typography className="gradient-font heading" variant="h5">
                <SchoolIcon
                  sx={{
                    fontSize: "50px",
                    color: "#7947df",
                    mb: "-10px",
                    mr: "10px",
                  }}
                />
                My Education
              </Typography>

              {[1, 2, 3, 4].map((item) => (
                <Box
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  key={item}
                  className="exp_edu_card"
                >
                  <Typography className="exp_edu_duration" variant="h6">
                    2022 - Present
                  </Typography>
                  <Typography className="exp_edu_title" variant="h5">
                    LEAD DEVELOPER
                  </Typography>
                  <Typography className="exp_edu_desc" variant="p">
                    Blockdots, London
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Exp_Edu;

import Layout from "@/components/Layout";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SchoolIcon from "@mui/icons-material/School";
const Exp_Edu = () => {
  const experience = [
    {
      year: "Feb 2023 - Present",
      designation: "MERN stack developer",
      location: "Noida, Sector 63",
    },
    {
      year: "Jun 2022 - Dec 2022",
      designation: "Junior Reactjs Developer",
      location: "Mumbai, Maharashtra",
    },
  ];

  const education = [
    {
      year: "May 2022 - Mar 2023",
      course: "Full Stack Web Development",
      location: "Koramangala 7th Block,Bangalore",
    },
    {
      year: "Jun 2021 - Jul 2023",
      course: "Bachelor of Computer Applications",
      location: "Nashik, Maharashtra",
    },
  ];

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
        <Grid spacing={5} container>
          <Grid width={"100%"} item md={6} sm={12}>
            <Box textAlign={"center"}>
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

              {experience.map((exp, i) => (
                <Box
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  key={i}
                  className="exp_edu_card"
                >
                  <Typography className="exp_edu_duration" variant="h6">
                    {exp.year}
                  </Typography>
                  <Typography className="exp_edu_title" variant="h5">
                    {exp.designation}
                  </Typography>
                  <Typography className="exp_edu_desc" variant="p">
                    {exp.location}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid width={"100%"} item md={6} sm={12}>
            <Box textAlign={"center"}>
              <Typography className="gradient-font heading" variant="h5">
                <EmojiEventsIcon
                  sx={{
                    fontSize: "50px",
                    color: "#7947df",
                    mb: "-10px",
                    mr: "10px",
                  }}
                />
                My Education
              </Typography>

              {education.map((edu, i) => (
                <Box
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  key={i}
                  className="exp_edu_card"
                >
                  <Typography className="exp_edu_duration" variant="h6">
                    {edu.year}
                  </Typography>
                  <Typography className="exp_edu_title" variant="h5">
                    {edu.course}
                  </Typography>
                  <Typography className="exp_edu_desc" variant="p">
                    {edu.location}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* <Grid item md={6} sm={12}>
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
          </Grid> */}
        </Grid>
      </Box>
    </Box>
  );
};

export default Exp_Edu;

import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

const Projects = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <Box
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      p={"4% 0"}
    >
      <Box className="global_width">
        <Box textAlign={"center"} margin={"auto"}  mb={"30px"}>
          <Typography className="gradient-font heading" variant="h5">
            My Recent Works
          </Typography>
          <Typography fontSize={"14px"}>
          We put your ideas and thus your wishes in the form of a unique web
          project <br /> that inspires you and you customers.
          </Typography>
        </Box>
      </Box>
      <div  className="container global_width ">
        <div className="tabs">
          <input
            type="radio"
            name="tabs"
            id="tabs-1"
            onChange={() => setSelectedTab(0)}
            checked={selectedTab == 0}
          />
          <label for="tabs-1" className="tab">
            All
          </label>

          <input
            type="radio"
            name="tabs"
            id="tabs-2"
            onChange={() => setSelectedTab(1)}
            checked={selectedTab == 1}
          />
          <label for="tabs-2" className="tab">
            Individual
          </label>

          <input
            type="radio"
            name="tabs"
            id="tabs-3"
            onChange={() => setSelectedTab(2)}
            checked={selectedTab == 2}
          />
          <label for="tabs-3" className="tab">
            Collaborative
          </label>

          <input
            type="radio"
            name="tabs"
            id="tabs-4"
            onChange={() => setSelectedTab(3)}
            checked={selectedTab == 3}
          />
          <label for="tabs-4" className="tab">
            Freelance
          </label>

          <span className="glider"></span>
        </div>
      </div>
      <Box
        className="global_width"
        mt={"50px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid container>
          {[1, 2, 3, 4].map((item, i) => (
            <Grid  sx={{display:"flex", justifyContent:"center", alignItems:"center"}} key={item} item lg={6} md={6} sm={6} xs={12}>
              <ProjectCard fade={i % 2 == 0 ? "fade-right" : "fade-left"} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Projects;

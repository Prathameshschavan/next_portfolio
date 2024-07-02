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
      <Box minWidth={"1200px"} maxWidth={"1000px"}>
        <Box textAlign={"center"} margin={"auto"} width={"45%"} mb={"30px"}>
          <Typography className="gradient-font heading" variant="h5">
            My Recent Works
          </Typography>
          <Typography fontSize={"14px"}>
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.
          </Typography>
        </Box>
      </Box>
      <div className="container">
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
        minWidth={"1200px"}
        maxWidth={"1000px"}
        mt={"50px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid spacing={5} container>
          {[1, 2, 3, 4].map((item, i) => (
            <Grid key={item} item md={6} sm={12}>
              <ProjectCard fade={i % 2 == 0 ? "fade-right" : "fade-left"} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Projects;

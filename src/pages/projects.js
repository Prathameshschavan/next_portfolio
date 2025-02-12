import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import AuraImage from "../components/icons/projects/Aura.png";
import AirBnbImage from "../components/icons/projects/Airbnb.png";
import LinkpodImage from "../components/icons/projects/Linkpod.png";
import PortFolioImage from "../components/icons/projects/Portfolio.png";
import LekhasImage from "../components/icons/projects/lekhas.png";
const Projects = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const projects = [
    {
      name: "Airbnb",
      desc: "A clone of airbnb.co.in",
      image: AirBnbImage.src,
      link: "https://project-airbnb-com.vercel.app/",
    },
    {
      name: "Linkpod",
      desc: "A linkedin profile booster",
      image: LinkpodImage.src,
      link: "https://linkpod.ritik.online/sign-in",
    },
    {
      name: "Portfolio",
      desc: "A portfolio website",
      image: PortFolioImage.src,
      link: "https://www.prathameshchavan.online/",
    },
    {
      name: "Lekhas",
      desc: "A Invoice Generator",
      image: LekhasImage  .src,
      link: "https://app.lekhas.com/login",
    },
  ];

  return (
    <Box
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      p={"4% 0"}
      id={"projects"}
    >
      <Box className="global_width">
        <Box textAlign={"center"} margin={"auto"} mb={"30px"}>
          <Typography className="gradient-font heading" variant="h5">
            My Recent Works
          </Typography>
          <Typography fontSize={"14px"}>
            I transform ideas into unique web experiences that <br /> inspire
            and engage users.
          </Typography>
        </Box>
      </Box>

      <Box
        className="global_width"
        mt={"50px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid container>
          {projects.map((project, i) => (
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              key={i}
              item
              lg={6}
              md={6}
              sm={6}
              xs={12}
            >
              <ProjectCard
                fade={i % 2 == 0 ? "fade-right" : "fade-left"}
                project={project}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Projects;

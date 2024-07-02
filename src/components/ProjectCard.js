"use client"
import { Box, Typography } from "@mui/material";
import React from "react";
import EastIcon from "@mui/icons-material/East";
const ProjectCard = ({ fade }) => {
  return (
    <Box className="project-card" data-aos={fade} data-aos-duration="2000">
      <Box className="project-card-open-section">
        <Box>
          <Typography color={"#fff"} fontSize={"30px"} fontWeight={"bold"}>
            My Recent Works
          </Typography>
          <Typography color={"#fff"} variant="p">
            My Recent Works
          </Typography>
        </Box>
        <Box>
          <EastIcon
            sx={{
              color: "#fff",
              fontSize: "40px",
              transform: "rotate(-40deg)",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCard;

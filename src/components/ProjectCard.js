"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import EastIcon from "@mui/icons-material/East";
const ProjectCard = ({ fade, project }) => {
  return (
    <Box
      className="project-card"
      sx={{
        backgroundImage:
          `url(${project.image})`,
      }}
      data-aos={fade}
      data-aos-duration="2000"
    >
      <Box className="project-card-open-section">
        <Box>
          <Typography
            color={"#fff"}
            fontSize={["20px", "25px", "25px", "30px"]}
            fontWeight={"bold"}
          >
            {project.name}
          </Typography>
          <Typography
            color={"#fff"}
            fontSize={["15px", "15px", "15px", "20px"]}
            variant="p"
          >
           {project.desc}
          </Typography>
        </Box>
        <Box >
          <EastIcon
            sx={{
              color: "#fff",
              fontSize: "40px",
              transform: "rotate(-40deg)",
            }}
            onClick={()=>{
              window.open(project.link, "_blank");
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCard;

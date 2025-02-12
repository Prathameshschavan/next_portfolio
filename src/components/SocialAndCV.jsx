import { Box, Button, Grid, IconButton } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";

const SocialAndCV = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Prathamesh_Chavan_CV.pdf"; // Path to your CV file in the public directory
    link.download = "Prathamesh_Chavan_CV.pdf"; // Desired file name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Box mt={"30px"} width={"100%"}>
      <Grid spacing={2} container>
        <Grid display={"flex"} justifyContent={"center"} item xs={12} sm={6}>
          <Button
            className="outlined-btn"
            variant="outlined"
            sx={{ width: "100%" }}
            endIcon={<DownloadIcon />}
            onClick={handleDownload}
          >
            Download CV
          </Button>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            justifyContent: ["center","left"],
            alignItems: "center",
            gap:"8px"
          }}
          item
          xs={12}
          sm={6}
        >
          <IconButton
            target="_blank"
            href="https://x.com/Prathamesh_2117"
            className="outlined-icon-btn"
          >
            <TwitterIcon sx={{ fontSize: "20px" }} />
          </IconButton>
          <IconButton
            target="_blank"
            href="https://www.linkedin.com/in/prathamesh-chavan-5532261b4/"
            className="outlined-icon-btn"
          >
            <LinkedInIcon sx={{ fontSize: "20px" }} />
          </IconButton>
          <IconButton
            target="_blank"
            href="https://github.com/Prathameshschavan"
            className="outlined-icon-btn"
          >
            <GitHubIcon sx={{ fontSize: "20px" }} />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SocialAndCV;

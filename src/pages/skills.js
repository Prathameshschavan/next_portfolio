import Layout from "@/components/Layout";
import { Box, Grid, Tooltip, Typography } from "@mui/material";
import React from "react";
import JavaScriptIcon from "../components/icons/javascript.png";
import CssIcon from "../components/icons/css.png";
import HtmlIcon from "../components/icons/html.png";
import MaterialUiIcon from "../components/icons/materialUi.png";
import MongoDbIcon from "../components/icons/mongodb.png";
import NextJsIcon from "../components/icons/nextJs.png";
import NodeJsIcon from "../components/icons/nodejs.png";
import ReactIcon from "../components/icons/react.png";
import ReduxIcon from "../components/icons/redux.png";
import TailwindIcon from "../components/icons/tailwind.png";
const Skills = () => {
  const data = [
    {
      link: "https://react.dev/",
      title: "ReactJs",
      icon: ReactIcon.src,
      percent: "90",
    },
    {
      link: "https://redux.js.org/",
      title: "ReduxJs",
      icon: ReduxIcon.src,
      percent: "90",
    },
    {
      link: "https://nextjs.org/",
      title: "NextJs",
      icon: NextJsIcon.src,
      percent: "90",
    },
    {
      link: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics",
      title: "HTML",
      icon: HtmlIcon.src,
      percent: "90",
    },
    {
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      title: "CSS",
      icon: CssIcon.src,
      percent: "90",
    },
    {
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      title: "Javascript",
      icon: JavaScriptIcon.src,
      percent: "90",
    },
    {
      link: "https://mui.com/",
      title: "Material UI",
      icon: MaterialUiIcon.src,
      percent: "90",
    },
    {
      link: "https://tailwindcss.com/",
      title: "Tailwind Css",
      icon: TailwindIcon.src,
      percent: "90",
    },
    {
      link: "https://nodejs.org/en",
      title: "NodeJs",
      icon: NodeJsIcon.src,
      percent: "90",
    },
    {
      link: "https://www.mongodb.com/",
      title: "MongoDb",
      icon: MongoDbIcon.src,
      percent: "90",
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
    >
      <Box minWidth={"1200px"} maxWidth={"1000px"}>
        <Box textAlign={"center"} margin={"auto"} width={"45%"} mb={"30px"}>
          <Typography className="gradient-font heading" variant="h5">
            My Skills
          </Typography>
          <Typography fontSize={"14px"}>
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.
          </Typography>
        </Box>
        <Grid container>
          {data.map((item, i) => (
            <Grid item md={2} key={i}>
              <Tooltip arrow placement="top" title={item.title}>
                <Box
                  // data-aos={i % 2 == 0 ? "fade-up-right" : "fade-up-left"}
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                  onClick={() => window.open(item.link, "_blank")}
                  className="skill-card"
                >
                  <img className="skill-icon" src={item.icon} alt="react" />
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    {item.percent}%
                  </Typography>
                </Box>
              </Tooltip>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Skills;

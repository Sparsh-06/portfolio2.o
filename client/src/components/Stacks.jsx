import { Grid, Typography, Paper } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#262B32",
  ...theme.typography.body2,
  padding: theme.spacing(1.5),
  textAlign: "center",
  color: "white",
}));

const Stacks = () => {
  const skills = [
    "Python",
    "Javascript",
    "CSS",
    "HTML",
    "ReactJS",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "MySQL",
    "Axios",
    "Blender",
    "APIs",
    "Bootstrap",
    "Docker",
    "SocketIO",
    "MUI",
    "ChakraUI",
    "Tailwind",
    "Typescript",
    "E-Commerce",
    "Github",
    "Git",
    "Firebase"
  ];

  return (
    <div id="stacks" className="p-3 text-white flex flex-col justify-center items-center">
      <Typography variant="h5" m={4} sx={{float:'left', width:'75%'}}>
        Techs I Know
      </Typography>
      <Grid container spacing={1} sx={{ color: "white", display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {skills.map((skill, index) => (
          <Grid item xs={(Math.random() + 1) * 1  + 1} key={index}>
            <Item>{skill}</Item>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Stacks;

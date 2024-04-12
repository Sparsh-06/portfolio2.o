// server.js
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT; // You can use any port you prefer
const cors = require('cors'); 
app.use(cors());

app.use(express.json());


const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'VidStreaming app - underDevelopment  || Used : E(express)R(react)N(node) techs',
    imageUrl: '/public/pr1.png',
  },
  {
    id: 2,
    title: 'Project 2',
    description: "Tried to transform Indian Space Research Organisation's website using some 3d elements",
    imageUrl: '/public/pr1.png',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi ipsa rerum amet necessitatibus quis ad nihil veniam blanditiis voluptate dignissimos.',
    imageUrl: '/public/pr1.png',
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi ipsa rerum amet necessitatibus quis ad nihil veniam blanditiis voluptate dignissimos.',
    imageUrl: '/public/pr1.png',
  },
  {
    id: 5,
    title: 'Project 5',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi ipsa rerum amet necessitatibus quis ad nihil veniam blanditiis voluptate dignissimos.',
    imageUrl: '/public/pr1.png',
  },
  // Add more projects as needed
];

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

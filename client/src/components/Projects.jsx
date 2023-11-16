import React, { useState, useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Skeleton,
  Link,
} from "@mui/material";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  useEffect(() => {
    // Simulate a delay of 2 seconds before fetching the actual data
    const delay = 1500;
    const timerId = setTimeout(() => {
      // Fetch project data from the backend API endpoint
      fetch("https://ss1-osbq.onrender.com/api/projects")
        .then((response) => response.json())
        .then((data) => {
          setProjects(data);
          setLoading(false); // Set loading to false once data is fetched
        })
        .catch((error) => {
          console.error("Error fetching projects:", error);
          setError("Error fetching projects. Please try again."); // Set error message
          setLoading(false); // Set loading to false in case of an error
        });
    }, delay);

    // Cleanup the timer to avoid memory leaks
    return () => clearTimeout(timerId);
  }, []); // The empty dependency array ensures that this effect runs once on mount

  // Calculate the total number of pages
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  // Function to handle pagination
  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the range of projects to display based on the current page
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;

  return (
    <div id="projects" className="p-5">
      <Typography color={"white"} m={4} variant="h5">
        Projects
      </Typography>
      {error ? (
        // Check if there's an error
        <div className="p-5 flex justify-center items-center">
          <Typography
            color="error"
            variant="subtitle1"
            className="text-center"
          >
            {error}
            <Link
              href="https://github.com/Sparsh-06"
              rel="noreferrer"
              underline="hover"
              target="_black"
            >
              {" "}
              <br />
              For Projects visit my Github Profile Sparsh-06
            </Link>
          </Typography>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="flex gap-4 justify-around flex-wrap overflow-x-auto">
            {loading ? (
              // Display skeleton while data is being fetched
              Array.from({ length: 4 }).map((_, index) => (
                <Skeleton
                  key={index}
                  variant="rounded"
                  width={310}
                  height={240}
                />
              ))
            ) : (
              // Display project cards once data is fetched
              projects.slice(startIndex, endIndex).map((project) => (
                <Card
                  key={project.id}
                  sx={{ width: 300, height: "100%", padding: "5px" }}
                >
                  <CardMedia
                    sx={{
                      height: 140,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                    image={project.imageUrl}
                    title={project.title}
                  />
                  <CardContent sx={{ height: 146 }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant="contained">
                      Share
                    </Button>
                    <Button size="small" variant="contained">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              ))
            )}
          </div>
          <div className="flex mt-4 bg-yellow-50 rounded-md">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`mx-3 p-2 flex items-center ${
                  currentPage === index + 1 ? ("text-blue-500 font-bold rounded-full bg-green-500 h-8 self-center") : "text-black"
                }`}
                onClick={() => handlePagination(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;

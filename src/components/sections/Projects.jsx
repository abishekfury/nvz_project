import React from "react";
import { Box, Container, Typography, Button, Stack, Paper } from "@mui/material";
import interiorDesign1 from "../../assets/interior1.jpg";
import interiorDesign2 from "../../assets/interior2.jpg";
import constructionProject from "../../assets/construction.jpg";

export const Projects = () => {
  const openPortfolio = () => {
    window.open(
      "https://colab.research.google.com/drive/1RBZwewzT_iePOE5Qn4yPVZqeovLhpqYA?usp=sharing",
    );
  };

  const projects = [
    { 
      title: "Luxury Residence", 
      imageUrl: interiorDesign1,
      description: "Modern interior design with custom furniture solutions"
    },
    { 
      title: "Corporate Office", 
      imageUrl: interiorDesign2,
      description: "Ergonomic workspace with innovative spatial planning"
    },
    { 
      title: "Commercial Complex", 
      imageUrl: constructionProject,
      description: "Full-service construction from foundation to finishing"
    },
  ];

  return (
    <Box
      id="projects"
      sx={{
        minHeight: "100vh",
        py: { xs: 6, sm: 8, md: 12 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        px: 2,
        position: "relative",
        overflow: "hidden",
        bgcolor: "common.black",
      }}
    >
      {/* Architectural Background Image */}
      <Box sx={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        opacity: 0.2,
      }}>
        <Box sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} />
        <Box sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(28, 25, 23, 0.3) 0%, rgba(28, 25, 23, 0.7) 50%, rgba(28, 25, 23, 0.9) 100%)",
        }} />
      </Box>

      {/* Geometric Overlay */}
      <Box sx={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        opacity: 0.1,
        backgroundImage: "linear-gradient(45deg, #000000 1px, transparent 1px), linear-gradient(-45deg, #000000 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      <Container maxWidth="lg" sx={{ textAlign: "center", position: "relative", zIndex: 1 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            mb: { xs: 4, sm: 6, md: 8 },
            fontFamily: "'Montserrat', sans-serif",
            background: "linear-gradient(90deg, #f59e0b, #d97706)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: 1,
            textTransform: "uppercase",
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }
          }}
        >
          Our Works
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 3, sm: 4, md: 6 }}
          justifyContent="center"
          alignItems="stretch"
          sx={{ mb: { xs: 4, sm: 6 } }}
        >
          {projects.map(({ title, imageUrl, description }, index) => (
            <Paper
              key={index}
              elevation={4}
              sx={{
                width: { xs: "100%", sm: 300, md: 360 },
                maxWidth: { xs: 400, sm: "none" },
                mx: "auto",
                borderRadius: 2,
                overflow: "hidden",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 12px 24px rgba(245, 158, 11, 0.3)"
                },
                display: "flex",
                flexDirection: "column",
                bgcolor: "rgba(28, 25, 23, 0.8)",
                position: "relative",
                backdropFilter: "blur(4px)",
                border: "1px solid rgba(245, 158, 11, 0.1)"
              }}
            >
              <Box
                component="img"
                src={imageUrl}
                alt={title}
                loading="lazy"
                sx={{
                  width: "100%",
                  height: { xs: 200, sm: 220, md: 240 },
                  objectFit: "cover",
                  filter: "brightness(0.9)"
                }}
              />
              
              <Box sx={{ p: { xs: 2, sm: 3 }, flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "common.white",
                    fontWeight: 700,
                    fontFamily: "'Poppins', sans-serif",
                    mb: 1,
                    textAlign: "left",
                    fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" }
                  }}
                >
                  {title}
                </Typography>
                
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    textAlign: "left",
                    mb: 2,
                    fontSize: { xs: "0.8rem", sm: "0.9rem" }
                  }}
                >
                  {description}
                </Typography>
                
                <Box sx={{ textAlign: "right" }}>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      borderColor: "#f59e0b",
                      color: "#f59e0b",
                      fontSize: { xs: "0.75rem", sm: "0.875rem" },
                      "&:hover": {
                        backgroundColor: "rgba(245, 158, 11, 0.1)",
                        borderColor: "#f59e0b",
                        color: "#f59e0b"
                      }
                    }}
                    onClick={() => window.open(imageUrl, "_blank")}
                  >
                    View Details
                  </Button>
                </Box>
              </Box>
              
              <Box 
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: 4,
                  background: "linear-gradient(90deg, #f59e0b, #d97706)"
                }}
              />
            </Paper>
          ))}
        </Stack>

        <Button
          variant="contained"
          size="large"
          onClick={openPortfolio}
          sx={{
            mt: { xs: 6, sm: 8, md: 10 },
            px: { xs: 4, sm: 6 },
            py: { xs: 1.2, sm: 1.8 },
            fontWeight: "bold",
            fontSize: { xs: "0.875rem", sm: "1rem" },
            borderRadius: 0,
            backgroundColor: "#f59e0b",
            color: "#1c1917",
            boxShadow: "none",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#d97706",
              boxShadow: "0 4px 12px rgba(245, 158, 11, 0.5)"
            },
            textTransform: "uppercase",
            letterSpacing: 1
          }}
        >
          Explore Full Works
        </Button>
      </Container>

      {/* Modern divider */}
      <Box sx={{
        position: "absolute",
        bottom: 64,
        left: "50%",
        transform: "translateX(-50%)",
        width: 160,
        height: "1px",
        background: "linear-gradient(to right, transparent, #f59e0b, transparent)",
        zIndex: 1
      }} />

      {/* Floating architectural elements - hidden on mobile */}
      <Box sx={{
        position: "absolute",
        bottom: 80,
        right: 40,
        width: 128,
        height: 128,
        border: "2px solid rgba(245, 158, 11, 0.3)",
        transform: "rotate(45deg)",
        opacity: 0.2,
        display: { xs: "none", md: "block" }
      }} />
      <Box sx={{
        position: "absolute",
        top: "25%",
        left: 40,
        width: 64,
        height: 64,
        borderTop: "2px solid rgba(245, 158, 11, 0.2)",
        borderLeft: "2px solid rgba(245, 158, 11, 0.2)",
        opacity: 0.3,
        display: { xs: "none", md: "block" }
      }} />
    </Box>
  );
};
import React from "react";

//Material UI components imports
import TourCard from "../components/TourCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import cities from "../data.json";
import Typography from "@mui/material/Typography";
const Home = () => {
  return (
    <div>
      
      <Container maxWidth="lg" sx={{ marginTop: 7 }}>
        {cities.map((city) => {
          return (
            <div key={city.id}>
              <Typography variant="h3" component="h2" marginY={4}>
                Top {city.name} Tours
              </Typography>

              <Grid container spacing={5}>
                {city.tours.map((tour) => {
                  return <TourCard key={tour.id} tour={tour} />;
                })}
              </Grid>
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default Home;

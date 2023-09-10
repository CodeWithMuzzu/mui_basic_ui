import {
  Container,
  Typography,
  Box,
  Paper,
  BottomNavigation,
} from "@mui/material";
import React from "react";
import ImageCollage from "../components/ImageCollage";
import Faq from "../components/Faq";
import BasicModal from "../components/BasicModal";

const Tour = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" component="h1" marginTop={4}>
        Explore The World In Las Vegas
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://www.tripsavvy.com/thmb/8WpKDq3jWbmgvtIqCqGSz1jCT3c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-AB11023-7fa9cfef954847bfbf9854a937e54745.jpg"
          alt="Las Vegas"
          height={350}
        />
        <ImageCollage />
      </Box>

      <Box marginBottom={10}>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this Ticket
        </Typography>

        <Typography variant="paragraph" component="p" marginTop={3}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>

        <Typography variant="h6" component="h4" marginTop={3}>
          Frequently Asked Questions :
        </Typography>

        <Faq />
      </Box>

      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation>
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  );
};

export default Tour;

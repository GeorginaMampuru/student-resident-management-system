import React, { useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Chart from "./Chart";
import Deposits from "./Deposits";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// Sidebar and App Bar Styles
const drawerWidth = 240;
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const Content = styled(Box, { shouldForwardProp: (prop) => prop !== "open" })(
  ({ open }) => ({
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    transition: "margin-left 0.3s ease",
    marginLeft: open ? `${drawerWidth}px` : "72px",
    padding: "20px",
  })
);

export default function Dashboard() {
  const [open, setOpen] = useState(true);
  const [image, setImage] = useState(null);
  const [faultDescription, setFaultDescription] = useState("");

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleFaultDescriptionChange = (e) => {
    setFaultDescription(e.target.value);
  };

  const handleSubmit = () => {
    // Handle fault reporting logic here
    console.log("Image:", image);
    console.log("Fault Description:", faultDescription);
    // Reset state after submission if necessary
    setImage(null);
    setFaultDescription("");
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <MuiAppBar
          position="absolute"
          open={open}
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            transition: (theme) =>
              theme.transitions.create(["width", "margin"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
          }}
        >
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
          </Toolbar>
        </MuiAppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar />
          <Divider />
          <List>
            <Avatar
              alt="User Avatar"
              src="/path/to/user/image.jpg"
              sx={{ width: 80, height: 80, mx: "auto", my: 2 }}
            />
            <Typography variant="h6" align="center">
              Overview
            </Typography>
            <Divider />
            <Typography variant="body1" align="center">
              Maintenance Faults
            </Typography>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              sx={{ mx: "auto", my: 2 }}
            />
            <TextField
              label="Fault Description"
              multiline
              rows={4}
              fullWidth
              variant="outlined"
              value={faultDescription}
              onChange={handleFaultDescriptionChange}
              sx={{ mx: "auto", my: 2 }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{ mx: "auto", my: 2 }}
            >
              Submit
            </Button>
          </List>
        </Drawer>
        <Content open={open}>
          {/* Dashboard Content */}
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h4" gutterBottom>
              Dashboard Content
            </Typography>
            {/* Chart */}
            <Grid container spacing={3}>
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  {/* Replace Chart component with your chart logic */}
                  {/* <Chart /> */}
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  {/* Replace Deposits component with your logic */}
                  {/* <Deposits /> */}
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  {/* Replace Orders component with your logic */}
                  {/* <Orders /> */}
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Content>
      </Box>
    </ThemeProvider>
  );
}


import React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems, secondaryListItems } from "./listItems";
import Chart from "./Chart";
import Deposits from "./Deposits";


export default function Dashboard() {
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    // ... (ThemeProvider, Box, CssBaseline, AppBar, Drawer, Main Content structure)

    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Automated Processes */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Typography variant="h6" gutterBottom>
              Automated Processes
            </Typography>
            <Typography variant="body1" paragraph>
              The system automates administrative tasks such as data entry,
              accommodation assignments, and billing. This automation improves
              efficiency and accuracy, reducing the workload on staff. For
              example, the system generates and sends invoices to students
              automatically and tracks payments. This frees up staff time to
              focus on providing exceptional customer service.
            </Typography>
          </Paper>
        </Grid>

        {/* Centralized Database */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Typography variant="h6" gutterBottom>
              Centralized Database
            </Typography>
            <Typography variant="body1" paragraph>
              The system provides a centralized database for storing and
              retrieving student information, ensuring data accuracy and
              accessibility. Staff can easily find information such as student
              names, addresses, contact details, and academic records. This
              centralized approach enhances efficiency and simplifies student
              progress tracking.
            </Typography>
          </Paper>
        </Grid>

        {/* Seamless Communication */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Typography variant="h6" gutterBottom>
              Seamless Communication
            </Typography>
            <Typography variant="body1" paragraph>
              The system facilitates seamless communication between students,
              staff, and administrators. It includes a messaging system that
              enables direct communication. This feature streamlines
              interactions, resolves issues promptly, and enhances transparency.
              Students can easily seek help, and staff can respond efficiently.
            </Typography>
          </Paper>
        </Grid>

        {/* Reporting and Analytics */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Typography variant="h6" gutterBottom>
              Reporting and Analytics
            </Typography>
            <Typography variant="body1" paragraph>
              The system offers robust reporting and analytics features,
              providing valuable insights for housing management and student
              services. Administrators can generate reports on student
              satisfaction, housing occupancy rates, maintenance costs, and
              more. These insights aid in strategic planning and resource
              allocation, ultimately improving the quality of student life and
              housing department efficiency.
            </Typography>
          </Paper>
        </Grid>

        {/* Additional Grid Items (if needed) */}
      </Grid>

      <Box pt={4}>
        <Copyright />
      </Box>
    </Container>
  );
}

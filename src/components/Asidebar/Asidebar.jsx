import React, { useState } from "react";

import logo from "../../assets/Group 93.svg";
import { ReactComponent as Dashboard } from "../../assets/dashboard.svg";
import { ReactComponent as Teachers } from "../../assets/teachers.svg";
import { ReactComponent as Parents } from "../../assets/parents.svg";
import { ReactComponent as Students } from "../../assets/students.svg";
import { ReactComponent as Classes } from "../../assets/classes.svg";
import { ReactComponent as Blog } from "../../assets/blog.svg";
import { ReactComponent as Logout } from "../../assets/logout.svg";

import {
  Drawer,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  Box,
} from "@mui/material";

import { useLocation, useNavigate } from "react-router-dom";

const Asidebar = () => {
  const theme = useTheme();
  const drawerWidth = 261;
  const [open, setOpen] = useState(false);

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const pages = [
    { id: 1, path: "/", name: "Dashboard", icon: <Dashboard /> },
    { id: 2, path: "/teachers", name: "Teachers", icon: <Teachers /> },
    { id: 3, path: "/parents", name: "Parents", icon: <Parents /> },
    { id: 4, path: "/students", name: "Students", icon: <Students /> },
    { id: 5, path: "/classes", name: "Classes", icon: <Classes /> },
    { id: 6, path: "/blog", name: "Blog", icon: <Blog /> },
  ];
  let location = useLocation();
  const navigate = useNavigate();
  return (
    <Drawer
      sx={{
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          flexDirection: "column",
          justifyContent: "space-between",
          width: `${drawerWidth}px`,
          p: "48px 0",
          boxSizing: "border-box",
          boxShadow: "4px 4px 15px 0px rgba(0, 0, 0, 0.15)",
        },
      }}
      variant="permanent"
      anchor="left"
      open={open}
      onClose={handleDrawerClose}
    >
      {/* <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </DrawerHeader> */}
      <Box
        component="div"
        sx={{ display: "flex", flexDirection: "column", gap: "64px" }}
      >
        <Box component="div" sx={{ display: "flex", justifyContent: "center" }}>
          <img src={logo} alt="logo" width="95.08px" height="85.8px" />
        </Box>

        <List>
          {pages.map((page) => (
            <ListItem
              disablePadding
              sx={{
                "& .MuiButtonBase-root": {
                  gap: "10px",
                  padding: "24px 54px 24px 32px",
                },
                "& .MuiListItemIcon-root": {
                  minWidth: 0,
                },
                  color: location.pathname === `${page.path}` ? theme.palette.primary.main : '', 
                  bgcolor:
                  location.pathname === `${page.path}`
                    ? theme.palette.secondary.main
                    : "",
                    borderLeft: location.pathname === `${page.path}` ? `4px solid ${theme.palette.primary.main}` : '' 
              }}
              key={page.id}
              onClick={() => {
                navigate(page.path);
              }}
              >
              <ListItemButton sx={{ m: 0, p: 0 }}>
                <ListItemIcon sx={{
                  fill: location.pathname === `${page.path}` ? theme.palette.primary.main : theme.palette.primary.gray, 
                }}>{page.icon}</ListItemIcon>
                <ListItemText primary={page.name} />
                <ListItemIcon>
                {page.icon}</ListItemIcon>
                <ListItemText primary={page.name} sx={{'& .MuiTypography-root': {fontFamily: 'inter', fontWeight: location.pathname === page.path ? '600' : '', fontSize: '20px', letterSpacing: '0.32px'}}}/>

              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {/* <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <Inbox /> : <Mail />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Box>
      <Box
        component="div"
        sx={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "underline",
        }}
      >
        <IconButton aria-label="logout" sx={{ p: 0, m: 0 }}>
          <Logout />
        </IconButton>
        <Typography
          variant="a"
          sx={{
            fontFamily: "poppins",
            fontWeight: "500",
            fontSize: "18px",
            leadingTrim: "both",
            letterSpacing: "0.288px",
            color: theme.palette.primary.main,
            cursor: "pointer",
          }}
        >
          Log Out
        </Typography>
      </Box>
    </Drawer>
  );
};

export default Asidebar;

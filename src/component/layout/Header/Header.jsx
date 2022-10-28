// import React from 'react';
// import { Link} from 'react-router-dom';
// import SiteNav, {ContentGroup} from 'react-site-nav';

// const Header = () => {
//     return (
//         <>

//             <SiteNav
//             align="left"
//             rowHeight="100"
//             background="transparent"
//             color="#BB84E8"
//              fontSize="20"
//              fontFamily="Arial, sans-serif">
//                 <ContentGroup title={ <Logo/> }/>
//                 <ContentGroup title="Home" height="200">
//                 <ul>
//                     <li><Link to="/my-story">My Story</Link></li>
//                     <li><Link to="/">Home</Link></li>
//                 </ul>
//                 </ContentGroup>
//                 <ContentGroup title="Products" height="200">
//                 Free text followed by some links.<br/>
//                 <a href="mailto:yusinto@gmail.com">Email</a><br/>
//                 <a href="https://github.com/yusinto">Github</a>
//                 </ContentGroup>
//             </SiteNav>

//         </>
//     );
// };

// export default Header;
import * as React from "react";
import {Link} from 'react-router-dom';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Logo from "../../logo/Logo";
import { Router, Switch, Route } from "react-router-dom";
import Products from "../../Product/Products";
import Login from "../../User/Login";
import { Divider, ListItemIcon } from "@mui/material";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";


const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar color="transparent" position="static" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            "& ..css-hip9hq-MuiPaper-root-MuiAppBar-root": {
              background: "transparent",
            },
          }}
        >
          <Logo />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            {/* <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton> */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    {page}
                    <Link to={"/products"}>{pages}</Link>
                  </Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* {pages.map((page) => ( */}
            <Button
              sx={{
                my: 2,
                color: "white",
                display: "block",
                marginLeft: "40px",
              }}
            >
              <Link to="/products" style={{ color: "white" }}>
                Products
              </Link>
            </Button>
            {/* ))} */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleClick} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <Link to={"/login"} style={{ color: "Black" , textDecoration:"none"}}>
          <MenuItem>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            SignIn
          </MenuItem>
        </Link>
        <Link to ="/signup" style={{ color: "Black" , textDecoration:"none"}} >
          <MenuItem>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            SignUp
          </MenuItem>
        </Link>
        
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

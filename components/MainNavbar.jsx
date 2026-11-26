"use client";

import { useState } from "react";
import NextLink from "next/link";
import Image from "next/image";
import {
  AppBar,
  Toolbar,
  Box,
  Container,
  IconButton,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Typography,
} from "@mui/material";
import {
  NorthEast,
  Menu as MenuIcon,
  Close as CloseIcon,
  ExpandMore,
  ExpandLess,
} from "@mui/icons-material";
import NavLink from "@/components/common/NavLink";
import NavDropdown from "@/components/common/NavDropdown";
import CTAButton from "@/components/common/CTAButton";
import logoImg from "@/assets/finvibes-logo-text.png";
import {
  colors,
  typography,
  NAV_LINKS,
  PRODUCT_ITEMS,
  SMART_TOOLS_ITEMS,
  CONTACT_INFO,
} from "@/constants";

export default function MainNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsCollapse, setProductsCollapse] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState({});
  const [toolsCollapse, setToolsCollapse] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleProductsToggle = () => {
    setProductsCollapse((prev) => !prev);
  };

  const handleSubMenuToggle = (label) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleToolsToggle = () => {
    setToolsCollapse((prev) => !prev);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
    setProductsCollapse(false);
    setOpenSubMenus({});
    setToolsCollapse(false);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: colors.surface.white,
        color: colors.text.primary,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: { xs: 60, md: 84 },
            py: { xs: 1, md: 2.2 },
          }}
        >
          <Box
            component={NextLink}
            href="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              flexShrink: 0,
              py: 0.5,
            }}
          >
            <Image
              src={logoImg}
              alt="Finvibes"
              style={{
                height: "44px",
                width: "auto",
                objectFit: "contain",
                display: "block",
              }}
              priority
            />
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
              gap: { md: 1, lg: 2 },
              flexGrow: 1,
              px: { md: 1, lg: 3 },
            }}
          >
            {NAV_LINKS.slice(0, 1).map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}

            <NavDropdown
              label="Products"
              items={PRODUCT_ITEMS}
              triggerType="click"
            />

            <NavDropdown
              label="Smart Tools"
              items={SMART_TOOLS_ITEMS}
              triggerType="click"
            />

            {NAV_LINKS.slice(1).map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </Box>
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: "flex", md: "none" },
              color: "primary.main",
              p: 1,
              ml: 1,
            }}
            aria-label="Toggle navigation menu"
          >
            <MenuIcon sx={{ fontSize: "28px" }} />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerClose}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: { xs: "82%", sm: 340 },
            maxWidth: 380,
            p: 2.5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          },
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Image
              src={logoImg}
              alt="Finvibes"
              height={36}
              width={Math.round(36 * (699 / 187))}
              style={{
                objectFit: "contain",
                width: "auto",
                height: "auto",
                maxHeight: "36px",
                display: "block",
              }}
            />
            <IconButton
              onClick={handleDrawerClose}
              aria-label="Close navigation menu"
              sx={{ color: colors.text.primary }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider sx={{ mb: 2, borderColor: colors.border.light }} />

          <List disablePadding>
            <ListItem disablePadding>
              <ListItemButton
                component={NextLink}
                href="/"
                onClick={handleDrawerClose}
                sx={{ borderRadius: "8px", py: 1 }}
              >
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontWeight: typography.fontWeights.semibold,
                        fontSize: typography.fontSizes.base,
                        color: colors.text.primary,
                      }}
                    >
                      Home
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={handleProductsToggle}
                sx={{
                  borderRadius: "8px",
                  py: 1,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontWeight: typography.fontWeights.semibold,
                        fontSize: typography.fontSizes.base,
                        color: colors.text.primary,
                      }}
                    >
                      Products
                    </Typography>
                  }
                />
                {productsCollapse ? (
                  <ExpandLess sx={{ color: "primary.main" }} />
                ) : (
                  <ExpandMore sx={{ color: colors.text.secondary }} />
                )}
              </ListItemButton>

              <Collapse in={productsCollapse} timeout="auto" unmountOnExit>
                <List component="div" disablePadding sx={{ pl: 1 }}>
                  {PRODUCT_ITEMS.map((item) => {
                    const hasSubItems = Boolean(
                      item.subItems && item.subItems.length > 0,
                    );
                    const isSubOpen = Boolean(openSubMenus[item.label]);

                    if (hasSubItems) {
                      return (
                        <Box key={item.label}>
                          <ListItemButton
                            onClick={() => handleSubMenuToggle(item.label)}
                            sx={{
                              borderRadius: "6px",
                              padding: "9px 10px",
                              display: "flex",
                              justifyContent: "space-between",
                              "&:hover": {
                                backgroundColor: colors.surface.hoverLight,
                                color: "primary.main",
                              },
                            }}
                          >
                            <ListItemText
                              primary={
                                <Typography
                                  sx={{
                                    fontFamily: "inherit",
                                    fontSize: typography.fontSizes.sm,
                                    fontWeight: typography.fontWeights.medium,
                                    color: colors.text.primary,
                                  }}
                                >
                                  {item.label}
                                </Typography>
                              }
                            />
                            {isSubOpen ? (
                              <ExpandLess
                                sx={{ fontSize: 18, color: "primary.main" }}
                              />
                            ) : (
                              <ExpandMore
                                sx={{
                                  fontSize: 18,
                                  color: colors.text.secondary,
                                }}
                              />
                            )}
                          </ListItemButton>

                          <Collapse in={isSubOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding sx={{ pl: 2 }}>
                              {item.subItems.map((sub) => (
                                <ListItemButton
                                  key={sub.href}
                                  component={NextLink}
                                  href={sub.href}
                                  onClick={handleDrawerClose}
                                  sx={{
                                    borderRadius: "6px",
                                    padding: "7px 10px",
                                    "&:hover": {
                                      backgroundColor:
                                        colors.surface.hoverLight,
                                      color: "primary.main",
                                    },
                                  }}
                                >
                                  <ListItemText
                                    primary={
                                      <Typography
                                        sx={{
                                          fontFamily: "inherit",
                                          fontSize: "13px",
                                          fontWeight:
                                            typography.fontWeights.regular,
                                          color: colors.text.secondary,
                                          "&:hover": { color: "primary.main" },
                                        }}
                                      >
                                        • {sub.label}
                                      </Typography>
                                    }
                                  />
                                </ListItemButton>
                              ))}
                            </List>
                          </Collapse>
                        </Box>
                      );
                    }

                    return (
                      <ListItemButton
                        key={item.href}
                        component={NextLink}
                        href={item.href}
                        onClick={handleDrawerClose}
                        sx={{
                          borderRadius: "6px",
                          padding: "9px 10px",
                          "&:hover": {
                            backgroundColor: colors.surface.hoverLight,
                            color: "primary.main",
                          },
                        }}
                      >
                        <ListItemText
                          primary={
                            <Typography
                              sx={{
                                fontFamily: "inherit",
                                fontSize: typography.fontSizes.sm,
                                fontWeight: typography.fontWeights.medium,
                                color: colors.text.primary,
                              }}
                            >
                              {item.label}
                            </Typography>
                          }
                        />
                      </ListItemButton>
                    );
                  })}
                </List>
              </Collapse>
            </ListItem>

            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={handleToolsToggle}
                sx={{
                  borderRadius: "8px",
                  py: 1,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontWeight: typography.fontWeights.semibold,
                        fontSize: typography.fontSizes.base,
                        color: colors.text.primary,
                      }}
                    >
                      Smart Tools
                    </Typography>
                  }
                />
                {toolsCollapse ? (
                  <ExpandLess sx={{ color: "primary.main" }} />
                ) : (
                  <ExpandMore sx={{ color: colors.text.secondary }} />
                )}
              </ListItemButton>

              <Collapse in={toolsCollapse} timeout="auto" unmountOnExit>
                <List component="div" disablePadding sx={{ pl: 1 }}>
                  {SMART_TOOLS_ITEMS.map((item) => (
                    <ListItemButton
                      key={item.href}
                      component={NextLink}
                      href={item.href}
                      onClick={handleDrawerClose}
                      sx={{
                        borderRadius: "6px",
                        padding: "9px 10px",
                        "&:hover": {
                          backgroundColor: colors.surface.hoverLight,
                          color: "primary.main",
                        },
                      }}
                    >
                      <ListItemText
                        primary={
                          <Typography
                            sx={{
                              fontFamily: "inherit",
                              fontSize: typography.fontSizes.sm,
                              fontWeight: typography.fontWeights.medium,
                              color: colors.text.primary,
                            }}
                          >
                            {item.label}
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </ListItem>

            {NAV_LINKS.slice(1).map((link) => (
              <ListItem key={link.href} disablePadding>
                <ListItemButton
                  component={NextLink}
                  href={link.href}
                  onClick={handleDrawerClose}
                  sx={{ borderRadius: "8px", py: 1 }}
                >
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          fontWeight: typography.fontWeights.semibold,
                          fontSize: typography.fontSizes.base,
                          color: colors.text.primary,
                        }}
                      >
                        {link.label}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box sx={{ mt: 3 }}>
          <Divider sx={{ mb: 2.5, borderColor: colors.border.light }} />

          <CTAButton
            label="Get Started"
            href="/contact"
            icon={<NorthEast sx={{ fontSize: "16px" }} />}
            sx={{ width: "100%", justifyContent: "center", py: 1.2 }}
          />

          <Box sx={{ mt: 2.5, textAlign: "center" }}>
            <Typography
              sx={{
                fontSize: typography.fontSizes.sm,
                color: colors.text.secondary,
                mb: 0.5,
              }}
            >
              {CONTACT_INFO.email}
            </Typography>
            <Typography
              sx={{
                fontSize: typography.fontSizes.sm,
                color: colors.text.secondary,
              }}
            >
              {CONTACT_INFO.workingHours}
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
}

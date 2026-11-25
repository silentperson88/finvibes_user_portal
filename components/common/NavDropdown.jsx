"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import NextLink from "next/link";
import { Typography, Box, Menu, MenuItem } from "@mui/material";
import { ArrowDropDown, ChevronRight } from "@mui/icons-material";
import { colors, typography } from "@/constants";

export default function NavDropdown({
  label,
  items = [],
  sx = {},
  triggerSx = {},
  paperSx = {},
  fullWidth = false,
  triggerType = "hover",
  disableHover = false,
  onSelect,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeSubMenuIndex, setActiveSubMenuIndex] = useState(null);
  const [subAnchorEl, setSubAnchorEl] = useState(null);
  const triggerRef = useRef(null);
  const timeoutRef = useRef(null);
  const subTimeoutRef = useRef(null);
  const open = Boolean(anchorEl);

  const handleImmediateClose = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (subTimeoutRef.current) clearTimeout(subTimeoutRef.current);
    setAnchorEl(null);
    setActiveSubMenuIndex(null);
    setSubAnchorEl(null);
  }, []);

  // Auto-close menu immediately whenever the window/page is scrolled or user clicks outside
  useEffect(() => {
    if (!open) return;

    const handleWindowScroll = (event) => {
      // If user is scrolling inside the open menu dropdown paper itself, do not close
      if (
        event?.target &&
        event.target.closest &&
        event.target.closest(".MuiMenu-paper")
      ) {
        return;
      }
      handleImmediateClose();
    };

    const handleWheel = (e) => {
      if (e?.target && e.target.closest && e.target.closest(".MuiMenu-paper")) {
        return;
      }
      handleImmediateClose();
    };

    const handleClickOutside = (event) => {
      if (triggerRef.current && triggerRef.current.contains(event.target)) {
        return;
      }
      if (
        event?.target &&
        event.target.closest &&
        event.target.closest(".MuiMenu-paper")
      ) {
        return;
      }
      handleImmediateClose();
    };

    window.addEventListener("scroll", handleWindowScroll, { capture: true, passive: true });
    window.addEventListener("wheel", handleWheel, { passive: true });
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleWindowScroll, { capture: true });
      window.removeEventListener("wheel", handleWheel);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, handleImmediateClose]);

  const handleOpen = () => {
    if (triggerType === "click") return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (triggerRef.current) {
      setAnchorEl(triggerRef.current);
    }
  };

  const handleClose = () => {
    if (triggerType === "click") return;
    timeoutRef.current = setTimeout(() => {
      setAnchorEl(null);
      setActiveSubMenuIndex(null);
      setSubAnchorEl(null);
    }, 180);
  };

  const handleClick = (e) => {
    if (open) {
      handleImmediateClose();
    } else {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setAnchorEl(e.currentTarget);
    }
  };

  const handleSubOpen = (e, index) => {
    if (subTimeoutRef.current) clearTimeout(subTimeoutRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveSubMenuIndex(index);
    setSubAnchorEl(e.currentTarget);
  };

  const handleSubClose = () => {
    subTimeoutRef.current = setTimeout(() => {
      setActiveSubMenuIndex(null);
      setSubAnchorEl(null);
    }, 180);
  };

  const activeColor = disableHover
    ? colors.text.primary
    : (open ? "primary.main" : colors.text.primary);

  return (
    <Box
      ref={triggerRef}
      onMouseEnter={triggerType === "hover" ? handleOpen : undefined}
      onMouseLeave={triggerType === "hover" ? handleClose : undefined}
      sx={{
        position: "relative",
        width: fullWidth ? "100%" : "auto",
        ...sx,
      }}
    >
      <Box
        onClick={handleClick}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: fullWidth ? "space-between" : "flex-start",
          cursor: "pointer",
          px: 1.5,
          py: 0.8,
          borderRadius: "8px",
          transition: "background-color 0.2s ease",
          "&:hover": {
            backgroundColor: "rgba(11, 99, 229, 0.04)",
          },
          "&:hover .nav-dropdown-text": disableHover
            ? {}
            : { color: "primary.main" },
          "&:hover .nav-dropdown-icon": disableHover
            ? {}
            : { color: "primary.main" },
          ...triggerSx,
        }}
      >
        <Typography
          className="nav-dropdown-text"
          sx={{
            fontFamily: "inherit",
            fontSize: typography.fontSizes.base,
            fontWeight: typography.fontWeights.bold,
            color: activeColor,
            transition: "color 0.2s ease",
            whiteSpace: "nowrap",
            letterSpacing: "-0.1px",
          }}
        >
          {label}
        </Typography>
        <ArrowDropDown
          className="nav-dropdown-icon"
          sx={{
            fontSize: "20px",
            color: activeColor,
            transition: "transform 0.2s ease, color 0.2s ease",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </Box>

      {/* Main Menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleImmediateClose}
        disableScrollLock
        autoFocus={false}
        disableAutoFocusItem
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        slotProps={{
          paper: {
            onMouseEnter: () => {
              if (triggerType === "click") return;
              if (timeoutRef.current) clearTimeout(timeoutRef.current);
            },
            onMouseLeave: triggerType === "hover" ? handleClose : undefined,
            sx: {
              mt: 0.8,
              minWidth: fullWidth && anchorEl ? anchorEl.offsetWidth : 210,
              borderRadius: "10px",
              boxShadow: "0 10px 30px rgba(15, 23, 42, 0.12)",
              border: `1px solid ${colors.border.light}`,
              py: 0.6,
              overflow: "visible",
              pointerEvents: "auto",
              ...paperSx,
            },
          },
        }}
        sx={{
          pointerEvents: "none",
        }}
      >
        {items.map((item, index) => {
          const itemKey = item.href ? item.href : (item.value !== undefined ? item.value : index);
          const hasSubItems = Boolean(item.subItems && item.subItems.length > 0);
          const isSubMenuOpen = activeSubMenuIndex === index && Boolean(subAnchorEl);

          if (hasSubItems) {
            return (
              <Box
                key={itemKey}
                onMouseEnter={
                  triggerType === "hover"
                    ? (e) => handleSubOpen(e, index)
                    : undefined
                }
                onMouseLeave={
                  triggerType === "hover" ? handleSubClose : undefined
                }
                sx={{ position: "relative" }}
              >
                <MenuItem
                  selected={isSubMenuOpen}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (isSubMenuOpen) {
                      setActiveSubMenuIndex(null);
                      setSubAnchorEl(null);
                    } else {
                      handleSubOpen(e, index);
                    }
                  }}
                  sx={{
                    fontFamily: "inherit",
                    fontSize: typography.fontSizes.sm,
                    fontWeight: typography.fontWeights.medium,
                    color: colors.text.primary,
                    padding: "9px 14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderRadius: "6px",
                    mx: 0.6,
                    lineHeight: 1.5,
                    backgroundColor: isSubMenuOpen ? "rgba(11, 99, 229, 0.08)" : "transparent",
                    "&:hover": {
                      backgroundColor: "rgba(11, 99, 229, 0.08)",
                      color: "primary.main",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "inherit",
                      fontWeight: "inherit",
                      color: "inherit",
                    }}
                  >
                    {item.label}
                  </Typography>
                  <ChevronRight
                    sx={{
                      fontSize: 18,
                      color: isSubMenuOpen ? "primary.main" : colors.text.secondary,
                      transition: "transform 0.2s ease",
                      transform: isSubMenuOpen ? "translateX(2px)" : "none",
                    }}
                  />
                </MenuItem>

                {/* Nested Submenu */}
                <Menu
                  anchorEl={subAnchorEl}
                  open={isSubMenuOpen}
                  onClose={handleImmediateClose}
                  disableScrollLock
                  autoFocus={false}
                  disableAutoFocusItem
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  slotProps={{
                    paper: {
                      onMouseEnter: () => {
                        if (triggerType === "click") return;
                        if (subTimeoutRef.current) clearTimeout(subTimeoutRef.current);
                        if (timeoutRef.current) clearTimeout(timeoutRef.current);
                      },
                      onMouseLeave: () => {
                        if (triggerType === "hover") {
                          handleSubClose();
                          handleClose();
                        }
                      },
                      sx: {
                        ml: 1.75,
                        minWidth: 200,
                        borderRadius: "10px",
                        boxShadow: "0 10px 30px rgba(15, 23, 42, 0.14)",
                        border: `1px solid ${colors.border.light}`,
                        py: 0.6,
                        pointerEvents: "auto",
                      },
                    },
                  }}
                  sx={{
                    pointerEvents: "none",
                  }}
                >
                  {item.subItems.map((sub) => (
                    <MenuItem
                      key={sub.href}
                      component={NextLink}
                      href={sub.href}
                      onClick={handleImmediateClose}
                      sx={{
                        fontFamily: "inherit",
                        fontSize: typography.fontSizes.sm,
                        fontWeight: typography.fontWeights.medium,
                        color: colors.text.primary,
                        padding: "9px 14px",
                        borderRadius: "6px",
                        mx: 0.6,
                        lineHeight: 1.5,
                        "&:hover": {
                          backgroundColor: "rgba(11, 99, 229, 0.08)",
                          color: "primary.main",
                        },
                      }}
                    >
                      {sub.label}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            );
          }

          if (item.href) {
            return (
              <MenuItem
                key={itemKey}
                component={NextLink}
                href={item.href}
                onClick={handleImmediateClose}
                onMouseEnter={() => {
                  if (triggerType === "click") return;
                  if (subTimeoutRef.current) clearTimeout(subTimeoutRef.current);
                  setActiveSubMenuIndex(null);
                  setSubAnchorEl(null);
                }}
                sx={{
                  fontFamily: "inherit",
                  fontSize: typography.fontSizes.sm,
                  fontWeight: typography.fontWeights.medium,
                  color: colors.text.primary,
                  padding: "9px 14px",
                  borderRadius: "6px",
                  mx: 0.6,
                  lineHeight: 1.5,
                  "&:hover": disableHover
                    ? {}
                    : {
                        backgroundColor: "rgba(11, 99, 229, 0.08)",
                        color: "primary.main",
                      },
                }}
              >
                {item.label}
              </MenuItem>
            );
          }

          return (
            <MenuItem
              key={itemKey}
              onClick={() => {
                if (item.onClick) {
                  item.onClick();
                } else if (onSelect) {
                  onSelect(item.value);
                }
                handleImmediateClose();
              }}
              onMouseEnter={() => {
                if (triggerType === "click") return;
                if (subTimeoutRef.current) clearTimeout(subTimeoutRef.current);
                setActiveSubMenuIndex(null);
                setSubAnchorEl(null);
              }}
              selected={Boolean(item.selected)}
              sx={{
                fontFamily: "inherit",
                fontSize: typography.fontSizes.sm,
                fontWeight: item.selected ? 700 : typography.fontWeights.medium,
                color: item.selected ? colors.brand.primary : colors.text.primary,
                backgroundColor: item.selected ? "#f0f6ff" : "transparent",
                padding: "9px 14px",
                borderRadius: "6px",
                mx: 0.6,
                lineHeight: 1.5,
                "&:hover": disableHover
                  ? {
                      backgroundColor: item.selected ? "#f0f6ff" : "transparent",
                      color: item.selected ? colors.brand.primary : colors.text.primary,
                    }
                  : {
                      backgroundColor: "rgba(11, 99, 229, 0.08)",
                      color: "primary.main",
                    },
              }}
            >
              {item.label}
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
}

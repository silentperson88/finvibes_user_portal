"use client";

import { usePathname } from "next/navigation";
import { Box } from "@mui/material";
import TopInfoBar from "@/components/TopInfoBar";
import MainNavbar from "@/components/MainNavbar";
import { colors } from "@/constants";

export default function Header() {
  const pathname = usePathname();
  if (pathname === "/404") return null;

  return (
    <>
      {/* Top info strip (scrolls away naturally) */}
      {/* <TopInfoBar /> */}

      {/* Sticky Main Navigation Bar (sticks to top of viewport on scroll) */}
      <Box
        component="header"
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1100,
          backgroundColor: colors.surface.white,
          boxShadow: "0 2px 12px rgba(24, 37, 59, 0.08)",
          width: "100%",
        }}
      >
        <MainNavbar />
      </Box>
    </>
  );
}

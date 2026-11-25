import { createTheme } from "@mui/material/styles";
import { colors, typography } from "@/constants";

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.brand.primary,
      hover: colors.brand.primaryHover,
      light: colors.brand.primaryLight,
    },
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
      white: colors.text.white,
    },
    brand: colors.brand,
    navy: colors.navy,
  },
  typography: {
    fontFamily: typography.fontFamily,
    body1: { fontSize: typography.fontSizes.base },
    body2: { fontSize: typography.fontSizes.sm },
    caption: { fontSize: typography.fontSizes.xs },
  },
  customTypography: typography.fontSizes,
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
      styleOverrides: {
        root: {
          paddingLeft: "24px",
          paddingRight: "24px",
          "@media (min-width: 600px)": {
            paddingLeft: "32px",
            paddingRight: "32px",
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": {
            display: "none",
            width: 0,
            height: 0,
          },
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": {
            display: "none",
            width: 0,
            height: 0,
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": {
            display: "none",
            width: 0,
            height: 0,
          },
        },
      },
    },
  },
});

export { colors, typography } from "@/constants";
export default theme;

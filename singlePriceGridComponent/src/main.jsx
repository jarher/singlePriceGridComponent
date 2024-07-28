import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/karla";
import App from "./App";

const theme = extendTheme({
  styles: {
    global: {
      html: {
        fontSize: "16px",
      },
      body: {
        bg: "gray.100",
      },
      main: {
        alignItems: "center",
        bg: "gray.100",
        display: "flex",
        height: ["auto", null, null, "100vh"],
        justifyContent: "center",
        width: "100%",
      },
      sub: {
        color: "gray.100",
        fontSize: "1rem",
        fontWeight: "100",
        letterSpacing: "0.05rem",
      },
    },
  },
  colors: {
    cyan: {
      400: "hsl(179, 62%, 43%)",
      300: "hsl(179, 47%, 52%)",
    },
    yellow: {
      100: "hsl(71, 73%, 64%)",
      200: "hsl(71, 73%, 54%)",
    },
    gray: {
      100: "hsl(204, 43%, 93%)",
      300: "hsl(218, 22%, 67%)",
    },
  },
  fonts: {
    body: "karla, sans-serif",
    heading: "karla-light, sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);

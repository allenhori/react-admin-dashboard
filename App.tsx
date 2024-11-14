import React, { createContext, useState } from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Navbar, SideBar } from "./scenes";
import { Outlet } from "react-router-dom";

// Define the type for the toggled context
interface ToggledContextType {
  toggled: boolean;
  setToggled: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context with a default value of `null` (for initial setup)
export const ToggledContext = createContext<ToggledContextType | null>(null);

function App() {
  const [theme, colorMode] = useMode();
  const [toggled, setToggled] = useState<boolean>(false);
  
  // Define the value passed to the context provider with appropriate typing
  const values = { toggled, setToggled };
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ToggledContext.Provider value={values}>
          <Box sx={{ display: "flex", height: "100vh", maxWidth: "100%" }}>
            <SideBar />
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                height: "100%",
                maxWidth: "100%",
              }}
            >
              <Navbar />
              <Box sx={{ overflowY: "auto", flex: 1, maxWidth: "100%" }}>
                <Outlet />
              </Box>
            </Box>
          </Box>
        </ToggledContext.Provider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

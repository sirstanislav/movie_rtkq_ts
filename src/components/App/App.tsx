import "./App.css";
import * as React from "react";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import { HeaderResponsive } from "../HeaderResponsive/HeaderResponsive";
import { Subgrid } from "../Subgrid/Subgrid";
import FooterSocial from "../FooterSocial/FooterSocial";
import AffixButton from "../AffixButton/AffixButton";

interface IAppProps {}

const App: React.FC<IAppProps> = props => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <div className="App">
          <HeaderResponsive />
          <Subgrid />
          <FooterSocial />
          <AffixButton />
        </div>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default App;

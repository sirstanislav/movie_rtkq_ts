import "./App.css";
import * as React from "react";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { Pages } from "../Pages/Pages";
import AffixButton from "../AffixButton/AffixButton";
import { SavedMovies } from "../CardList/SavedMovies";
import { FoundMovies } from "../CardList/FoundMovies";
import FooterSocial from "../FooterSocial/FooterSocial";
import { TopRatedMovies } from "../CardList/TopRatedMovies";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import FullScreenPopup from "../FullScreenPopup/FullScreenPopup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HeaderResponsive } from "../HeaderResponsive/HeaderResponsive";

interface IAppProps { }

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <HeaderResponsive />
        <TopRatedMovies />
        <Pages />
        <FooterSocial />
        <AffixButton />
        <FullScreenPopup />
      </>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: "/search",
    element: (
      <>
        <HeaderResponsive />
        <FoundMovies />
        <Pages />
        <FooterSocial />
        <AffixButton />
        <FullScreenPopup />
      </>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: "/saved",
    element: (
      <>
        <HeaderResponsive />
        <SavedMovies />
        <Pages />
        <FooterSocial />
        <AffixButton />
        <FullScreenPopup />
      </>
    ),
    errorElement: <NotFoundPage />,
  },
]);

const App: React.FC<IAppProps> = (props) => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
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
        theme={{
          colorScheme, loader: "dots",
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <div className="App">
          <RouterProvider router={router} />
        </div>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default App;

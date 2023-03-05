import * as React from "react";
import { Loader, createStyles } from "@mantine/core";

interface IPreloaderProps {}

const useStyles = createStyles(theme => ({
  loader: {
    margin: "auto",
  }
}));

const Preloader: React.FunctionComponent<IPreloaderProps> = props => {
  const { classes } = useStyles();

  return <Loader size="xl" variant="dots" className={classes.loader} />;
};

export default Preloader;

import * as React from "react";
import { Pagination } from "@mantine/core";
import { useState, useEffect } from "react";
import { createStyles } from "@mantine/core";
import { pageCounter } from "../../redux/movieDataSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const useStyles = createStyles((theme) => ({
  root: {
    justifyContent: "center",
    marginTop: "auto",
  },
}));

interface IPagesProps {}

const Pages: React.FunctionComponent<IPagesProps> = (props) => {
  const { classes } = useStyles();
  const dispatch = useAppDispatch();
  const [activePage, setPage] = useState(1);

  const totalPages = useAppSelector((state) => state.movieData.numberOfPages);

  useEffect(() => {
    dispatch(pageCounter({ pageCounter: activePage }));
  }, [activePage, dispatch]);

  const Paging = () => {
    return (
      <Pagination
        className={classes.root}
        value={activePage}
        onChange={setPage}
        total={totalPages || 1}
      />
    );
  };

  return Paging();
};

export { Pages };

import * as React from "react";
import { Button, Group } from "@mantine/core";
import { createStyles } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { isClickNextPage } from "../../redux/tweetDataSlice";
import { useState } from "react";
import { Pagination } from "@mantine/core";
import { usePagination } from "@mantine/hooks";

const useStyles = createStyles(theme => ({
  root: {
    zIndex: 1,
    justifyContent: "center",
    marginRight: 20,
    [theme.fn.smallerThan("sm")]: {
      justifyContent: "flex-end"
    }
  }
}));

interface IPagesProps {}

const Pages: React.FunctionComponent<IPagesProps> = props => {
  const { classes } = useStyles();
  const dispatch = useAppDispatch();
  const [activePage, setPage] = useState(1);
  const pagination = usePagination({ total: 10, initialPage: 1 });

  return (
    // <Pagination value={activePage} onChange={setPage} total={10} />;
    <Group className={classes.root}>
      <Button
        onClick={() => {
          dispatch(isClickNextPage({ isClickNextPage: true }));
        }}
        rightIcon={<IconArrowRight size="1rem" />}
        radius="sm"
      >
        Next Page
      </Button>
    </Group>
  );
};

export { Pages };

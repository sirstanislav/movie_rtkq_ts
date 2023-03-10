import * as React from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { CloseButton, createStyles, Text } from "@mantine/core";
import { openPopup } from "../../redux/movieDataSlice";

interface IFullScreenPopupProps {}

const useStyles = createStyles(theme => ({
  root: {
    top: 0,
    left: 0,
    opacity: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    zIndex: 2,
    position: "fixed",
    alignItems: "center",
    justifyContent: "center",
    visibility: "hidden",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out"
  },
  rootEnable: {
    opacity: 1,
    visibility: "visible"
  },
  image: {
    maxWidth: "75vw",
    maxHeight: "75vh",
    position: "relative"
  },
  image_full: {
    maxWidth: "75vw",
    maxHeight: "75vh",
    borderRadius: "5px"
  },
  close: {
    position: "absolute",
    top: "-40px",
    right: "-40px"
  },
  title: {
    color: theme.colors.gray[0]
  }
}));

const FullScreenPopup: React.FunctionComponent<IFullScreenPopupProps> = props => {
  const dispatch = useAppDispatch();
  const { classes, cx } = useStyles();
  const { isOpen, movie } = useAppSelector(state => state.movieData);

  return (
    <section
      className={cx(classes.root, { [classes.rootEnable]: isOpen })}
      onMouseDown={e => {
        if (e.target === e.currentTarget) {
          dispatch(openPopup({ isOpen: false, movie: movie }));
        }
      }}
    >
      <div className={classes.image}>
        <CloseButton
          title="Close popover"
          size="xl"
          iconSize={30}
          className={classes.close}
          onClick={() => {
            dispatch(openPopup({ isOpen: false, movie: movie }));
          }}
        />
        <img
          className={classes.image_full}
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt=""
        />
        <Text className={classes.title} weight={500}>
          {movie.original_title}
        </Text>
      </div>
    </section>
  );
};

export default FullScreenPopup;

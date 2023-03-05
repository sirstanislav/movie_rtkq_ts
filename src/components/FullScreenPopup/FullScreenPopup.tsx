import * as React from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { CloseButton, createStyles } from "@mantine/core";
import { openPopup } from "../../redux/openPopupSlice";

interface IFullScreenPopupProps {}

const useStyles = createStyles(theme => ({
  root: {
    top: 0,
    left: 0,
    opacity: 0,
    width: "100%",
    height: "100%",
    display: "flex",
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
  }
}));

const FullScreenPopup: React.FunctionComponent<IFullScreenPopupProps> = props => {
  const { classes, cx } = useStyles();
  const dispatch = useAppDispatch();
  const { isOpen, tweet } = useAppSelector(state => state.openPopup);

  return (
    <section
      className={cx(classes.root, { [classes.rootEnable]: isOpen })}
      onMouseDown={e => {
        if (e.target === e.currentTarget) {
          dispatch(openPopup({ isOpen: false, tweet: tweet }));
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
            dispatch(openPopup({ isOpen: false, tweet: tweet }));
          }}
        />
        <img className={classes.image_full} src={tweet.url} alt="" />
      </div>
    </section>
  );
};

export default FullScreenPopup;

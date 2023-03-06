import * as React from "react";
import { IconArrowUp } from "@tabler/icons-react";
import { useWindowScroll } from "@mantine/hooks";
import { Affix, Button, Text, Transition, rem } from "@mantine/core";
import { useAppSelector } from "../../redux/hooks";
import { createStyles } from "@mantine/core";

const useStyles = createStyles(theme => ({
  root: {
    [theme.fn.smallerThan("sm")]: {
      left: 20
    }
  }
}));

interface IAffixButtonProps {}

const AffixButton: React.FunctionComponent<IAffixButtonProps> = props => {
  const [scroll, scrollTo] = useWindowScroll();
  const { isOpen } = useAppSelector(state => state.tweetData);
  const { classes } = useStyles();

  return (
    <>
      <Affix
        zIndex={0}
        position={{ bottom: rem(100), right: rem(20) }}
        display={isOpen ? "none" : "block"}
        className={classes.root}
      >
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {transitionStyles => (
            <Button
              leftIcon={<IconArrowUp size="1rem" />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
};

export default AffixButton;

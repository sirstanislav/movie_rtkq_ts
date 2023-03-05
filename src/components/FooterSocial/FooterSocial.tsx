import * as React from "react";
import {
  createStyles,
  Container,
  Group,
  ActionIcon,
  rem,
  Image,
  Button
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram
} from "@tabler/icons-react";
import { MantineLogo } from "@mantine/ds";
import logo from "../../images/logo.png";

const useStyles = createStyles(theme => ({
  footer: {
    marginTop: 60,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`
  },

  inner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "row"
    }
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md
    }
  }
}));

interface IFooterSocialProps {}

const FooterSocial: React.FC<IFooterSocialProps> = props => {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Image maw={40} radius="md" src={logo} alt="Random image" />
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon
            size="lg"
            component="a"
            href="https://twitter.com/ctacbarada"
            target="_blank"
          >
            <IconBrandTwitter size="1.05rem" stroke={2} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
};

export default FooterSocial;

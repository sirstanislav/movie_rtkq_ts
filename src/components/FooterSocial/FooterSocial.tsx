import * as React from "react";
import {
  createStyles,
  Container,
  Group,
  ActionIcon,
  rem,
  Image,
} from "@mantine/core";
import { IconBrandTwitter } from "@tabler/icons-react";
import logo from "../../images/logo.png";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 7,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "row",
    },
  },

  links: {},
}));

interface IFooterSocialProps {}

const FooterSocial: React.FC<IFooterSocialProps> = (props) => {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Image maw={40} radius="md" src={logo} alt="Random image" />
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon
            color="blue"
            size="xl"
            component="a"
            href="https://twitter.com/ctacbarada"
            target="_blank"
          >
            <IconBrandTwitter size="2.125rem" stroke={1.2} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
};

export default FooterSocial;

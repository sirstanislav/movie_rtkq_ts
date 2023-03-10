import * as React from 'react';
import { useState, useEffect, useMemo } from 'react';
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Image,
  Transition,
  rem,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import logo from '../../images/logo.png';
import { useDisclosure } from '@mantine/hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import { IconSearch } from '@tabler/icons-react';
import { searchValue } from '../../redux/movieDataSlice';
import { useAppDispatch } from '../../redux/hooks';
import ColorSchemeToggle from '../ColorSchemeToggle/ColorSchemeToggle';

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  search: {},

  logo: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({
        variant: 'light',
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
        .color,
    },
  },
}));

interface IHeaderResponsiveProps {}

const HeaderResponsive: React.FC<IHeaderResponsiveProps> = (props) => {
  const links = useMemo(
    () => [
      {
        link: '/',
        label: 'Home',
      },
      {
        link: '/saved',
        label: 'Saved',
      },
    ],
    []
  );

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { classes, cx } = useStyles();
  const [active, setActive] = useState(links[0].link);
  const [opened, { toggle, close }] = useDisclosure(false);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        close();
        navigate(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  const form = useForm({
    initialValues: {
      search: '',
    },
  });

  useEffect(() => {
    links.forEach((link) => {
      if (link.link === location.pathname) setActive(link.link);
    });
  }, [links, location.pathname]);

  return (
    <Header height={HEADER_HEIGHT} mb={60} className={classes.root}>
      <Container className={classes.header}>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />

        <Image
          maw={40}
          radius="md"
          src={logo}
          alt="Random image"
          className={classes.logo}
        />

        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <form
          onSubmit={form.onSubmit((value) => {
            dispatch(searchValue({ searchValue: value.search }));
            form.values.search = '';
            navigate('/search');
          })}
        >
          <TextInput
            {...form.getInputProps('search')}
            value={form.values.search}
            className={classes.search}
            placeholder="Search"
            icon={<IconSearch size="1rem" stroke={1.5} />}
            radius="lg"
          />
        </form>

        <ColorSchemeToggle />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
};

export { HeaderResponsive };

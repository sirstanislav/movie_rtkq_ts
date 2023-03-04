import * as React from "react";
import {
  SimpleGrid,
  Skeleton,
  Container,
  Stack,
  useMantineTheme,
  px,
  Grid
} from "@mantine/core";
import CardTweet from "../CardTweet/CardTweet";
import { useState } from "react";

export function Subgrid() {
  const [loading, setLoading] = useState(false);
  const getRandomInit = () => {
    return Math.floor(Math.random() * (5 - 3 + 1)) + 3;
  };

  console.log("getRandomInit:", getRandomInit());

  const child = (
    <Skeleton height="auto" radius="md" animate={true} visible={loading}>
      <CardTweet />
    </Skeleton>
  );

  return (
    <Container my="md">
      <Grid grow gutter="xl">
        {Array.from({ length: 30 }).map((_, index) => (
          <Grid.Col
            key={index}
            xs={getRandomInit()}
            style={{ flexBasis: `${getRandomInit()}0%` }}
          >
            {child}
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}

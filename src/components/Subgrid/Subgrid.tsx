import * as React from "react";
import { useState } from "react";
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
import Preloader from "../Preloader/Preloader";
import { useGetTweetsQuery } from "../../redux/twitterApi";

export function Subgrid() {
  const { data: tweetsArray = [], error, isLoading } = useGetTweetsQuery(
    "35mm"
  );

  const getRandomInit = () => {
    return Math.floor(Math.random() * (5 - 3 + 1)) + 3;
  };

  return (
    <Container my="md">
      <Grid grow gutter="xl">
        {isLoading ? (
          <Preloader />
        ) : (
          tweetsArray.includes.media.map((tweet: {}, index: number) => {
            return (
              <Grid.Col
                key={index}
                xs={getRandomInit()}
                style={{ flexBasis: `${getRandomInit()}0%` }}
              >
                <Skeleton
                  height="auto"
                  radius="md"
                  animate={true}
                  visible={isLoading}
                >
                  <CardTweet tweet={tweet} />
                </Skeleton>
              </Grid.Col>
            );
          })
        )}
      </Grid>
    </Container>
  );
}

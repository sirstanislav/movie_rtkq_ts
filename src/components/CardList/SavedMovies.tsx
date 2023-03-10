import * as React from "react";
import { useEffect } from "react";
import Preloader from "../Preloader/Preloader";
import CardMovie from "../CardMovie/CardMovie";
import { Result } from "../../Types/MoviesType";
import { Container, Grid, Skeleton } from "@mantine/core";
import { useGetSavedMoviesQuery } from "../../redux/saveMovieApi";
import { useAppDispatch } from "../../redux/hooks";
import { numberOfPages } from "../../redux/movieDataSlice";

interface ISavedMoviesProps {}

const SavedMovies: React.FC<ISavedMoviesProps> = (props) => {
  const dispatch = useAppDispatch();

  const MovieList = () => {
    const { data: moviesArray, isLoading } = useGetSavedMoviesQuery();

    const totalPages: number = 1;

    useEffect(() => {
      dispatch(numberOfPages({ numberOfPages: totalPages }));
    }, [totalPages]);

    if (isLoading) {
      return <Preloader />;
    }

    return moviesArray?.map((movie: Result, index: number) => {
      return (
        <Grid.Col key={index} xs={3}>
          <Skeleton height={200} radius="md" animate={true} visible={isLoading}>
            <CardMovie movie={movie} />
          </Skeleton>
        </Grid.Col>
      );
    });
  };

  return (
    <>
      <Container mb="3.75rem">
        <Grid grow gutter="xl">
          {MovieList()}
        </Grid>
      </Container>
    </>
  );
};

export { SavedMovies };

import * as React from "react";
import { useEffect } from "react";
import Preloader from "../Preloader/Preloader";
import CardMovie from "../CardMovie/CardMovie";
import { Container, Grid, Skeleton } from "@mantine/core";
import { numberOfPages } from "../../redux/movieDataSlice";
import { useSearchMoviesQuery } from "../../redux/getMovieApi";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

interface IFoundMoviesProps {}

const FoundMovies: React.FC<IFoundMoviesProps> = (props) => {
  const dispatch = useAppDispatch();
  const pageCounter = useAppSelector((state) => state.movieData.pageCounter);
  const searchValue = useAppSelector((state) => state.movieData.searchValue);

  const MovieList = () => {
    const { moviesArray, totalPages, isLoading } = useSearchMoviesQuery(
      {
        searchValue: searchValue || "Italy",
        page: pageCounter,
      },
      {
        selectFromResult: ({ data, isLoading }) => ({
          moviesArray: data?.results,
          isLoading: isLoading,
          totalPages: data?.total_pages,
        }),
      }
    );

    useEffect(() => {
      dispatch(numberOfPages({ numberOfPages: totalPages }));
    }, [totalPages]);

    if (isLoading) {
      return <Preloader />;
    }

    return moviesArray?.map((movie, index) => {
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

export { FoundMovies };

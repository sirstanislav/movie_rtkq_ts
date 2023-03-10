import * as React from "react";
import { Card, Image, Text, Group, ActionIcon } from "@mantine/core";
import { useAppDispatch } from "../../redux/hooks";
import { openPopup } from "../../redux/movieDataSlice";
import { Result } from "../../Types/MoviesType";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import {
  useDeleteMovieMutation,
  useGetSavedMoviesQuery,
  useSaveMovieMutation,
} from "../../redux/saveMovieApi";
import { useCallback, useEffect } from "react";

interface ICardMovieProps {
  movie: Result;
}

const CardMovie: React.FunctionComponent<ICardMovieProps> = ({ movie }) => {
  const dispatch = useAppDispatch();
  const [saveMovie] = useSaveMovieMutation();
  const [like, setLike] = React.useState(false);
  const [deleteMovie] = useDeleteMovieMutation();
  const { data: savedMovies } = useGetSavedMoviesQuery();

  const handleSaveMovie = async () => {
    await saveMovie({ ...movie, like: true }).unwrap();
  };

  const handleDeleteMovie = async () => {
    await deleteMovie(movie.id).unwrap();
  };

  const checkLikeStatus = useCallback(() => {
    savedMovies?.forEach((savedMovie) => {
      if (savedMovie.id === movie.id) setLike(true);
    });
  }, [movie.id, savedMovies]);

  useEffect(() => {
    checkLikeStatus();
  }, [checkLikeStatus]);

  return (
    <Card shadow="sm" padding="xs" radius="md">
      <Card.Section>
        <Image
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          height={160}
          alt="Norway"
          onClick={() => {
            dispatch(openPopup({ isOpen: true, movie: movie }));
          }}
        />
      </Card.Section>

      <Group position="apart" mt="xs">
        <Text
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan", deg: 45 }}
          weight={500}
          fz="sm"
          style={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            width: "50%",
            whiteSpace: "nowrap",
          }}
        >
          {movie.original_title}
        </Text>
        <ActionIcon
          color={like ? "orange" : "blue"}
          onClick={() => {
            like ? handleDeleteMovie() : handleSaveMovie();
            setLike(!like);
          }}
        >
          {like ? (
            <IconHeartFilled size="1.125rem" />
          ) : (
            <IconHeart size="1.125rem" />
          )}
        </ActionIcon>
      </Group>
    </Card>
  );
};

export default CardMovie;

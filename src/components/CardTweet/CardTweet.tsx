import * as React from "react";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { openPopup } from "../../redux/openPopupSlice";

interface ICardTweetProps {
  tweet: any;
}

const CardTweet: React.FunctionComponent<ICardTweetProps> = ({ tweet }) => {
  const dispatch = useAppDispatch();

  return (
    <Card shadow="sm" padding="xs" radius="md">
      <Card.Section>
        <Image
          src={tweet.url}
          height={160}
          alt="Norway"
          onClick={() => {
            dispatch(openPopup({ isOpen: true, tweet: tweet}));
          }}
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Norway Fjord Adventures</Text>
      </Group>
    </Card>
  );
};

export default CardTweet;

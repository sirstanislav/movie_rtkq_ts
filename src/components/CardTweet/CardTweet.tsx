import * as React from "react";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

interface ICardTweetProps {}

const CardTweet: React.FunctionComponent<ICardTweetProps> = props => {
  return (
    <Card shadow="sm" padding="xs" radius="md">
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Norway Fjord Adventures</Text>
      </Group>
    </Card>
  );
};

export default CardTweet;
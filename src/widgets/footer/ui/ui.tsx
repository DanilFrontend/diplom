import React from "react";
import { Button, Flex, Group, Stack, Text } from "@mantine/core";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div>
      <Group position={"center"} grow>
        <Stack align="center" h={300}>
          <Text fw={700}>Контактная информация</Text>
          <a href="mailto:danilstorage@gmail.com">
            <Button variant="subtle" color="orange">
              Эл. почта: danilstorage@gmail.com
            </Button>
          </a>
          <Button
            component={"a"}
            href={"tel:+79999999999"}
            variant="subtle"
            color="orange"
          >
            Телефон: +7 (999) 999 99-99
          </Button>
        </Stack>
        <Stack align="center" h={300}>
          <Text fw={700}>Общая информация</Text>
          <Link to={"/about-us"}>
            <Button variant="subtle" color="orange">
              О нас
            </Button>
          </Link>
        </Stack>
        <Stack align="center" h={300}>
          <Text fw={700}>Время работы</Text>
          <Button variant="subtle" color="orange">
            Пн - чт : 9:00, 22:00 мск.
          </Button>
          <Button variant="subtle" color="orange">
            Пт - Сб : 12:00, 21:00 мск.
          </Button>
        </Stack>
      </Group>
    </div>
  );
};

import React, { FC } from "react";
import {Badge, Button, Card, Group, Image, Stack, Text} from "@mantine/core";
import { IconShoppingCart, IconTrash } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { CardInterface } from "../../pizza-card";

const DrinkCard: FC<CardInterface> = (props) => {
  const [countProduct, setCountProduct] = React.useState<number>(1);
  const plusOrMinusCount = (a: string) => {
    if (a === "+") setCountProduct(countProduct + 1);
    else if (countProduct === 1) setCountProduct(countProduct);
    else setCountProduct(countProduct - 1);
  };
  return (
      <div>
          {props.toCard &&
              <Group>
                  <Image
                      radius={20}
                      height={150}
                      width={150}
                      src="https://dodopizza-a.akamaihd.net/static/Img/Products/b3e4267e06334a428dcc9f1f10a72f34_292x292.webp"
                      alt="Norway"
                  />
                  <Stack>
                      <Text size={20}>Кофе Американо</Text>
                      <Text size={15}>0,4 л.</Text>
                  </Stack>
                  <Button onClick={() => plusOrMinusCount("-")} color={"orange"}>
                      -
                  </Button>
                  <Text
                      variant="gradient"
                      gradient={{ from: "yellow", to: "orange", deg: 45 }}
                      size={"lg"}
                      fw={700}
                  >
                      {countProduct}
                  </Text>
                  <Button onClick={() => plusOrMinusCount("+")} color={"orange"}>
                      +
                  </Button>

                  <Text size={20}>777 RUB</Text>
                  <Button variant={'light'} leftIcon={<IconTrash />} color={"red"}>
                      Удалить
                  </Button>
              </Group>
          }
          {!props.toCard &&
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Card.Section>
                      <Image
                          height={300}
                          width={300}
                          src="https://dodopizza-a.akamaihd.net/static/Img/Products/b3e4267e06334a428dcc9f1f10a72f34_292x292.webp"
                          alt="Norway"
                      />
                  </Card.Section>

                  <Group position="apart" mt="md" mb="xs">
                      <Text size={18} fw={500}>
                          Кофе Американо
                      </Text>
                  </Group>
                  <Text maw={260} size={14}>
                      Пара глотков горячего Американо, и вы будете готовы покорять этот день
                  </Text>
                  {props.landing && (
                      <Button
                          component={Link}
                          to={"/catalog"}
                          leftIcon={<IconShoppingCart />}
                          variant="light"
                          color="orange"
                          fullWidth
                          mt="md"
                          radius="md"
                      >
                          Каталог
                      </Button>
                  )}
                  {props.commerce && (
                      <div>
                          <Group position={"center"} mt={"5%"}>
                              <Badge
                                  sx={() => ({
                                      textTransform: "none",
                                  })}
                                  size={"lg"}
                                  variant="gradient"
                                  gradient={{ from: "orange", to: "red" }}
                              >
                                  Тип напитка
                              </Badge>
                              <Badge
                                  sx={() => ({
                                      textTransform: "none",
                                  })}
                                  size={"lg"}
                                  variant="gradient"
                                  gradient={{ from: "orange", to: "red" }}
                              >
                                  99 RUB
                              </Badge>
                          </Group>
                          <Button
                              leftIcon={<IconShoppingCart />}
                              variant="light"
                              color="orange"
                              fullWidth
                              mt="md"
                              radius="md"
                          >
                              В корзину
                          </Button>
                      </div>
                  )}
              </Card>}
      </div>
  );
};

export default DrinkCard;

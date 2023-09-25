import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIcontList from "./PlatformIcontList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card borderRadius={10} overflow="hidden">
        <Image src={game.background_image} />
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
          <PlatformIcontList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIcontList>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;

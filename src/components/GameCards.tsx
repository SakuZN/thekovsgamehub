import {Game} from "../hooks/useGames.ts";
import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import PlatformIconlist from "./PlatformIconlist.tsx";
import CriticScore from "./CriticScore.tsx";
import cropImageURL from "../services/cropImageURL.tsx";

interface GCProps {
    game : Game
}


const GameCards = ( {game} : GCProps) => {
    return (
        <Card>
            <Image src={cropImageURL(game.background_image)}/>
            <CardBody borderRadius={10} overflow='hidden'>
                <Heading fontSize={'2xl'}>
                    {game.name}
                </Heading>
                <HStack justifyContent='space-between'>
                    <PlatformIconlist platforms={game.parent_platforms.map(p => p.platform)}/>
                    <CriticScore score={game.metacritic}/>
                </HStack>
            </CardBody>
        </Card>
    )
}
export default GameCards

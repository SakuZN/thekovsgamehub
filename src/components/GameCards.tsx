import {Game} from "../hooks/useGames.ts";
import {Card, CardBody, Heading, Image} from "@chakra-ui/react";
import PlatformIconlist from "./PlatformIconlist.tsx";

interface GCProps {
    game : Game
}


const GameCards = ( {game} : GCProps) => {
    return (
        <Card>
            <Image src={game.background_image}/>
            <CardBody borderRadius={10} overflow='hidden'>
                <Heading fontSize={'2xl'}>
                    {game.name}
                </Heading>
                <PlatformIconlist platforms={game.parent_platforms.map(p => p.platform)}/>
            </CardBody>
        </Card>
    )
}
export default GameCards

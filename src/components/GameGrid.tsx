import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";
import GameCards from "./GameCards.tsx";

const GameGrid = () => {

    const {games, error} = useGames();

    return (
        <>
            {error ? <Text>{error}</Text> : (
                <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} spacing={10} padding={10}>
                    {games.map(game =>
                    <GameCards key={game.id} game={game} />
                    )}
                </SimpleGrid>
            )}
        </>
    )
}
export default GameGrid

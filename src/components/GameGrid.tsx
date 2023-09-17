import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";
import GameCards from "./GameCards.tsx";
import GCSkeleton from "./GCSkeleton.tsx";
import GcStyleContainer from "./GCStyleContainer.tsx";

const GameGrid = () => {

    const {data, error, isLoading} = useGames();
    const skeletons = Array(10).fill(0);

    return (
        <>
            {error ? <Text>{error}</Text> : (
                <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} spacing={10} padding={10}>
                    {isLoading ? skeletons.map((_, i) =>
                    <GcStyleContainer>
                        <GCSkeleton key={i}/>
                    </GcStyleContainer>) : null}

                    {data.map(game =>
                        <GcStyleContainer>
                            <GameCards key={game.id} game={game} />
                        </GcStyleContainer>
                    )}
                </SimpleGrid>
            )}
        </>
    )
}
export default GameGrid

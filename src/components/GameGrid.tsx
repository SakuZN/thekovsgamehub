import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";
import GameCards from "./GameCards.tsx";
import GCSkeleton from "./GCSkeleton.tsx";
import GcStyleContainer from "./GCStyleContainer.tsx";
import {Genre} from "../hooks/useGenres.ts";

interface GGProps {
    selectedGenre: Genre | null
}

const GameGrid = ({selectedGenre}: GGProps) => {

    const {data, error, isLoading} = useGames(selectedGenre);
    const skeletons = Array(data.length).fill(0);

    return (
        <>
            {error ? <Text>{error}</Text> :
                isLoading
                    ? (
                        <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} spacing={3} padding={10}>
                            {skeletons.map((_, i) =>
                                <GcStyleContainer  key={i}>
                                    <GCSkeleton/>
                                </GcStyleContainer>
                            )}
                        </SimpleGrid>
                    )
                    : (
                        <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} spacing={3} padding={10}>
                            {data.length > 0 && data.map((game) =>
                                <GcStyleContainer key={game.id}>
                                    <GameCards  game={game} />
                                </GcStyleContainer>
                            )}
                        </SimpleGrid>
                    )
            }
        </>
    )
}
export default GameGrid

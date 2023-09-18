import {Grid, GridItem, HStack, Show} from "@chakra-ui/react";
import NavBar from "./components/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";
import {useState} from "react";
import {Genre} from "./hooks/useGenres.ts";
import PlatformSelector from "./components/PlatformSelector.tsx";
import {Platforms} from "./hooks/usePlatforms.ts";
import SortSelector from "./components/SortSelector.tsx";

export interface Query {
    genre: Genre | null
    platform: Platforms | null
    sortOrder: string
}

function App() {

    const [Query, setQuery] = useState<Query>({} as Query)
    return (
        <Grid
            templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`
        }}
            templateColumns={{
            base: '1fr',
            lg: '200px 1fr'
            }}
        >
            <GridItem area='nav'>
                <NavBar/>
            </GridItem>

            <Show above="lg">
                <GridItem area='aside' paddingX={5}>
                    <GenreList selectedGenre={Query.genre} onSelect={(genre) => setQuery({...Query, genre})}/>
                </GridItem>
            </Show>

            <GridItem area='main'>
                <HStack spacing={5} paddingLeft={10} marginBottom={-1}>
                    <PlatformSelector selectedPlatform={Query.platform}  onSelect={(platform) => setQuery({...Query,platform})}/>
                    <SortSelector onSelect={(sortOrder) => setQuery({...Query,sortOrder})} selectedOrder={Query.sortOrder}/>
                </HStack>
                <GameGrid  query={Query}/>
            </GridItem>
        </Grid>
    )
}

export default App

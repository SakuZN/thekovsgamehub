import {Grid, GridItem, Show} from "@chakra-ui/react";
import NavBar from "./components/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";
import {useState} from "react";
import {Genre} from "./hooks/useGenres.ts";
import PlatformSelector from "./components/PlatformSelector.tsx";
import {Platforms} from "./hooks/usePlatforms.ts";


function App() {

    const [genre, setGenre] = useState<Genre | null>(null)
    const [platform, setPlatform] = useState<Platforms | null>(null)
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
                    <GenreList selectedGenre={genre} onSelect={(genre) => setGenre(genre)}/>
                </GridItem>
            </Show>

            <GridItem area='main'>
                <PlatformSelector selectedPlatform={platform}  onSelect={(platform) => setPlatform(platform)}/>
                <GameGrid selectedGenre={genre} selectedPlatform={platform}/>
            </GridItem>
        </Grid>
    )
}

export default App

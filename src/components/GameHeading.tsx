import {Heading} from "@chakra-ui/react";
import {Query} from "../App.tsx";

interface GHProps {
    query: Query
}
const GameHeading = ({query}: GHProps) => {
    //Platform followed by genre lastly by "Games"
    const platform = query.platform ? query.platform.name : ""
    const genre = query.genre ? query.genre.name : ""
    const HeadingText = `${platform} ${genre} Games`
    return (
        <Heading as='h1' marginY={5} fontSize='5xl' >
            {HeadingText}
        </Heading>
    )
}
export default GameHeading

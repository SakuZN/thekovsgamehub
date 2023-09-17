import useGenres from "../hooks/useGenres.ts";
import {HStack, Image, List, ListItem, Text} from "@chakra-ui/react";
import cropImageURL from "../services/cropImageURL.tsx";

const GenreList = () => {
    const {data} = useGenres();
    return (
        <List>
            {data.map((genre) =>
                <ListItem
                    key={genre.id}
                    paddingY='5px'
                >
                    <HStack>
                        <Image
                            boxSize={'32px'}
                            borderRadius={8}
                            src={cropImageURL(genre.image_background)}
                        />
                        <Text fontSize='lg'>{genre.name}</Text>
                    </HStack>
                </ListItem>
            )}
        </List>
    )
}
export default GenreList

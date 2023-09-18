import useGenres, {Genre} from "../hooks/useGenres.ts";
import {Button, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import cropImageURL from "../services/cropImageURL.tsx";

interface GLProps {
    onSelect: (genre: Genre) => void
    selectedGenre: Genre | null
}

const GenreList = ({selectedGenre,onSelect}: GLProps) => {
    const {data, isLoading, error} = useGenres();
    if (error) return null
    if (isLoading) return <Spinner/>
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
                            flexShrink={0} // Prevent the image from shrinking
                        />
                        <Button
                            fontSize='lg'
                            variant={'link'}
                            onClick={() => onSelect(genre)}
                            fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'}
                            textAlign={'left'} // Optionally aligns text to the left
                        >
                            {genre.name}
                        </Button>
                    </HStack>
                </ListItem>
            )}
        </List>
    )
}
export default GenreList

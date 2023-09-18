import useGenres, {Genre} from "../hooks/useGenres.ts";
import {Box, Button, Heading, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import cropImageURL from "../services/cropImageURL.tsx";

interface GLProps {
    onSelect: (genre: Genre) => void
    selectedGenre: Genre | null
}

const GenreList = ({selectedGenre,onSelect}: GLProps) => {
    const {data, isLoading, error} = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner/>

    return (
        <Box sx={{ position: 'sticky', top: '15px'}}> {/* Make the list sticky, and have it stop at top: 0 */}
            <Heading fontSize ='2xl' marginBottom={3}>Genres</Heading>

            <List>
                {data.map((genre) =>
                    <ListItem
                        key={genre.id}
                        paddingY='10px'
                    >
                        <HStack>
                            <Image
                                boxSize={'34px'}
                                borderRadius={8}
                                objectFit='cover'
                                src={cropImageURL(genre.image_background)}
                                flexShrink={1} // Prevent the image from shrinking
                            />
                            <Button
                                fontSize='lg'
                                variant={'link'}
                                onClick={() => onSelect(genre)}
                                fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'}
                                textAlign={'left'}
                                whiteSpace={'normal'}
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                )}
            </List>
        </Box>
    )
}
export default GenreList
